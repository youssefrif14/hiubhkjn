const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "517767098043203616";//ايدي السيرفر
var channel = "518107578526466060";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا ')
	},100);
})

client.on('message', message => {
    let prefix = 'البريفكس';
   if(message.content.startsWith('123say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});

client.login("NTE4MTE1MTkxODA0Nzg4NzM2.DuMD4A.RN_z4k--IFB2VPVZnlF_C8p6lLA");
