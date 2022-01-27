const Discord = require('discord.js')
const { feedbackId } = require('../data/channelIDs.json')

module.exports = {
    name: "bug",
    description: "bug command (embed style)",

    async run (bot, message, args) {

        if(!args[0]) return message.reply('Por favor coloque o motivo do seu report-bug!').then((m) => m.delete({ timeout: 5000 }));

        message.reply(`✉ | Obrigado pelo report! :)`)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}#${message.author.discriminator}, Enviou um report-bug:`)
        .setDescription(`${args}`)
        .addField("Server Destinatário:", `${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)

        
        bot.channels.cache.get(feedbackId).send(embed)
    }
}