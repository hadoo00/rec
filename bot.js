const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("622787745475199024")
setInterval(function() {
channel.send(`Hello.its.me`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
