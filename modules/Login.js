import React from 'react';

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
        <h2>Login</h2>
        <p>Fill in your username and password</p>

        <form onSubmit={this.handleLogin}>
          <input type="text"
          placeholder="user_name"
          value={this.state.usr}
          onChange={this.handleUsrChange}/>
          <input type="password"
          placeholder="password"
          value={this.state.pw}
          onChange={this.handlePwChange}/>

          <div className="btn-set">
            <input className="btn btn-fill" type="submit"/>
          </div>

        </form>
      </section>
    )
  }
});
