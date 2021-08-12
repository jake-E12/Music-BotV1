const distube = require('distube');

module.exports = {
    name: 'stop',
    description: 'stop music command',
    async execute(client, message, args) {
        if (client.distube.isPlaying(message)) {
            client.distube.stop(message);
        } else {
            return message.reply("No music is playing");
        }
    }
}