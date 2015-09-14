var alt = require('../alt.es6');
var MessageServerActionCreators = require('./MessageServerActionCreators.es6');
var ChatChannel = require('../channels/ChatChannel.es6');

class MessageActions {
    updateMessages(messages) {
        this.dispatch(messages);
    }

    fetchMessages() {
        this.dispatch();
    }

    messagesFailed(errorMessage) {
        this.dispatch(errorMessage);
    }

    postMessage(message) {
        this.dispatch(message);

        ChatChannel.sendMessage(message);
        /* API側でも登録時ブロードキャストするので、こっちでもOK
        axios.post('/messages.json', {
            message: message
        }).catch(function (response) {
            alert('Post Failed');
        });
        */
    }
}

module.exports = alt.createActions(MessageActions);
