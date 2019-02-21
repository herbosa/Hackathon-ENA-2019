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
          <div className="nav-bar" style={{backgroundColor: this.props.color}}>
          <Menu size='large' borderless className='nav-bar-color'>
          <Link href='/'>
            <Menu.Item>
              <Image src='../static/logo.png' size='small' />
            </Menu.Item>
            </Link>
            <Link href='/'>
              <Menu.Item name='home'  content='Accueil'/>
              </Link>
            <Link href='/'>
            <Menu.Item name='who'  content='Qui sommes nous?'/>
            </Link>
            <Link href='/'>
            <Menu.Item name='cycle'  content='Cycle du biodechet'/>
            </Link>
            <Link href='/'>
            <Menu.Item name='guide'  content='Le guide du compostage' />
            </Link>
            <Link href='/supports-de-tri'>
              <Menu.Item name='support'  content='Nos supports de tri' />
              </Link>
            <Link href='/'>
            <Menu.Item name='events'  content='Nos Évènements' />
            </Link>


            <Link href='/'>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button primary>Mon Profil</Button>
              </Menu.Item>
            </Menu.Menu>
            </Link>
          </Menu>
          </div>
        )
      }
}
