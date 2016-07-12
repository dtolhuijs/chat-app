import React from 'react';
import AppBar from '../components/app-bar';
import ColorSet from '../styles/ColorSet';

class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar title={ this.props.appName } />
      </div>
    );
  }

}

export default Header;
