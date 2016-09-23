import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <li>
        <div className="usr-box" data-user={this.props.user}>{this.props.user}:</div>
        <div className="msg-box">{this.props.children}</div>
      </li>
    );
  }
});
