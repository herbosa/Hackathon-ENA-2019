import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown, Menu } from 'semantic-ui-react'


export default class NavBar extends Component {
  static propTypes = {
    prop: PropTypes
  }
      state = { activeItem: 'home' }

      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Menu size='massive'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
    
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button primary>Mon compte</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )
      }
}
