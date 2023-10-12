import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Loader, PrimaryNav, SecondaryNav, NewsLater, Footer, CopyRightFooter } from "./components";

import './superclasses.css';
import './custom.css';
// import './mobile.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <React.Fragment>
        <Loader />
        <PrimaryNav />
        <SecondaryNav />
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
        <NewsLater />
        <Footer />
        <CopyRightFooter />
      </React.Fragment>
    );
  }
}
