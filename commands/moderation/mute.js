const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();

        if (!message.member.hasPermission("MANAGE_SERVER"))
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
        `Please Create Mute Role | Role Name : Muted`
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    }

    let Reason = args.slice(1).join(" ");

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Muted Member`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};
