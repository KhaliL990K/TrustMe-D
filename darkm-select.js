const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    async execute(client, message, args) {


        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')

                    .addOptions([
                        {
                            label: 'Main Menu',
                            description: 'Shows the main menu',
                            emoji: "909758706290417714",
                            value: '0',
                        },
                        {
                            label: 'Config Commands',
                            description: 'Shows all the config commands',
                            emoji: "888347974944571392",
                            value: '1',
                        },
                    ]),
            );

        const embed = new MessageEmbed()
            .setTitle("**HELP MENU**")
            .setDescription(`Pls select a category to see more commands.\n\n> <:937587319748329503:963168413226766377> \`\Prefix\`\: \n> <:937586710362091530:963168411083501619> \`\Total Commands\`\: ${client.commands.size}\n> <:937586710362091530:963168411083501619> \`\Total Servers\`\: ${client.guilds.cache.size}\n <:3263_Blank:963173133009948772>
 **Click on the buttons below that embed to guide you to the topics on our board.** `)
            .setImage("https://share.creavite.co/ctRU6W5phQVa2wAr.gif")
            .setColor("#EA8008")


        let sendmsg = message.channel.send({ embeds: [embed], components: [row] })

        let embed1 = new MessageEmbed()
            .setColor('#EA8008')
            .setTitle('**HELP MENU**')
            .addFields(
                { name: "**CONFIG COMMANDS**", value: "`set-countingchannel`, `setwelcomechannel`, `setleavechannel`" })
            .setImage("https://share.creavite.co/ctRU6W5phQVa2wAr.gif")
            .setColor("#EA8008")
            .setFooter('Page 1')


        const filter = i => i.user.id === message.author.id;
        const collector = message.channel.createMessageComponentCollector({
            filter,
            time: 400000,
            componentType: "SELECT_MENU"
        });


        collector.on("collect", async (collected) => {
            const value = collected.values[0]
            if (value === "0") {
                collected.update({ embeds: [embed], components: [row] })
            }
            if (value === "1") {
                collected.update({ embeds: [embed1], components: [row] })
            }


        })




    }
}
