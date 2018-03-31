import React from 'react';

import Modal from './Modal';
import Login from './Login';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showLogin: false};

    this.showLogin = this.showLogin.bind(this);
    this.cancelLogin = this.cancelLogin.bind(this);
  }

  showLogin() {
    this.setState({
      showLogin: true
    });
  }

  cancelLogin() {
    this.setState({
      showLogin: false
    });
  }

  render() {
    const headerStyle = {
        backgroundColor: 'lightgreen',
        padding: 10,
        height: 180,
        width: '100%',
        overflow: 'hidden'
      };

    const headerButtonStyle = {
        height: 30,
        width: 100,
        display: 'inline-block',
        borderRadius: 5,
        fontSize: 16,
        marginTop: 20,
        marginRight: 35,
        float: 'right'
      };

    return (
      <div style={headerStyle} >
        <button style={headerButtonStyle}  onClick={this.showLogin} >Login</button>
        <Modal show={this.state.showLogin}>
          <Login onCancel={this.cancelLogin} />
        </Modal>
      </div>
    );
  }
}

export default Header;
