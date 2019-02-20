import React from 'react'
import Link from 'next/link'
import NavBar from '../components/nav-bar'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import {Helmet} from "react-helmet";
import { HeaderContent, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { Button, Dropdown, Menu, Image, Divider, Header } from 'semantic-ui-react'
import '../static/css/index.css'
import '../static/css/form.css'


const Home = () => (
  <div className='main-page'>
    <Helmet>
        <title>Accueil</title>
        <meta name="description" content="Accueil" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
    <NavBar/>
    <Fullpage>
        <FullPageSections>
            <FullpageSection style = {{
                backgroundColor: '#000',
                padding: '1em'
            }}>
            <div>
                <Divider hidden className='fft-perc-divider' />
                <Grid columns={3} relaxed='very'>
                    <GridColumn style={{ backgroundColor: '#22CADE' }}>
                        <GridRow>
                        <Header as='h1' className='white-text second-page-text' textAlign='center'>
                            <HeaderContent>J'ai des biodéchets</HeaderContent>
                        </Header>
                        </GridRow>
                        <GridRow>
                            <Image src='static/icons/noun_Apple_Core_white.png' size='small' />
                        </GridRow>
                    </GridColumn>
                    <GridColumn style={{ backgroundColor: '#EA904F' }}>
                    <GridRow>
                        <Header as='h1' className='white-text second-page-text' textAlign='center'>
                            <HeaderContent>Je fais du compost ou <br />je méthanise<br /></HeaderContent>
                        </Header>
                    </GridRow>
                    <GridRow>
                        
                    </GridRow>
                    </GridColumn>
                    <GridColumn style={{ backgroundColor: '#B5D43C' }}>
                        <GridRow>
                        <Header as='h1' className='white-text second-page-text' textAlign='center'>
                            <HeaderContent>J'utilise du compost</HeaderContent>
                        </Header>
                        </GridRow>
                        <GridRow>
                            <Image src='static/icons/noun_plants_white.png' size='small' />
                        </GridRow>
                    </GridColumn>
                </Grid>
                <Divider hidden className='fft-perc-divider' />
                <Header as = 'h1' className='white-text first-page-text' textAlign='center'>
                    <i className="fas fa-chevron-circle-down"></i>
                </Header>
            </div>
            </FullpageSection>
            <FullpageSection style={{
                backgroundColor: '#000',
                padding: '1em'
            }}>
                <div>
                    <Divider hidden className='fft-perc-divider' />
                    <Header as='h1' className='white-text second-page-text' textAlign='center'>
                        <HeaderContent>Biodéchets: C'est quoi?</HeaderContent>
                    </Header>
                    <Header as='h1' className='form-font quarter-margin' textAlign='center'>
                            <HeaderContent>A la maison, au jardin ou à la cantine, nous produisons des déchets organiques (épluchures de légumes, restes de repas, tonte de gazon, feuilles mortes ...) Ils composent 40 à 60 % de nos poubelles.</HeaderContent>
                    </Header>
                    <Grid columns={3} relaxed='very'>
                    <GridColumn>
                        <Image src='static/icons/noun_Bread_white.png' size='tiny' />
                        <Image src='static/icons/noun_Apple_Core_white.png' size='tiny' />
                    </GridColumn>
                    <GridColumn>
                        <Image src='static/icons/noun_Cheese_white.png' size='tiny' />
                        <Image src='static/icons/noun_Cigarette_white.png' size='tiny' />
                    </GridColumn>
                    <GridColumn>
                        <Image src='static/icons/noun_can_white.png' size='tiny' />
                        <Image src='static/icons/noun_Meat_white.png' size='tiny' />
                        <Image src='static/icons/noun_Peeled Potato_white.png' size='tiny' />
                    </GridColumn>
                    </Grid>
                    <Divider hidden className='ten-perc-divider' />
                    <Header as='h1' className='white-text first-page-text' textAlign='center'>
                        <i className="fas fa-chevron-circle-down"></i>
                    </Header>
                </div>
            </FullpageSection>
            <FullpageSection style={{
                backgroundColor: '#000',
                padding: '1em'
            }}>
            <div>
                <Divider hidden className='fft-perc-divider' />
                <Header as='h1' className='white-text second-page-text' textAlign='center'>
                    <HeaderContent>Biodéchets: C'est quoi?</HeaderContent>
                </Header>
                <Header as='h1' className='form-font quarter-margin' textAlign='center'>
                    <HeaderContent>Les biodéchets peuvent avoir une seconde vie avec le compostage ou la méthanisation. Avec ces deux procédés, on obtient de l'engrais ou de l'énergie que d'autres peuvent réutiliser. </HeaderContent>
                </Header>
                <Header as='h1' className='white-text first-page-text' textAlign='center'>
                    <i className="fas fa-chevron-circle-down"></i>
                </Header>
            </div>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  </div>
)

export default Home
