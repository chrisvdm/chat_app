import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  changeDetails: function(e) {
    e.preventDefault();
    console.log('This submitted');
  },
  render: function(){
    return (
      <section className="box">
        <h1>Account Setting</h1>
        <form onSubmit={this.changeDetails}>
        <input type="text" value={this.props.data} />
        <input type="submit" value="Save"/>
        </form>
      </section>
    );
  }
});
