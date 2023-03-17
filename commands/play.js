const { SlashCommandBuilder } = require('discord.js');
const { disTube } = require('../index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('play a song')
		.addStringOption(option =>
			option.setName('song')
				.setDescription('the song to play')),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		const title = interaction.options.getString('song');
		disTube.play(interaction.member.voice.channel, title);
		await interaction.reply('playing');
	},
};