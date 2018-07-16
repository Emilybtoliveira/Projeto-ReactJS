import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,  UncontrolledTooltip} from 'reactstrap';
import './NavBarComponent.css';

export default class NavbarHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {collapsed: true};
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed});
  }
  render() {
    return (
      <div id="NavbarStyle">
        <Navbar color="faded" light>
          <NavbarBrand href="/">Início</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar}/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://www.codeclubbrasil.org.br/">Sobre o CodeClub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink><a id="UncontrolledTooltip">Sobre nós</a></NavLink>
                <UncontrolledTooltip placement="Bottom" target="UncontrolledTooltip">
                  Não implementado
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}