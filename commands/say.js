const Discord = require('discord.js');
 
exports.run = async (bot, message, args) => {
  const sayMessage = args.join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`você não tem permissão para isso.`).then((m) => m.delete({ timeout: 5000 }));
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};