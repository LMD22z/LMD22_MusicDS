const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue) return inter.editReply({ content: `Nessuna musica attualmente in riproduzione ${inter.member}... riprova ? ❌`, ephemeral: true });
        
        if(queue.node.isPaused()) return inter.editReply({content: `La traccia è in pausa, ${inter.member}... riprova ? ❌`, ephemeral: true})

        const success = queue.node.setPaused(true);
        
        const PauseEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `Musica attuale ${queue.currentTrack.title} in pausa ✅` : `Qualcosa è andato storto ${inter.member}... riprova ? ❌` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [PauseEmbed] });
    },
};
// embed update stoped here