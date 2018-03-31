import React from 'react';

const Login = (props) => {
  
    const loginBoxStyle = {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 50,
        height: 200,
        width: 350,
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '1px 1px 30px gray'
      };

    const loginLabelStyle = {
        height: 40,
        width: 100,
        display: 'inline-block'
      };

    const loginInputStyle = {
        height: 30,
        width: 200,
        display: 'inline-block',
        borderRadius: 5,
        border: 'none'
      };

    const loginButtonStyle = {
        height: 30,
        width: 100,
        display: 'inline-block',
        borderRadius: 5,
        fontSize: 16,
        marginTop: 40,
        marginLeft: 5
      };


    return (
      <div style={loginBoxStyle} >
        <div>
          <label style={loginLabelStyle} >Email</label>
          <input  style={loginInputStyle} />
        </div>
        <div>
          <label style={loginLabelStyle} >Password</label>
          <input  style={loginInputStyle} />
        </div>
        <div>
          <button style={loginButtonStyle} >Login</button>
          <button style={loginButtonStyle} onClick={props.onCancel} >Cancel</button>
        </div>
      </div>
    );
  }

export default Login;
