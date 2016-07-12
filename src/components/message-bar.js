import React from 'react';
import _ from 'lodash';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';

class MessageBar extends React.Component {
  constructor(props) {
    super(props);

    this.baseStyle = _.merge({
      height: 100,
      backgroundColor: ColorSet.secondary,
      color: ColorSet.black,
      fontFamily: Fonts.sansSerif,
      position: "fixed",
      left: 0,
      right: 0,
      margin: 0,
      padding: "5px 10px",
      boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    }, props.style || {});
  }

  render() {
    return (
      <div style={ this.baseStyle }>
        <p>{ this.props.username }:</p>
        <p>{ this.props.text }
        <p><TimeAgo date={ this.props.createdAt }/></p>
      </div>
    );
  }
}

// export default MessageBar;
