const Discord = require('discord.js');


module.exports = {
    config: {
        name: 'voicekick',
        description: '',
        aliases: ["vk"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
        return message.channel.send(
          "Missing Permissions"
        );
  
      if (!message.mentions.members.first())
        return message.channel.send(
          `Usuário não encontrado!`
        ).then((m) => m.delete({ timeout: 5000 }));
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`O usuário não está participando de algum voice no momento.`).then((m) => m.delete({ timeout: 5000 }));
  
      message.mentions.members.first().voice.kick();
  
      message.channel.send(`Usuário kickado do voice com sucesso, ${message.author}!`);
    
    }
}