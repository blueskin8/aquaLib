const aquaLib = require('./aquaLib/index.js')
const Discord = require('discord.js')
const { prefix } = require('./aquaLib/index.js')
const { ClearCommand, UserInfoCommand, BanCommand } = require('./aquaLib/easyCommands/commands/commands.js')

module.exports.checkCommand = (message = Discord.Message, Client = Discord.Client) => {
    /*

        Cette foncion sert seulement si vous voulez ajouter des commandes personnalisées.
        Sert seulement aux développeurs javascript avancés.

        Pour configurer les commandes, aller voir Elements.js

    */
}

// Lancez le bot avec ce fichier