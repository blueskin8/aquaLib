const Discord = require('discord.js');

const Commands = require('./commands/commands.js')
const index = require('../../index.js')

const CommandsList  = require('../../Elements.js')

const app = require('../../config/app.json');
const config = require('../../config/config.js');

module.exports.checkMessage = (message = Discord.Message, Client = Discord.Client) => {
    require('../easyBot/helpSystem/help.js').initHelp(Client, message)
    index.checkCommand(message, Client)
    Object.entries(CommandsList).forEach(([key, value]) => {
        if (typeof Commands[key] !== 'function') return;
        if(message.content.startsWith(app.prefix + CommandsList[key].title == "help")) return;
        if(CommandsList[key].active === true && message.content.startsWith(app.prefix + CommandsList[key].title)) return Commands[key](Client, message)
    });
    // if(CommandsList['ClearCommand'] != "" && message.content.startsWith(prefix + CommandsList['ClearCommand'].valueOf())) Commands.ClearCommand(Client, message)
    // if(CommandsList['UserinfoCommand'] != "" && message.content.startsWith(prefix + CommandsList['UserinfoCommand'].valueOf())) Commands.UserInfoCommand(Client, message)
    // if(CommandsList['BanCommand'] != "" && message.content.startsWith(prefix + CommandsList['BanCommand'].valueOf())) Commands.BanCommand(Client, message)
}