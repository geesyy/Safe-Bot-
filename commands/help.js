const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#091f3b')
    .setDescription(`Ebaa, fico feliz por está interagindo comigo. Está é minha lista de comandos. ${message.author}`)
    .setTimestamp()
    .setFooter(` Lista de comandos. `)
    .addFields(
        {
            name: '.avatar',
            value: `Esse comando foi feito para ver o avatar de uma pessoa em png.`,
            
        },
        {
            name: '.botinfo',
            value: `O comando descreve as informações do bot.`,
            
        },
        {
            name: '.serverinfo',
            value: `O comando descreve as informações de um servidor.`,
            
        },
        {
            name: '.helpadmin',
            value: `O comando descreve as informações dos comandos de um admin.`,
            
        },
        {

        name: '.atualizações',
        value: `O comando descreve todas as atualizações do bot.`,

        },
        
        {

            name: '.uptime',
            value: `O comando diz quanto tempo o bot está online.`,
    
            },

            {

                name: '.ping',
                value: `O comando informa à latência atual do bot.`,
        
                },
                {

                    name: '.feeback',
                    value: `O comando reporta um feedback para o meu dev.`,
            
                    },
                    {

                        name: '.bug',
                        value: `O comando reporta um bug para o meu dev.`,
                
                        },
    )
        
    message.channel.send(embed);

    }