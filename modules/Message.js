import React from 'react';

var Message = React.createClass({
  render: function() {
    return (
      <li>{this.props.children}</li>
    );
  }
});
