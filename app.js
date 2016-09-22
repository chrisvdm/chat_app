var React = require('react');
var ReactDOM = require('react-dom');
// Move React stuff to index.js


var socket = io();

var MessageApp = React.createClass({
  getInitialState: function() {
  return  {
      name: '',
      img: '',
      id: ''
    };
  },
  componentDidMount: function() {

  },
  render: function() {
    return (
      <MessageBox userInfo={this.state} />
    );
  }
});

var Message = React.createClass({
  render: function() {
    return (
      <li>{this.props.children}</li>
    );
  }
})

var MessageForm = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  handleMessageChange: function(e) {
    this.setState({text: e.target.value });
  },
  handleSend: function(e) {
    e.preventDefault();
    var msg = this.state.text.trim();

    if(!msg) {
      return;
    }
    // call to function that sends message
    this.props.onMessageSend({text: msg});

    // clears input field
    this.setState({text: ''});
  },
  render: function() {
    return (
    <form className="messageForm" onSubmit={this.handleSend}>
      <input
      type="text"
      placeholder="Type your message..."
      value={this.state.text}
      onChange={this.handleMessageChange}
      />
      <input
      type="submit"
      value="Send"
      />
    </form>
    );
  }
});

var MessageList = React.createClass({
  render: function() {
    var msgLs = this.props.data.map(function(msg) {
      return (
        <Message key={msg.id}>
          {msg.text}
        </Message>
      );
    });
    return (
      <ul className="messageList">
        {msgLs}
      </ul>
    );
  }
});

var MessageBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  getServerData: function() {
    //TODO Get old msgs from server to display
  },
  componentDidMount: function() {
    // Receive message
    socket.on('chat message', function(txt) {
      this.setState({data: txt});
    }.bind(this));
  },
  handleMessageSend: function(msg) {
    var messages = this.state.data;
    var newMessages = messages.concat([msg]);
    msg.id = Date.now();

    // Send message to others
    socket.emit('chat message', newMessages);

  },
  render: function() {
    return (
      <div className="messageBox">
        <h1>user_name</h1>
        <MessageList data={this.state.data}/>
        <MessageForm onMessageSend={this.handleMessageSend} />
      </div>
    );
  }
});
