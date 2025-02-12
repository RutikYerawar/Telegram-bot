# Telegram Bot

This is a simple Telegram bot built using the [Telegraf](https://github.com/telegraf/telegraf) framework.

## Features
- Responds with a welcome message when a user starts the bot.
- Replies to the command `/whomadethis` with the author's name.
- Reacts to stickers with a thumbs-up emoji.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v12.20.0 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Telegram bot token from [BotFather](https://t.me/BotFather)

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/telegram-bot.git
   cd telegram-bot
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration
Replace `YOUR_BOT_TOKEN_HERE` in `index.js` with your actual bot token from BotFather:

```js
const bot = new Telegraf("YOUR_BOT_TOKEN_HERE");
```

## Usage

Start the bot by running:
```sh
node index.js
```

## Scripts
- `npm start`: Starts the bot.
- `npm test`: Placeholder for test scripts.

## Dependencies
- `telegraf` (v4.16.3) - Telegram bot framework

## License
This project is licensed under the ISC License.

