const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
  name: 'ping',
  execute(client, message, args,) {
    message.reply("pong")
  
  }
}