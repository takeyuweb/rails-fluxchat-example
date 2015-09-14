var alt = require('../alt.es6');

class MessageServerActionCreators {
    receiveMessage(message) {
        this.dispatch(message);
    }
}
module.exports = alt.createActions(MessageServerActionCreators);
