import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function(){
    return (
      <section className="box">
        <h1>#chatApp</h1>
        <p>Login or signup to start chatting to your friends</p>
        <div className="btn-set">
          <Link className="btn btn-border" to="/login">Login</Link>
          <Link className="btn btn-fill" to="/signup">Signup</Link>
        </div>
      </section>
    );
  }
});
