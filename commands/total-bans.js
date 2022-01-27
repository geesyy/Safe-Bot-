const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'bans',
	category: 'extra',
	run: async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Você não tem permissão para usar este comando.').then((m) => m.delete({ timeout: 5000 }));
		message.guild.fetchBans().then((bans) => {
			message.channel.send(`E aí, atualmente temos: ${bans.size} pessoas banidas.`);
		});
	},
};