const distube = require('distube');

module.exports = {
    name: 'play',
    description: 'music command',
    async execute(client, message, args) {
        if (!message.member.voice.channel) {
            message.reply("You need to be in a voice channel!");
            return;
        }
        client.distube.play(message, args.join(" "));
        console.log(`Now playing: ${args.join(" ")}`);
    }
}