import React from 'react';

import Menu from './Menu';

export default React.createClass({

  render: function() {
    return (
      <div className="userProfile">
      <img src="/public/assets/img/default-pp.png"/>
      <h1>{this.props.data}</h1>
      <Menu/>
      </div>
    );
  }

});
