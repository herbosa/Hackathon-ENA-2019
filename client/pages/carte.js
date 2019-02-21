import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import { Button, Dropdown, Menu, Image, Divider, Header } from 'semantic-ui-react'
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
      <div>
    <Helmet>
        <title>Carte</title>
        <meta name="description" content="Accueil" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
    <NavBar></NavBar>
      <Divider hidden className='twt-perc-divider'/>

  <Map className='twt-perc-divider' center={[50.879, 4.6997]} zoom={12} width={600} height={400}>
    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
    </Overlay>
  </Map>
      </div>
    )
  }
}
