const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    execute(client, message, args) {

        let Embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setDescription(`Owner: <@${message.guild.ownerId}> | ${message.guild.ownerId}\nMembers: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt.toLocaleString()}`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setImage(message.guild.iconURL({ dynamic: true }))

        message.reply({ embeds: [Embed] })

    }
}