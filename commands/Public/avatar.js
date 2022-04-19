const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'avatar',
    execute(client, message, args) {
        let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id);
        let png = `https://cdn.discordapp.com/avatars/${target.id}/${target.avatar}.png?size=1024`;
        let jpg = `https://cdn.discordapp.com/avatars/${target.id}/${target.avatar}.jpg?size=1024`;
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
              .setLabel("JPG")
    
              .setStyle("LINK")
              .setEmoji("951665482031845377")
              .setURL(jpg),
            new MessageButton()
              .setLabel("PNG")
    
              .setStyle("LINK")
              .setEmoji("951665482031845377")
              .setURL(png)
          )

        const aaf = new MessageEmbed()
            .addFields(
                { name: '\u200b', value: `<a:IconFollowedChannels:951665633869824030> Choise one of buttons below to download Avatar with the format you want  ` },)
            .setDescription(`${target}'s Avatar`)
            .setImage(member.user.avatarURL({ dynamic: true, size: 512 }))
        message.channel.send({ embeds: [aaf], components: [row]})

    }
}
