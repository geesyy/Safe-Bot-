const Discord = require('discord.js')
const { feedbackId } = require('../data/channelIDs.json')

module.exports = {
    name: "feedback",
    description: "feedback command (embed style)",

    async run (bot, message, args) {

        if(!args[0]) return message.reply('Por favor coloque um razão em seu feedback!').then((m) => m.delete({ timeout: 5000 }));

        message.reply(`✉ | Obrigado pelo feedback! :)`)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}#${message.author.discriminator}, Enviou um Feedback:`)
        .setDescription(`${args}`)
        .addField("Server Destinatário:", `${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)

        
        bot.channels.cache.get(feedbackId).send(embed)
    }
}