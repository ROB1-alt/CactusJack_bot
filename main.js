const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')
const { Client, MessageEmbed } = require('discord.js')

//Embed message


client.on('message', message => {
  
  if (message.content === `${prefix}news`){
    const embed = new MessageEmbed()
    
    .setTitle('New release SNS')

    .setColor()

    .setDescription('💸Hello, this is the new releases on the SNS website💸: https://www.sneakersnstuff.com/fr/472/upcoming-releases')


    

  
  message.channel.send(embed);
}
})
  
    

client.login('your token here');

//bot connected
client.on("ready", function () {
    console.log("Cactus Jacks online It's Lit");
})

//DM for new users
client.on('guildMemberAdd', function (member){
    member.createDM().then(function (channel){
        return channel.send('Bienvenue sur le serveur le boss ' + member.displayName)
    }).catch(console.error)
})

// COMMANDS, u can change them if u want 
client.on('message', function (message){
    if (message.content === `${prefix}rapgod`) {
       message.reply('LA FLAME 🔥') 
    }
   
        else if(message.content === `${prefix}server`){
            message.reply(`Nom du serveur : ${message.guild.name}\nNombre d'utilisateurs : ${message.guild.memberCount}`)
        }
    }
    
)


//Testing my ping 

client.on('message', message => {
    if (message.channel.type != 'text' || message.author.bot)
      return;
  
    let command = message.content.split(' ')[0].slice(1);
    let args = message.content.replace('.' + command, '').trim();
  
    switch (command) {
      case 'ping': {
        message.channel.send('Ton ping gros bg(~ ' + 12 + 'ms)');
        break;
      }
  
  
      case 'uptime': {
        // client.uptime is in millseconds
        // this is just maths, I won't explain much of it
        // % is modulo, AKA the remainder of a division
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
  
        message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
        break;
      }

      case 'rules':{
          message.channel.send('-List' )
      }
      case '':{
        message.channel.send('')
      }
    
  }})



client.login("your token");

