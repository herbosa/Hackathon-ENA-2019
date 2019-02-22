import React, { Component } from 'react'
import NavBar from '../components/nav-bar'
import FormDechet from '../components/form-dechet'
import {Helmet} from "react-helmet";
import { Button, Dropdown, Menu, Image, Divider, Header } from 'semantic-ui-react'
import '../static/css/form.css'
import '../static/css/index.css'


export default class formulaire extends Component {
    render() {
        return (
            <div>
        <Helmet bodyAttributes={{ style: 'background-color : #22CADE' }}>
        <title>formulaire</title>
        <meta name="description" content="formulaire" />
        <meta name="googlebot" content="noindex"/>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
                <NavBar color='#22CADE' />
                <Divider hidden className='center-divider'/>
                <div>
                <Header as='h1' className='white-text first-page-text' textAlign='center'>
                    <Header.Content>J'ai des biodéchets dont je ne sais pas quoi faire.</Header.Content>
                </Header>

                <Divider hidden className='twt-perc-divider'/>

                   <Header as='h1' className='white-text first-page-text' textAlign='center' >
                        <i className="fas fa-chevron-circle-down"></i>
                    </Header>
                </div>
                <Divider hidden className='fft-perc-divider'/>
                <div>
                <Header as='h1' className='white-text second-page-text' textAlign='center'>
                    <Header.Content>Ça tombe bien! Nous pouvons vous aider.<br/>Dites-nous qui vous êtes et quels déchets vous avez,<br/>et nous leur trouverons un avenir</Header.Content>
                </Header>

                <Image src='../static/icons/noun_Apple_Core_white.png' className="second-page-apple-core" size='small' />
                    <Image src='../static/icons/noun_Dead_Fish_white.png' className="second-page-fish" size='small' />

                   <Header as='h1' className='white-text first-page-text' textAlign='center' >
                        <i className="fas fa-chevron-circle-down"></i>
                    </Header>
                 </div>

                <Divider hidden className='fft-perc-divider'/>
                <FormDechet/>
            </div>
            )
        }
    }
