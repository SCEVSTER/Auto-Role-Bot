const Discord = require('discord.js');
const client = new Discord.Client();
//Token from https://discord.com/developers/applications
const token = '';
//Prefix used at the beginning of commands
const PREFIX = '~';
const permissions = ['ADMINISTRATOR', 'MANAGE_ROLES'];
var default_role = "";

//Ready event logs that bot is online and will react to information
client.on('ready', () =>{
    console.log('Auto bot ready to role out!');
})

//Event listener for commands
client.on('message', message => {
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
        case 'default-role':
            if(message.member.hasPermission(permissions) || message.member.roles.find(r => r.name === "AUTOBOT")){
                
            }
            break;
            
    }
})

//Event listener for new server memebers
client.on('guildMemberAdd', member => {
    if(default_role){
        if()
        member.roles.add(default_role);
    }
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});

//Event Listener for role updates
client.on('roleUpdate', (oldRole, newRole) =>{
    if(oldRole.name === default_role){
        default_role = newRole.name;
    }
});

//Event listener for role deletes
client.on('roleDelete', role => {
    if(role.name === default_role){
        default_role = "";
    }
});

//Log bot in using the token
client.login(token);