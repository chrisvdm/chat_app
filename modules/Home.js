import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function(){
    return (
      <section>
        <h1>Welcome</h1>
        <Link className="btn btn-border" to="/login">Login</Link>
        <Link className="btn btn-fill" to="/signup">Signup</Link>
      </section>
    );
  }
});
