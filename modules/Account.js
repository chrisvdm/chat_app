import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default React.createClass({
  changeUsr: function(e) {
    e.preventDefault();
    console.log('New Username');
  },
  changePw: function(e) {
    e.preventDefault();
    console.log('New password');
  },
  deleteAccount: function(e) {
    e.preventDefault();
    browserHistory.push('/login');
  },
  render: function(){
    return (
      <section className="box">
        <h3>Account Setting</h3>
        <form onSubmit={this.changeUsr}>
        <label>Username</label>
        <input type="text" value={this.props.data} />
        <div className="btn-set">
          <button className="btn btn-fill" type="submit">Change</button>
        </div>
        </form>

        <form onSubmit={this.changePw}>
        <label>Password</label>
        <input type="password" value={this.props.data} />
        <div className="btn-set">
          <button className="btn btn-fill" type="submit">Change</button>
        </div>
        </form>

        <h3 className="danger">Delete Account</h3>
        <form onSubmit={this.deleteAccount}>
        <p>Deleting an account is a permanent action. Think before you delete</p>
        <div className="btn-set">
          <button className="btn btn-danger" type="submit">Delete Account</button>
        </div>
        </form>

      </section>
    );
  }
});
