import React from 'react';

// Custom components
import MessageList from './MessageList';
import MessageForm from './MessageForm';

// Instantiate socket
var socket = io();

export default React.createClass({
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
        <h1>{this.props.params.userName}</h1>
        <MessageList data={this.state.data}/>
        <MessageForm onMessageSend={this.handleMessageSend} />
      </div>
    );
  }
});
