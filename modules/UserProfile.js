import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="userProfile">
      <h1>
      <img src="/assets/img/profile.png"/>
      {this.props.data}</h1>
      </div>
    );
  }

});
