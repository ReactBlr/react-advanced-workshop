import React from "react";
import styled from "styled-components";
import Card from "../../components/library/card";
import Input from "../../components/library/input";
import Button from "../../components/library/button";
import Logo from "../../components/common/logo";

const ProfileInput = styled(Card)`
  text-align: center;
  box-sizing: border-box;
  width: 500px;
  margin: 20px auto 0;
  padding: 30px 50px;
  min-height: 100px;

  @media (max-width: 600px) {
    width: 90%;
  }

  > input {
    margin-top: 30px;
  }

  > a {
    width: 100%;
    margin-top: 10px;
  }
`;

export default class extends React.Component {
  /* Set initial state */
  state = { username: "" };
  /* Change state on change */
  onChange = event => {
    this.setState({ username: event.target.value });
  };
  /* Trigger submit on enter key */
  onKeyUp = event => {
    if (event.which === 13) this.setState({ username: event.target.value });
  };
  /* Pick value from input on focus */
  onFocus = event => {
    this.setState({ username: event.target.value });
  };
  getUserInfo = () => {
    this.props.getUserInfo(this.state.username);
  };
  /*
    Compose presentation components inside our
    ProfileInput components
  */
  render() {
    return (
      <ProfileInput>
        <Logo />
        <Input
          autoFocus="true"
          placeholder="github username"
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          onFocus={this.onFocus}
        />
        <Button onClick={this.getUserInfo}>See profile</Button>
      </ProfileInput>
    );
  }
}
