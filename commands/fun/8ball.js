const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "8ball",
  aliases: [],
  description: "Ask the bot anything",
  usage: "8ball <Question>",
  run: async (client, message, args) => {
    //Start

    message.delete();
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Please Ask me a question!`);

    answers=['Yes','No','Definitely','I am not going to answer that','Isn\'t it obvious?','lol no'];

    let Result = answers[Math.floor(Math.random()*answers.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("**Question:** "+Content+"\n**Answer:** "+Result)
      .setTimestamp();

    message.channel.send(embed);


    //End
  }
};