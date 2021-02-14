# irclogbot
IRC Bot logging to a local file in JSON format. Written in Node.js


Dependencies:

Node.JS

npm install irc


Configuration:

Edit the irclogbot.js file and change the following parameters to your needs:

path: "/var/log/irc/", // Path to store the log file

server: "irc.freenode.net", // Hostname of the IRC server

channel: ["#channel"], // Name of the channel

botName: "irclogbot" // Nickname of the bot


Run:

node irclogbot.js
