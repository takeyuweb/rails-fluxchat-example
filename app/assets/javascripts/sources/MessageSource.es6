var MessageActions = require('../actions/MessageActions.es6');

var MessageSource = {
    fetchMessages() {
        return {
            remote(state) {
                return new Promise(function (resolve, reject) {
                    axios.get('/messages.json', {})
                        .then(function(response){
                            resolve(response.data);
                        }).catch(function (response) {
                            reject('Loading Failed.');
                        });
                });
            },

            local() {
                // Never check locally, always fetch remotely.
                return null;
            },
            // fetchMessagesの時に発火するActionの定義
            loading: MessageActions.fetchMessages,
            success: MessageActions.updateMessages,
            error: MessageActions.messagesFailed
        }
    }
};

module.exports = MessageSource;