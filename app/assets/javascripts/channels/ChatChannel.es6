var MessageServerActionCreators = require('../actions/MessageServerActionCreators.es6');

var host = document.getElementsByName('host')[0].content;
var cable = Cable.createConsumer("ws://"+host+":28080");

// app/channels/chat_channel.rbに対応
var ChatChannel = cable.subscriptions.create("ChatChannel", {
    connected() {
        // Called once the subscription has been successfully completed
        console.log('ChatChannel connected');
    },

    sendMessage(message) {
        console.log('ChatChannel sendMessage');

        // ここで送ったデータは ChatChannel#message(data) で受け取れる
        this.perform('message', message);
    },

    received(json) {
        var message = JSON.parse(json);
        console.log('ChatChannel message');
        console.log(message);
        MessageServerActionCreators.receiveMessage(message);
    }
});

module.exports = ChatChannel
