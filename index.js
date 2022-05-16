const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('bot en heroku', { type: 'WATCHING' });
    console.log('Listo!');
});


let prefix = process.env.PREFIX;

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;

    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('pong');

    } else if (message.content.startsWith(prefix + 'say')) {
        if (!args) return;
        message.channel.send(args);
    }

    if (message.content.startsWith(prefix + "hola")) {
        message.channel.send("Hola que tal " + message.author.username + "?");
    }

    if (message.content.startsWith(prefix + "explotion")) {
        message.channel.send("https://www.youtube.com/watch?v=jar1LTxxAeM");
    }

    if (message.content.startsWith(prefix + "duelo")) {
        message.channel.send("https://www.youtube.com/watch?v=EjMM1EzyKPs");
    }

    if (message.content.startsWith(prefix + "velocidad")) {
        message.channel.send("https://youtu.be/IKB6glfxgUE");
    }



});

client.login(process.env.TOKEN);