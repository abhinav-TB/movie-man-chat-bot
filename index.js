const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = `1139073305:AAGdLCGJIFIHOMoMhiC51-PGL0c3-5mGneA`;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var request =require('request');
bot.onText(/\/movie (.+)/,function(msg,match){
    var movie= match[1];
    var chatid=msg.chat.id;
    request(`http://www.omdbapi.com/?apikey=90f3f63a&t=${movie}` ,function(error,response,body){
        if(!error && response.statusCode==200){
            bot.sendMessage(chatid, 'looking for' + movie+'...',{parse_mode:'Markdown'});
            bot.sendMessage(chatid,'result:\n'+body)
        }
    })

});