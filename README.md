# literature-clock

Returns a random quote containing the passed time. 

## Installation

`yarn add literature-clock` or `npm install literature-clock`.

## Usage

Super simple. This:

```javascript
const getQuote = require('literature-clock');

const now = new Date();

console.log(getQuote(now));
```

will result in something like this:

```javascript
{
  time: '8.44!',
  book: 'Around the World in Eighty Days',
  author: 'Jules Verne',
  prefix: `The clock's pendulum beat every second with mathematical regularity, and each player could count every sixtieth of a minute as it struck his ear."`,
  suffix: '" said John Sullivan, in a voice that betrayed his emotion.Only one minute more and the wager would be won.'
}
```


## Credits

Inspired by the [webapp](https://github.com/JohannesNE/literature-clock) (which in turn was inspired by the [Kindle project](https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/)).
