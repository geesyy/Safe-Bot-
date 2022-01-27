const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#f0f0f0')
    .setDescription(`E aí, segue abaixo como que faz pra entrar em nossa comunidade, ${message.author}`)
    .setTimestamp()
    .setFooter(`2022 Safe Community`)
    .addFields(
        {
            name: 'Link do nosso discord:',
            value: `https://discord.gg/66CH9mD5Zy`,
        }
    )
        
    message.channel.send(embed);

    }