import React, { Component } from 'react'
import NavBar from '../components/nav-bar'
import FormUsage from '../components/form-utilisatison'
import { Helmet } from "react-helmet";
import { Button, Dropdown, Menu, Image, Divider, Header } from 'semantic-ui-react'
import '../static/css/form.css'
import '../static/css/index.css'

export default class Support extends Component {
    render() {
        return (
            <div className='main-page'>
            <Helmet bodyAttributes={{ style: 'background-color : #ab9275' }}>
                    <title>formulaire</title>
                    <meta name="description" content="formulaire" />
                    <meta name="googlebot" content="noindex"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="../static/logo.png" type="image/png" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Helmet>
                <NavBar color='#ab9275' />
                        <Divider hidden className='ten-perc-divider' />
                        <Image src='../static/slide 0.png' centered size='massive' />
                        <Header as='h1' className='white-text first-page-text' textAlign='center'>
                            <i className="fas fa-chevron-circle-down"></i>
                        </Header>
                            <Divider hidden className='ten-perc-divider' />
                            <Image src='../static/slide 1.png' centered size='massive' />
                            <Header as='h1' className='white-text first-page-text' textAlign='center'>
                                <i className="fas fa-chevron-circle-down"></i>
                            </Header>
                            <Divider hidden className='ten-perc-divider' />
                            <Image src='../static/slide 2.png' centered size='massive' />
                            <Header as='h1' className='white-text first-page-text' textAlign='center'>
                                <i className="fas fa-chevron-circle-down"></i>
                            </Header>
                            <Divider hidden className='ten-perc-divider' />
                            <Image src='../static/slide 3.png' centered size='massive' />
            </div>
        )
    }
}