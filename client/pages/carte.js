import React, { Component } from 'react'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import {Map, Marker} from 'rect-leaflet';

export default class carte extends Component {
    render() {
    return (
      <div>
    <Helmet>
        <title>Accueil</title>
        <meta name="description" content="Accueil" />
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
            <NavBar/>
      </div>
    )
  }
}
