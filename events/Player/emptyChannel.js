const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `Nessuno è nel canale vocale e lascia il canale vocale!  ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
