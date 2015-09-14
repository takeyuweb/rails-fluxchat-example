var alt = require('../alt.es6');
var MessageSource = require('../sources/MessageSource.es6');
var MessageActions = require('../actions/MessageActions.es6');
var MessageServerActionCreators  = require('../actions/MessageServerActionCreators.es6')

class MessageStore {
    constructor() {
        this.messages = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdateMessages: MessageActions.UPDATE_MESSAGES,
            handleFetchMessages: MessageActions.FETCH_MESSAGES,
            handleMessagesFailed: MessageActions.MESSAGES_FAILED,
            handleReceiveMessage: MessageServerActionCreators.RECEIVE_MESSAGE
        });

        // MessageStore.fetchMessages() で MessageSource.fetchMessages() が呼ばれるようになる
        this.exportAsync(MessageSource);
    }

    handleUpdateMessages(messages) {
        this.messages = messages;
        this.errorMessage = null;
    }

    handleFetchMessages() {
        this.messages = []
    }

    handleMessagesFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }

    handleReceiveMessage(message) {
        this.messages.unshift(message);
    }
}

module.exports = alt.createStore(MessageStore, 'MessageStore');