const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#f9ff00')
    .setDescription(`Aqui está, ${message.author}. Abaixo estará todas as minhas atualizações.`)
    .setTimestamp()
    .setFooter(` Versão 1.0.1 `)
    .addFields(
        {
            name: '- Dia 09/04/2021',
            value: `- Adicionado os comandos: bot info, server info, ban, helpadmin, mute, unmute, clear, say e help.`,
            
        },
        {
            name: '- Dia 11/04/2021',
            value: `Adicionado os comandos: tempmute e atualizações.`,
            
        },
        
    )
        
    message.channel.send(embed);

    }

