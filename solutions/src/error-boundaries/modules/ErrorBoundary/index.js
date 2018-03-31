import React, { Component } from "react";
import styled from "styled-components";
import ErrorImage from "../../components/common/errorImage";
import Card from "../../components/library/card";
import Button from "../../components/library/button";
import Label from "../../components/library/label";
const ErrorCard = styled(Card)`
  text-align: center;
  box-sizing: border-box;
  margin: 20px auto 0;
  padding: 30px 50px;
  width: 500px;
  min-height: 100px;
  color: #000000;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }
  reloadPage = () => {
    window.location.reload();
  };
  render() {
    console.log("chekc here", this.state);
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorCard>
          <Label>Ahhh! Something went wrong.</Label>
          <ErrorImage />
          <Button onClick={this.reloadPage}>Reload</Button>
        </ErrorCard>
      );
    }
    return this.props.children;
  }
}
