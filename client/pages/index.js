import React from 'react'
import Link from 'next/link'
import NavBar from '../components/nav-bar'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import {Helmet} from "react-helmet";
import { HeaderContent, Grid, GridColumn, GridRow, SegmentGroup, RevealContent } from 'semantic-ui-react';
import { Embed, Image, Divider, Header, Segment, Reveal, Icon } from 'semantic-ui-react'
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
        <NavBar color='#ab9275'/>
    <Fullpage>
        <FullPageSections>
            <FullpageSection style = {{
                backgroundColor: '#ab9275',
                padding: '1em'
            }}>
            <div>
                <Divider hidden className='fft-perc-divider' />
                <Header as='h1' className='white-text first-page-text' textAlign='center'>
                    <HeaderContent>Bienvenue sur Compost'Eat!</HeaderContent>
                </Header>
                <Divider hidden className='five-perc-divider' />
                <Grid  columns={3}>
                <Grid.Column>
            <Link href="/formulaire-biodechet" className='pointer'>
            <div className='shadow-hover'>
                    <Segment  style={{ backgroundColor: '#22CADE' }}>
                        <GridRow>
                        <Header as='h1' className='white-text second-page-text' textAlign='center'>
                            <HeaderContent>J'ai des biodéchets</HeaderContent>
                        </Header>
                        </GridRow>
                        <GridRow>
                            <Image src='../static/icons/noun_Apple_Core_white.png' size='tiny ' centered />
                        </GridRow>
                    </Segment>
            </div>
            </Link>
                </Grid.Column>
                <Grid.Column>
            <Link href="/formulaire-compost" className='pointer'>
                    <div className='shadow-hover'>
                    <Segment style={{ backgroundColor: '#EA904F' }} >
                        <GridRow>
                            <Header as='h1' className='white-text second-page-text' textAlign='center'>
                                <HeaderContent>Je fais du compost ou <br />je méthanise<br /></HeaderContent>
                            </Header>
                        </GridRow>
                        <GridRow>
                            <Header as='h1' className='white-text second-page-text' textAlign='center'>
                                <i class="fas fa-recycle"></i>
                            </Header>
                        </GridRow>
                    </Segment>
                        </div>
            </Link>
            </Grid.Column>
            <Grid.Column>
            <Link href="/formulaire-utilisation" className='pointer'>
                    <div className='shadow-hover'>
                    <Segment style={{ backgroundColor: '#B5D43C' }}>
                        <GridRow>
                        <Header as='h1' className='white-text second-page-text' textAlign='center'>
                            <HeaderContent>J'utilise du compost</HeaderContent>
                        </Header>
                        </GridRow>
                        <GridRow>
                            <Image src='../static/icons/noun_plants_white.png' size='tiny ' centered />
                        </GridRow>
                    </Segment>
                        </div>
             </Link>
             </Grid.Column>
             </Grid>
                <Divider hidden className='ten-perc-divider' />
                <Header as = 'h1' className='white-text first-page-text' textAlign='center'>
                    <i className="fas fa-chevron-circle-down"></i>
                </Header>
            </div>
            </FullpageSection>
            <FullpageSection style={{
                backgroundColor: '#ab9275',
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
                    <Divider  hidden className=''/>
                    <Grid centered textAlign='center'>
                    <Grid.Column width={2}/>
                    <Grid.Column width={5}>
                    <Segment style={{ backgroundColor: '#B5D43C' }}>
                      <Grid centered textAlign='center'>
                      <Grid.Row columns={4}>
                        <Grid.Column width={3}>
                          <Image src='../static/icons/noun_Bread_white.png' size='medium ' centered />
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Image src='../static/icons/noun_Apple_Core_white.png' size='medium ' centered />
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Image src='../static/icons/noun_Cheese_white.png' size='medium ' centered />
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Image src='../static/icons/noun_Meat_white.png' size='medium ' centered />
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <Image src='../static/icons/noun_Peeled Potato_white.png' size='medium ' centered />
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <Icon color="green" name='check' size='huge' />
                        </Grid.Column>
                      </Grid.Row>
                      </Grid >
                      </Segment>
                      </Grid.Column>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column width={5}>
                    <Segment style={{ backgroundColor: '#EA904F' }} >
                    <Grid centered textAlign='center'>
                     <Grid.Row columns={4}>
                     <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Image src='../static/icons/noun_Cigarette_white.png' size='small ' centered />
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Image src='../static/icons/noun_can_white.png' size='small ' centered />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Icon color="red" name='times' size='huge' />
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Image src='../static/icons/noun_Yogurt_white.png' size='small ' centered />
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                      </Grid.Row>
                      </Grid>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column width={2}/>
                    </Grid>
                    <Divider hidden className='ten-perc-divider' />
                    <Header as='h1' className='white-text first-page-text' textAlign='center'>
                        <i className="fas fa-chevron-circle-down"></i>
                    </Header>
                </div>
            </FullpageSection>
            <FullpageSection style={{
                backgroundColor: '#ab9275',
                padding: '1em'
            }}>
            <div>
                <Divider hidden style={{ marginTop: '12%' }} />
                <Header as='h1' className='white-text second-page-text' textAlign='center'>
                    <HeaderContent>Biodéchets: Ca sert à quoi?</HeaderContent>
                </Header>
                <Header as='h1' className='form-font quarter-margin' textAlign='center'>
                    <HeaderContent>Les biodéchets peuvent avoir une seconde vie avec le compostage ou la méthanisation. Avec ces deux procédés, on obtient de l'engrais ou de l'énergie que d'autres peuvent réutiliser. </HeaderContent>
                </Header>
                <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Embed placeholder='../static/logo-couleur.png' source='youtube' id='lJ7kpuB0aNA'/>
                </div>
            </div>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  </div>
)

export default Home
