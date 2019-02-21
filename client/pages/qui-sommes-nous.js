import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import FormUsage from '../components/form-utilisatison'
import { Helmet } from "react-helmet";
import { Button, Dropdown, Menu, Image, Divider, Header } from 'semantic-ui-react'
import '../static/css/form.css'
import '../static/css/index.css'

export default class Who extends Component {
    render() {
        return (
            <div className='main-page'>
                <Helmet>
                    <title>formulaire</title>
                    <meta name="description" content="formulaire" />

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="../static/logo.png" type="image/png" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Helmet>
                <NavBar color='#ab9275' />
                <Fullpage>
                    <FullPageSections>
                        <FullpageSection style={{
                            backgroundColor: '#ab9275',
                            padding: '1em'
                        }}>
                            <Divider hidden className='ten-perc-divider' />
                            <Image src='../static/accueil 1.png' centered size='massive' />
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
            </div>
        )
    }
}