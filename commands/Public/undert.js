const { MessageButtonPages } = require("discord-button-page");
const { Client } = require("discord.js");
const { MessageAttachment } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Canvas } = require('canvacord')
const { PREFIX } = require('../../JSON/config.json');
const Canvao = require('canvas');
const { pagination } = require('reconlx')

module.exports = {
    name: 'under',
    async execute(client, message, args) {
        let content = args[0]
        if (!content) {

            let embeder = new MessageEmbed()
                .setColor("DARK_RED")
                .setDescription(`<:no:939814471847780402> *There's no group name provided* \n \n Write The Name Correctly , for example ${PREFIX}group HoBoS`)

            return message.channel.send({ embeds: [embeder] });

        }

        let img = await Canvas.brightness(`https://cit.gg/mike/online/roster.php?group=${args[0]}`, -10)
        let image = new MessageAttachment(img, "image.png")
        let embed1 = new MessageEmbed()
            .setImage('attachment://image.png')
            .setDescription(`<:9516654829420216930:965265086656696350>  **Status of ${content} Group right now !**
        \n Requested by ${message.author.tag}`)
            .setColor("#5a63f1")
            .setFooter("Developed by Fida2youn#0625 ")
 
            const canvas = Canvao.createCanvas(950, 750);
            const context = canvas.getContext('2d');
            const background = await Canvao.loadImage('https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            context.strokeRect(0, 0, canvas.width, canvas.height);
            const avatar = await Canvao.loadImage(`https://cit.gg/mike/online/whoisonlinemap.php?group=${args[0]}`);
            context.drawImage(avatar, 50, 1, 750, canvas.height);
            const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
            let embedc = new MessageEmbed()
            .setImage("attachment://profile-image.png")
            .setDescription("Testing")
    
        const embedPages = new MessageButtonPages()
        .setEmbeds([embedc, embed1], {files : [attachment] [image]}) // Unlimited embed options
        .setDuration(60000) // Duration of page when stop
        .setReply(true, { replyMention: false }) // Reply the message!
        .setLabelButton(["<< ", "🏠", ">>"]) // Label of the button
        // "965986210231242832 ", "965987720868548678", "965986210046685185"
        embedPages.build(message,{files : [attachment] [image]});
        // (method) MessageButtonPages.setEmojiButton(emojiPrevious?: string, emojiStop?: string, emojiNext?: string):
    }
}