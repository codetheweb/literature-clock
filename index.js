const quotes = require('./quotes.json');

module.exports = datetime => {
	// https://stackoverflow.com/a/18889674/12638523
	let currentHours = datetime.getHours();
	currentHours = ('0' + currentHours).slice(-2);

	let currentMinutes = datetime.getMinutes();
	currentMinutes = ('0' + currentMinutes).slice(-2);

	let isQuoteFound = false;
	let quote = [];

	while (!isQuoteFound) {
		const queryString = `${currentHours}:${currentMinutes}`;

		if (quotes[queryString]) {
			isQuoteFound = true;
			quote = quotes[queryString];
			break;
		}

		currentMinutes++;
	}

	const randomI = Math.floor(Math.random() * quote.length);

	return quote[randomI];
};
