const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'resume',
    description: 'play the track',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Nessuna musica attualmente in riproduzione ${inter.member}... riprova ? ❌`, ephemeral: true });
        

        if(queue.node.isPlaying()) return inter.editReply({content: `La traccia è già in funzione, ${inter.member}... riprova ? ❌`, ephemeral: true})

        const success = queue.node.resume();
        
        const ResumeEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `Musica attuale ${queue.currentTrack.title} ripreso ✅` : `Qualcosa è andato storto ${inter.member}... riprova ? ❌` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [ResumeEmbed] });

    },
};
