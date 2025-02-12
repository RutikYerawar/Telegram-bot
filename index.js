const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
// t.me/rutiknew_bot.

const bot = new Telegraf("7647538919:AAGwmwmGN2ElzjZFsfr0XXN_8g-oaPiJQ3Y");

bot.start((ctx) => ctx.reply("Welcome to the new bot of Rutik"));

bot.command("whomadethis", (ctx) => ctx.reply("Rutik Yerawar"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.launch();
