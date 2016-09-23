import React from 'react';

export default React.createClass({
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
