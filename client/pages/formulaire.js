import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import { Button, Dropdown, Menu, Image, Divider } from 'semantic-ui-react'
import '../static/css/form.css'

export default class formulaire extends Component {
    render() {
        return (
            <div>
    <Helmet>
        <title>formulaire</title>
        <meta name="description" content="formulaire" />
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
            <NavBar/>
            <Fullpage>
            <FullPageSections>
            <FullpageSection style={{
                backgroundColor: '#22CADE',
                padding: '1em',
            }}>
                <Divider hidden className='header-divider'/>
                <div>

                </div>
            </FullpageSection>
            
            <FullpageSection style={{
                backgroundColor: '#EA904F',
                padding: '1em',
            }}>
                <Divider hidden className='header-divider'/>
            2
            </FullpageSection>
            
            <FullpageSection style={{
                backgroundColor: '#B5D43C',
                padding: '1em',
            }}>
                <Divider hidden className='header-divider'/>
            3
            </FullpageSection>
            
            </FullPageSections>
            
            </Fullpage>
            </div>
            )
        }
    }
    