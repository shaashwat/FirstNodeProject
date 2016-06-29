require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
var shaashImage = require('../images/WIN_20140823_131302.jpg');
var liked='not';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={shaashImage} alt="yay" />
        <button onclick="liked='yes'">Like Me!</button>
        <div className="notice">{liked} liked!
        </div>
      </div>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
