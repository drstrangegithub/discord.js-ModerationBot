const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unmute",
  aliases: [],
  description: "Unmute A User!",
  usage: "Unmute <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();

        if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `There Is No Mute Role, So Member Is Not Muted Anymore!`
      );

    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Unmuted!`);
    }

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Unmuted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Unmuted Member`, `${Member.user.tag} (${Member.user.id})`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && Member.roles.cache.has(Role)) {
      Member.roles.remove([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};
