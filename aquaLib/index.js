const Discord = require('discord.js');

const app = require('../config/app.json');
const config = require('../config/config.js');

const easyBot = require('./easyBot/index.js');

if (config.messagesType !== "text") {
    if (config.messagesType !== "embed") {
        throw "AquaLib : config.js : Un des paramètres n\'est pas correct";
    }
}

if (!app.prefix || !app.name || !app.botColor || !app.token) throw 'AquaLib : app.json : Tous les paramètres de app.json doivent être complétés'


module.exports.Commands = require('./easyCommands/commands/commands.js');
module.exports.prefix = app.prefix.toString()