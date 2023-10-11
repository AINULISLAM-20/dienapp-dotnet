import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { TopNav } from "./TopNav/TopNav";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <TopNav />
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
