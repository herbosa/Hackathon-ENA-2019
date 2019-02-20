import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react'


export default class NavBar extends Component {
     state = { activeItem: 'home' }

      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <div>
          <Menu size='large' borderless>
            <Menu.Item name='logo' onClick={this.handleItemClick}>
              <Image src='static/logo.png' size='small' />
            </Menu.Item>         
            <link
            <Menu.Item name='home' onClick={this.handleItemClick} content='Acceuil'/>
            <Menu.Item name='who' onClick={this.handleItemClick} content='Qui sommes nous?'/>
            <Menu.Item name='cycle' onClick={this.handleItemClick} content='Cycle du biodechet'/>

    
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button primary>Mon compte</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          </div>
        )
      }
}
