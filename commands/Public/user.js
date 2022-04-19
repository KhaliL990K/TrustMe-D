const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'user',
    execute(client, message, args) {

        let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id);

        let Embed = new MessageEmbed()
            .setColor('BLUE')
            .setFields(
                { name: 'username:', value: member.user.username },
                { name: 'ID:', value: member.user.id },
                { name: 'Tag:', value: `#${member.user.discriminator}` },
                { name: 'Mention:', value: `<@${member.user.id}>` },
                { name: 'Created at:', value: `${member.user.createdAt.toLocaleString()}` },
                { name: 'Joined at:', value: `${member.joinedAt.toLocaleString()}` },
            )
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
            .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp()

        message.reply({ embeds: [Embed] })

    }
}