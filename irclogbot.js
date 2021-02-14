// Create the configuration
var config = {
        path: "/var/log/irc/", // Path to store the log file
        server: "irc.freenode.net", // Hostname of the IRC server
        channel: ["#channel"], // Name of the channel
        botName: "irclogbot" // Nickname of the bot
};

// Get the lib for IRC
var irc = require("irc");

// Get the lib for filesystem writing
const fs = require('fs');

const CreateFiles = fs.createWriteStream(config.path + config.channel[0] + ".log", {
      flags: 'a' //flags: 'a' preserved old data
})

// Set date in ISO 8601 format
var date = new Date();
date.toISOString();

// Create the bot
var bot = new irc.Client(config.server, config.botName, {
        channels: config.channel
});

// Listen for any channel message, write it to a file
 bot.addListener("message" + config.channel, function(nick, text, message) {
    console.log(nick + ' => ' + ': ' + text);
    CreateFiles.write(JSON.stringify({ timestamp: date, channel: config.channel[0], nick, text }, null, 2).replace(/\n/g, '\r\n') + '\r\n')
});

// Write errors to the console
bot.addListener('error', function(message) {
    console.log('error: ', message);
});
