import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react'
import Link from 'next/link'
import '../static/css/header.css'
import '../static/css/index.css'



export default class NavBar extends Component {
     state = { activeItem: 'home' }

      handleItemClick = (e, { name }) => this.setState({ activeItem: name })

      render() {
        const { activeItem } = this.state

        return (
          <div className="nav-bar">
          <Menu size='large' borderless className='nav-bar-color'>
          <Link href='/'>
            <Menu.Item>
              <Image src='static/logo.png' size='small' />
            </Menu.Item>
            </Link>
            <Link href='/'>
              <Menu.Item name='home'  content='Accueil'/>
            </Link>
            <Menu.Item name='who'  content='Qui sommes nous?'/>
            <Menu.Item name='cycle'  content='Cycle du biodechet'/>
            <Menu.Item name='guide'  content='Le guide du compostage' />
            <Link href='/supports-de-tri'>
              <Menu.Item name='support'  content='Nos supports de tri' />
            </Link>
            <Menu.Item name='events'  content='Nos Évènements' />


            <Menu.Menu position='right'>
              <Menu.Item>
                <Button primary>Mon Profil</Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu.Item>
            </Menu.Item>
          </Menu>
          </div>
        )
      }
}
