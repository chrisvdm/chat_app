import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState: function(){
    return {usr: '', pw: ''};
  },
  handleUsrChange: function(e) {
    this.setState({usr: e.target.value });
  },
  handlePwChange: function(e) {
    this.setState({pw: e.target.value });
  },
  handleLogin: function(e) {
    e.preventDefault();

    console.log('username:' + this.state.usr);
  },
  render: function() {
    return (
      <section className="box">
        <h1>#chatApp</h1>

        <form onSubmit={this.handleLogin}>
          <h2>Login</h2>
          <p>Fill in your username and password</p>

          <input type="text"
          placeholder="user_name"
          value={this.state.usr}
          onChange={this.handleUsrChange}/>
          <input type="password"
          placeholder="password"
          value={this.state.pw}
          onChange={this.handlePwChange}/>

          <div className="btn-set">
            <Link className="btn btn-border" to="/">Cancel</Link>
            <input className="btn btn-fill" type="submit" value="Login"/>
          </div>

          <p className="small-print"><Link to="/lost-password">Lost password/username?</Link>
           Or do you need to <Link to="/signup">signup</Link>?</p>


        </form>
      </section>
    )
  }
});
