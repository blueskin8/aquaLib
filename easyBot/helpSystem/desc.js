const Discord = require('discord.js')
const app = require('../../../config/app.json')

/* 

    Bouttons :
        0 : tous les bouttons
        1 : seulement celui de page avant (flèche gauche)
        2 : seulement celui de page après (flèche droite)

*/

module.exports = {
    HelpCommand: {
        title: "Help",
        desc: "Affiche l'help (cette fenêtre)\n**Syntaxe** : help [command : " + app.name + ".Command]",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Help")
            .setDescription("Affiche l'help (cette fenêtre)\n**Syntaxe** : help"/* + [command : " + app.name + ".Command]"*/)
            .setColor(app.botColor).setTimestamp().setFooter({text: app.name, iconURL: app.iconURL}) ]
    },
    ClearCommand: {
        title: "Clear",
        desc: "Supprime des messages\n**Syntaxe** : clear <NombreDeMessagesASupprimer : int>",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Clear")
            .setDescription("Supprime des messages\n**Syntaxe** : clear <NombreDeMessagesASupprimer : int>")
            .setColor(app.botColor).setTimestamp().setFooter({text: app.name, iconURL: app.iconURL}) ]
    },
    UserinfoCommand: {
        title: "Userinfo",
        desc: "Récupère des informations sur un utilisateur\n**Syntaxe** : userinfo [Mention : Discord.MessageMentions]",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Userinfo")
            .setDescription("Récupère des informations sur un utilisateur\n**Syntaxe** : userinfo [Mention : Discord.MessageMentions]")
            .setColor(app.botColor).setTimestamp().setFooter({text: app.name, iconURL: app.iconURL}) ]
    },
    BanCommand: {
        title: "Ban",
        desc: "Banni un utilisateur\n**Syntaxe** : ban <Mention : Discord.MessageMentions> [Raison : string]",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Ban")
            .setDescription("Banni un utilisateur\n**Syntaxe** : ban <Mention : Discord.MessageMentions> [Raison : string]")
            .setColor(app.botColor).setTimestamp().setFooter({text: app.name, iconURL: app.iconURL}) ]
    },
    TestCommand: {
        title: "Test",
        desc: "Test la connexion du bot discord\n**Syntaxe** : test",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Test")
            .setDescription("Test la connexion du bot discord\n**Syntaxe** : test")
            .setColor(app.botColor).setTimestamp().setFooter({text: app.name, iconURL: app.iconURL}) ]
    }
}