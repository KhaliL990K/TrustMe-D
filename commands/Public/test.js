const { MessageAttachment, Util } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Canvas } = require('canvacord')
const Canvao = require('canvas');
const { PREFIX } = require('../../JSON/config.json');
const { pagination } = require('reconlx')
const { Canvacord } = require('canvacord')


module.exports = {
    name: 'hot',
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

        let img2 = await Canvas.brightness(`https://cit.gg/mike/online/whoisonlinemap.php?group=${args[0]}`, 10)
        let imagee = new MessageAttachment(img2, "imagee.png")
        let embed2 = new MessageEmbed()
            .setImage('attachment://imagee.png')
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
        .setDescription(`<:9516654829420216930:965265086656696350>  **Online Map of ${content} Group right now !**
        \n Requested by ${message.author.tag}`)
        .setColor("#5a63f1")
        .setFooter("Developed by Fida2youn#0625 ")
        message.channel.send({ embeds: [embed1] , files : [image]  })

        message.channel.send({ embeds: [embedc] , files : [attachment]  })
    }

}