const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `Niente più canzoni in coda! ❌`})
    .setColor('#2f3136')

    queue.metadata.send({ embeds: [emptyQueue] })
}
