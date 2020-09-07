const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("./token.json");

client.login(token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "!hello") {
    msg.reply("Hello world!");
  } else if (msg.content.toLowerCase() === "!help") {
    msg.reply("There are two commands: !hello !help");
  }
});
