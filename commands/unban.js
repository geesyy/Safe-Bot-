const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'unban',
	run: async (client, message, args) => {
		if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Você não tem permissão para executar esse comando.').then((m) => m.delete({ timeout: 5000 }));

		if (!args[0]) return message.channel.send('Por favor, insira a ID do banido!').then((m) => m.delete({ timeout: 5000 }));

		let member;

		try {
			member = await client.users.fetch(args[0]);
		} catch (e) {
			console.log(e);
			return message.channel.send('Este não é um user válido!').then((m) => m.delete({ timeout: 5000 }));
		}

		const reason = args[1] ? args.slice(1).join(' ') : 'sem razões';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		return message.guild.fetchBans().then((bans) => {
			const user = bans.find((ban) => ban.user.id === member.id);

			if (user) {
				embed.setTitle(`Desbanido com sucesso:`)
					.setColor('#00ff00')
					.addField('User ID', user.user.id, true)
					.addField('User Tag', user.user.tag, true)
					.addField('Razão do Banimento', user.reason != null ? user.reason : 'sem razões')
					.addField('Unbanned Reason', reason);
				message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed));
			} else {
				embed.setTitle(`${member.tag}, não encontra-se banido!`)
					.setColor('#ff0000');
				message.channel.send(embed);
			}
		}).catch((e) => {
			console.log(e);
			message.channel.send('Perdão, ocorreu um erro!');
		});
	},
};