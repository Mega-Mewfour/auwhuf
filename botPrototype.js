var Discord = require("discord.js");
var bot = new Discord.Client();
var sender = new Discord.Client();
var fs = require('fs');
var readline = require('readline');


let targetedGuild = "252525368865456130";
//let targetGuild = "254746488993742850";
//let targetChannel = "274085775178596352";
//let targetGuild2 = "261614766227718146";
//let targetChannel2 = "280912447106318336";

let activityLog = {};
let userLog = {};

var botEnable = true;

var noMention = function(text){
  let array = [];
  text.split("").forEach((c) => {if(c != "@"){array.push(c);}});
  return array.join("");
}

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('error', e => {
  if (e);
  console.error(e);
});

bot.on("message", msg => {
  if (msg.content == "??activitydump"){
    if (!msg.author == bot.user) return;
    for (let i = 0; i < 24; i++){
      if (activityLog[i.toString()]){
        msg.channel.sendMessage(i + ": ");
        Object.keys(activityLog[i.toString()]).forEach(function(key,index) {
          msg.channel.sendMessage("     " + key + ": " + activityLog[i.toString()][key].messages);
        });
      }
    }
  }
  
  if (msg.content == "??userdump"){
    if (!msg.author == bot.user) return;
    for (let i = 0; i < 24; i++){
      if (userLog[i.toString()]){
        msg.channel.sendMessage(i + ": ");
        Object.keys(userLog[i.toString()]).forEach(function(key,index) {
          msg.channel.sendMessage("     " + key + ": " + userLog[i.toString()][key].messages);
        });
      }
    }
  }
  
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (msg.guild.id == targetedGuild){
  let d = new Date();
  if (!activityLog[d.getHours().toString()]){
      activityLog[d.getHours().toString()] = {};
      activityLog[d.getHours().toString()][msg.channel.name] = {messages: 1};
  }else{
    if (!activityLog[d.getHours()][msg.channel.name]){
      activityLog[d.getHours().toString()][msg.channel.name] = {messages: 1};
    }else{
      activityLog[d.getHours().toString()][msg.channel.name].messages++;
    }
  }
  
  if (!userLog[d.getHours().toString()]){
      userLog[d.getHours().toString()] = {};
      userLog[d.getHours().toString()][msg.author.username] = {messages: 1};
  }else{
    if (!userLog[d.getHours()][msg.author.username]){
      userLog[d.getHours().toString()][msg.author.username] = {messages: 1};
    }else{
      userLog[d.getHours().toString()][msg.author.username].messages++;
    }
  }
  }
  
  
  
  
  /*if (msg.guild.id == targetedGuild){
    if (msg.content.toLowerCase().includes("mega") || msg.content.toLowerCase().includes("mewthree") || msg.content.toLowerCase().includes("nebby") || msg.content.toLowerCase().includes("nobby") || msg.content.toLowerCase().includes("azure") || msg.content.toLowerCase().includes("poosi") || msg.content.toLowerCase().includes("trapomine") || msg.content.toLowerCase().includes("mew") || msg.content.toLowerCase().includes("nebula")){
      sender.guilds.get(targetGuild).channels.get(targetChannel).sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + msg.content);
      sender.guilds.get(targetGuild2).channels.get(targetChannel2).sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + msg.content);
      sender.users.get("197592250354499584").sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + msg.content);
    }
  }
  if (botEnable == true){
    let filtered = noMention(msg.content);
    if (msg.guild.id == targetedGuild){
      //bot.guilds.get(targetGuild).channels.get(targetChannel).sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + msg.content);
      sender.guilds.get(targetGuild2).channels.get(targetChannel2).sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + filtered);
      if (msg.attachments.first()){
        //bot.guilds.get(targetGuild).channels.get(targetChannel).sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + msg.attachments.first().url);
        sender.guilds.get(targetGuild2).channels.get(targetChannel2).sendMessage("[" + msg.channel.name + "]: " + msg.author.username + ": " + msg.attachments.first().url);
      }
    }
  }
  if((msg.author.id != bot.user.id) && (msg.author.id != "197592250354499584")) return;
  let prefix = "-";
  let command =  ((msg.content.split(" "))[0]).replace(prefix, '');
  let args = msg.content.split(" ").slice(1);
  if(!msg.content.startsWith(prefix)) return;
  if (command == "botenable"){
    botEnable = true;
    msg.channel.sendMessage("Bot enabled!");
  }
  if (botEnable == true){

  if (command == "botdisable"){
    botEnable = false;
    msg.channel.sendMessage("Bot disabled!");
  }
}
*/
});

bot.login("MjgwMjM1OTUxNzI3MzEyODk2.C4rWIQ.I9ffiBGWSmHZ6M7zS1772AMz93c");

//bot.login("MjY1MDE1NjI0MjUyNjUzNTY4.C4T0Bw.jETDBQns3fdPcbRFuyjtfd4KjtY");
//sender.login("Mjc3NDkwMjI4MTc0OTEzNTM3.C3eg9w.VhehY4E_QZ-_2fAn_eD29LSpl5w");
