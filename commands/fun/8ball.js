
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: [],
  category: "Fun",
  description: "Return A Answer Of Question!",
  usage: "8ball <Question>",
  run: async (client, message, args) => {
    
    const Responses = ["Yes", "No", "Maybe", "Probably", "Not Sure", "Definitely", "Certainly"], Random = Responses[Math.floor(Math.random () * Responses.length)];
    const Question = args.join(" ");

    if (!Question) return message.channel.send("Please Give Your Question!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(Random)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
