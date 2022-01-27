const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#091f3b')
    .setDescription(`Aqui está minha lista de comandos admin, use com moderação. ${message.author}`)
    .setTimestamp()
    .setFooter(` Lista de comandos. `)
    .addFields(
        {
            name: '.ban',
            value: `O comando executa o banimento do player.`,
        },
        {
            name: '.clear',
            value: `O comando limpa o chat.`,
        },
        {
            name: '.addrole',
            value: `O comando adiciona tag ao usuário.`,
        },
        {
            name: '.removerole',
            value: `O comando pode retirar tag de um usuário.`,
        },
        {
            name: '.mute',
            value: `O comando silencia certa pessoa.`,
        },
        {
            name: '.unmute',
            value: `O comando desmuta uma pessoa que estava silenciada.`,
        },
        {
            name: '.tempmute',
            value: `O tempmute tem a mesma função dos comandos: mute, unmute. Porém, mais prático.`,
        },
        {

            name: '.say',
            value: `O comando faz com que o bot deixe uma mensagem.`,
    
            },
            {

                name: '.unban',
                value: `O comando faz com que uma pessoa seja desbanida do servidor.`,
        
                },
                {

                    name: '.total-bans',
                    value: `O comando mostra a quantidade de pessoas banidas no servidor.`,
            
                    },
    )
        
    message.channel.send(embed);

    }