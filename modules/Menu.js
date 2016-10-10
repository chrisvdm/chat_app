import React from 'react';

import {Link} from 'react-router';

export default React.createClass({
  showMenu: function() {
    console.log('Menu clicked');
    const list = _('.drop-down');
    if(list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  },
  render: function() {
    return (
      <div onClick={this.showMenu}>
      <h3><i className='fa fa-bars'></i></h3>
      <ul className="drop-down">
        <li><Link to="/account/" data={this.children} >Account</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
      </div>
    );
  }
});
