const fs = require('fs');
const csv = require('csv');

const readStream = fs.createReadStream('./quotes.csv');

const res = {};

readStream.pipe(csv.parse({delimiter: '|'})).on('data', row => {
	const time = row[0].trim();
	let timeText = row[1].trim();
	const quote = row[2].trim();
	const book = row[3].trim();
	const author = row[4].trim();

	const timeIndex = quote.toLowerCase().indexOf(timeText.toLowerCase());

	// Adjust for uppercase/lowercase
	timeText = quote.slice(timeIndex, timeIndex + timeText.length);

	const parsed = {
		time: timeText,
		book,
		author
	};

	if (timeIndex === 0) {
		parsed.prefix = '';
		parsed.suffix = quote.slice(timeIndex + timeText.length, quote.length - 1);
	} else {
		parsed.prefix = quote.slice(0, timeIndex);
		parsed.suffix = quote.slice(timeIndex + timeText.length, quote.length);
	}

	if (!res[time]) {
		res[time] = [];
	}

	res[time].push(parsed);
}).on('end', () => {
	fs.writeFileSync('quotes.json', JSON.stringify(res));
});
