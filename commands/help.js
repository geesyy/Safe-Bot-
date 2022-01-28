const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#091f3b')
    .setDescription(`Ebaa, fico feliz por está interagindo comigo. Está é minha lista de comandos. ${message.author}`)
    .setTimestamp()
    .setFooter(` Lista de comandos. `)
    .addFields(
        {
            name: 's!avatar',
            value: `Foi feito para ver o avatar de uma pessoa em png.`,
            
        },
        {
            name: 's!botinfo',
            value: `Descreve as informações do bot.`,
            
        },
        {
            name: 's!serverinfo',
            value: `Descreve as informações de um servidor.`,
            
        },
        {
            name: 's!helpadmin',
            value: `Descreve as informações dos comandos de um admin.`,
            
        },
        {

            name: 's!uptime',
            value: `O comando diz quanto tempo o bot está online.`,
    
            },

            {

                name: 's!ping',
                value: `Informa à latência atual do bot.`,
        
                },
                {

                    name: 's!feeback',
                    value: `Reporta um feedback para o meu dev.`,
            
                    },
                    {

                        name: 's!bug',
                        value: `Reporta um bug para o meu dev.`,
    
                        },
                    {

                        name: 's!comunidade',
                        value: `Indica o convite do nosso discord oficial.`,
        
                        },
    )
        
    message.channel.send(embed);

    }

