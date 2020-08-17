const Discord = require('discord.js');
const client = new Discord.Client();
//Token from https://discord.com/developers/applications
const token = 'NzQ0NjkyNjQzNDcyMjEyMDky.Xzm7EQ.asE1i7t9eSN7eUzailFIXP_iy1o';
//Prefix used at the beginning of commands
const PREFIX = '~';

//Ready event logs that bot is online and will react to information
client.on('ready', () =>{
    console.log('Auto bot ready to role out!');
})

//Event listener for commands
client.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.channel.send("Pinging...").then(m =>{
                //Calculate ping
                var ping = m.createdTimestamp - message.createdTimestamp;
                var botPing = Math.round(client.pi);
                m.edit(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms`);
            });
            break;
    }
})

//Event listener for new server memebers
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

//Log bot in using the token
client.login(token);