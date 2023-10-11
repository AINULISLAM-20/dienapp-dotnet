import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { TopNav } from "./TopNav/TopNav";
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        {/* <TopNav />
        <Hero />
        <NavMenu /> */}
        {this.props.children}
        <Container tag="main">
        </Container>
      </div>
    );
  }
}
