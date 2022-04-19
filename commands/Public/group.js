const { MessageAttachment } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Canvas } = require('canvacord')
const { PREFIX } = require('../../JSON/config.json');
const { pagination } = require('reconlx')


module.exports = {
    aliases: ["g", "grop", "groupe"],
    name: 'group',
    async execute(client, message, args) {
        let content = args[0]
        if (!content) {
            let embeder = new MessageEmbed()
                .setColor("DARK_RED")
                .setDescription(`<:no:939814471847780402> *There's no group name provided* \n \n Write The Name Correctly , for example ${PREFIX}group HoBoS`)

            return message.channel.send({ embeds: [embeder] });

        }
        let wait = new MessageEmbed()
        .setDescription(" **This going to take a little bit of time** \n \n *<:sandtimer:966018265518325770> Loading please wait...* ")
        const msg = await message.channel.send({embeds: [wait]})
        .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })

        let img = await Canvas.brightness(`https://cit.gg/mike/online/roster.php?group=${args[0]}`, 10)
        let image = new MessageAttachment(img, "image.png")
        let embed1 = new MessageEmbed()
            .setImage('attachment://image.png')
            .setDescription(`<:9516654829420216930:965265086656696350>  **Status of ${content} Group right now !**
        \n Requested by ${message.author.tag}`)
            .setColor("#5a63f1")
            .setFooter("Developed by Fida2youn#0625 ")
        message.channel.send({ embeds: [embed1]  ,  files: [image]  });

        message.react("<:thumbs:966020089809879041> ")




    }
}
