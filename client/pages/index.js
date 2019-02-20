import React from 'react'
import Link from 'next/link'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";

const Home = () => (
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
  </div>
)
 

export default Home
