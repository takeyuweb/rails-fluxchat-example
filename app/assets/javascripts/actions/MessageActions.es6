var alt = require('../alt.es6');
var MessageServerActionCreators = require('./MessageServerActionCreators.es6');

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

        axios.post('/messages.json', {
            message: message
        }).then(function (response) {
            MessageServerActionCreators.receiveMessage(response.data);
        }).catch(function (response) {
            alert('Post Failed');
        });
    }
}

module.exports = alt.createActions(MessageActions);
