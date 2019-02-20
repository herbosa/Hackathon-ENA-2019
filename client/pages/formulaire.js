import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";

export default class formulaire extends Component {
    render() {
        return (
            <div>
    <Helmet>
        <title>Acceuil</title>
        <meta name="description" content="Acceuil" />
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
            <NavBar/>
            <Fullpage>
            <FullPageSections>
            <FullpageSection style={{
                backgroundColor: '',
                padding: '1em',
            }}>
            1
            </FullpageSection>
            
            <FullpageSection style={{
                backgroundColor: '',
                padding: '1em',
            }}>
            2
            </FullpageSection>
            
            <FullpageSection style={{
                backgroundColor: '',
                padding: '1em',
            }}>
            3
            </FullpageSection>
            
            </FullPageSections>
            
            </Fullpage>
            </div>
            )
        }
    }
    