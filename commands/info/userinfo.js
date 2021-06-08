const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "userinfo",
  aliases: ["memberinfo", "whois"],
  description: "Show User Information!",
  usage: "Userinfo | <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let member = message.mentions.users.first() || message.member;

    const statuses = {
      online: "Online",
      dnd: "Do Not Disturb",
      idle: "Idle",
      offline: "Offline/Invisible"
    };

    const embed = new MessageEmbed()
      .setTitle(member.user.username + " Information!")
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Full Name", member.user.tag, true)
      .addField("ID", `${member.id}`, true)
      .addField("Status", statuses[member.presence.status], true)
      .addField(
        `Roles Count`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "No Roles!",
        true
      )
      .addField(`Avatar Url`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("Joined Server At", member.joinedAt.toDateString())
      .addField("Joined Discord At", member.user.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};