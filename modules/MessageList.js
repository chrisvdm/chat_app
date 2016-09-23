import React from 'react';

// Custom components
import Message from './Message';

export default React.createClass({
  render: function() {
    var msgLs = this.props.data.map(function(msg) {
      return (
        <Message key={msg.id} user={msg.usr}>
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
