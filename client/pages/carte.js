import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import { Button, Dropdown, Menu, Image, Divider, Header, Grid, GridColumn, GridRow, HeaderContent } from 'semantic-ui-react'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'
import '../static/css/index.css'


/*load without ssr
import dynamic from 'next/dynamic'
const Component = dynamic(() => import(''), {
  ssr: false
})
*/


export default class carte extends Component {
  render() {

    return (
      <div className='main-page-color'>
    <Helmet>
        <title>Carte</title>
        <meta name="description" content="Accueil" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
      <NavBar color='#ab9275' />
      <Fullpage className='main-page-color'>
      <FullPageSections>
        <FullpageSection className='main-page-color'>
          <Divider hidden className='ten-perc-divider'/>
          <Grid columns={2}>
          <GridColumn>
                  <Map className='twt-perc-divider' center={[48.5734053, 7.7521113]} zoom={15} width={1200} height={700}>
                    <Overlay anchor={[48.5734053, 7.7521113]} offset={[120, 79]}>
            </Overlay>
          </Map>
          </GridColumn>
          <GridColumn>
            <Header as='h1' className='white_text first-page-text' textAlign='right'>
              <HeaderContent>Carte des environs</HeaderContent>
            </Header>
          </GridColumn>
          </Grid>
        </FullpageSection>
      </FullPageSections>
      </Fullpage>
      </div>
    )
  }
}
