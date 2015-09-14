var React = require('react/react-with-addons');
var AltContainer = require('alt/AltContainer');
var MessageStore = require('../stores/MessageStore.es6');
var MessageActions = require('../actions/MessageActions.es6');
var ENTER_KEY_CODE = 13;

var MessageForm = React.createClass({
    getInitialState() {
        return {
            message: ''
        };
    },

    changeMessage(e) {
        this.setState({message: e.target.value});
    },

    changeRecipient(e) {
        this.setState({to: e.target.value});
    },

    onKeyDown(e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            var message = {
                to: this.state.to,
                body: this.state.message
            };
            MessageActions.postMessage(message);
            this.setState({message: ''});
        }
    },

    render() {
        return (
            <div>
                <input
                    type="text"
                    size="30"
                    value={this.state.to}
                    onChange={this.changeRecipient}
                    placeholder="Recipient (Optional)"/>
                <input
                    type="text"
                    size="80"
                    placeholder="Input Message"
                    value={this.state.message}
                    onChange={this.changeMessage}
                    onKeyDown={this.onKeyDown} />
            </div>
        );
    }
});

var AllMessages = React.createClass({
    render() {
        if (this.props.errorMessage) {
            return (
                <div>{this.props.errorMessage}</div>
            );
        }

        if (MessageStore.isLoading()) {
            return (
                <div>
                    <img src="/assets/ajax-loader.gif" />
                </div>
            )
        }

        return (
            <ul>
                {
                    this.props.messages.map((message, i)=> {
                        return (
                            <li key={i}><span style={{color: '#999999'}}>[{message.uuid}]</span> {message.body}</li>
                        );
                    })
                }
            </ul>
        );
    }
});

var Messages = React.createClass({
    componentDidMount() {
        // 初期データ読み込み開始
        MessageStore.fetchMessages();
    },

    render() {
        return (
            <AltContainer store={MessageStore}>
                <MessageForm />
                <AllMessages />
            </AltContainer>
        );
    }
});

module.exports = Messages;