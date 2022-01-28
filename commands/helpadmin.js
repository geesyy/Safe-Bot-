const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#091f3b')
    .setDescription(`Aqui está minha lista de comandos admin, use com moderação. ${message.author}`)
    .setTimestamp()
    .setFooter(` Lista de comandos. `)
    .addFields(
        {
            name: 's!ban',
            value: `O comando executa o banimento do player.`,
        },
        {
            name: 's!clear',
            value: `O comando limpa o chat.`,
        },
        {
            name: 's!addrole',
            value: `O comando adiciona tag ao usuário.`,
        },
        {
            name: 's!removerole',
            value: `O comando pode retirar tag de um usuário.`,
        },
        {
            name: 's!mute',
            value: `O comando silencia certa pessoa.`,
        },
        {
            name: 's!unmute',
            value: `O comando desmuta uma pessoa que estava silenciada.`,
        },
        {
            name: 's!tempmute',
            value: `O tempmute tem a mesma função dos comandos: mute, unmute. Porém, mais prático.`,
        },
        {

            name: 's!say',
            value: `O comando faz com que o bot deixe uma mensagem.`,
    
            },
            {

                name: 's!unban',
                value: `O comando faz com que uma pessoa seja desbanida do servidor.`,
        
                },
                {

                    name: 's!total-bans',
                    value: `O comando mostra a quantidade de pessoas banidas no servidor.`,
            
                    },
    )
        
    message.channel.send(embed);

    }