import React from 'react';

class Modal extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }

     const modalStyle = {
        background: 'transparent',
        width: '100%',
        textAlign: 'center'
      };


    return <div style={modalStyle} >
        {this.props.children}
      </div>;
  }
}

export default Modal;
