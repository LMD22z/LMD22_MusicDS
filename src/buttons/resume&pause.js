module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nessuna musica attualmente in riproduzione... riprova ? ❌`, ephemeral: true });

    const resumed = queue.node.resume();
    let message = `Musica attuale ${queue.currentTrack.title} ripreso ✅`;
    
    if (!resumed) {
        queue.node.pause();
        message = `Musica attuale ${queue.currentTrack.title} in pausa ✅`;
    }

    return inter.editReply({
        content: message, ephemeral: true
    });
}