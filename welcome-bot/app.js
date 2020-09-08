const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("./token.json");
const { general } = require("./../channels.json");

client.login(token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("reconnecting", () => {
  console.log(`${client.user.tag} is trying to reconnect`);
});

client.on("guildMemberAdd", (member) => {
  client.channels.cache.get(general).send(`Hello ${member}!`);
});
