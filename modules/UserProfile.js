import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="userProfile">
      <h1>
      <img src="/public/assets/img/default-pp.png"/>
      {this.props.data}</h1>
      </div>
    );
  }

});
