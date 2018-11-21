import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import SignedInMenu from './menus/SignedInMenu';
import SignedOutMenu from './menus/SignedOutMenu';

class NavBar extends Component {
  state = {
    authenticated: false,
    profile: {
      displayName: '山本 権兵衛',
      photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
    }
  }

  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            Redux Firebase
          </Menu.Item>
          {this.state.authenticated ? (
            <SignedInMenu profile={this.state.profile} signOut={() => {console.log('logout')}} />
          ) : (
            <SignedOutMenu signIn={() => {console.log('signin')}} register={() => {console.log('register')}} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
