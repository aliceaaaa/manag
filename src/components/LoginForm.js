import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./common";
import { emailChanged } from "../acions";

const mapStateToProps = state => {
  const email = state.email;
  return { email };
};

class LoginForm extends Component {
  onChangeEmail = text => {
    this.props.emailChanged(text);
  };
  onChangePassword = text => {};
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@example.com"
            label="Email"
            onChangeText={this.onChangeEmail}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            omChangeText={this.onChangePassword}
          />
        </CardSection>
        <CardSection>
          <Button>L OG IN</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  { emailChanged }
)(LoginForm);
