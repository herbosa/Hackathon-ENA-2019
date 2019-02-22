import React, { Component } from 'react'


export default class formulaire extends Component {
    render() {
        return (
            <div>
                <Helmet bodyAttributes={{ style: 'background-color : #EA904F' }}>
        <title>formulaire</title>
        <meta name="description" content="formulaire" />
        <meta name="googlebot" content="noindex"/>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			<link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon"/>
			<link rel="icon" href="../static/logo.png" type="image/png"/>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
    </Helmet>
                <NavBar color='#EA904F' />
                <Divider hidden className='center-divider'/>
                <div>
                <Header as='h1' className='white-text first-page-text' textAlign='center'>
                    <Header.Content>J'ai du matériel de compostages <br/> et je suis prêt à composter davantage de biodéchet. <br/> Je cherche de nouveaux débouchés pour mon compost</Header.Content>
                </Header>

                <Divider hidden className='fft-perc-divider'/>

                   <Header as='h1' className='white-text first-page-text' textAlign='center' >
                        <i className="fas fa-chevron-circle-down"></i>
                    </Header>
                </div>
                <Divider hidden className='fft-perc-divider'/>
                <div>
                <Header as='h1' className='white-text second-page-text' textAlign='center'>
                    <Header.Content>Ça tombe bien! Nous pouvons vous aider.<br/>Quels sont vos besoins exactement ?</Header.Content>
                </Header>
                <Divider hidden className='fft-perc-divider'/>
                   <Header as='h1' className='white-text first-page-text' textAlign='center' >
                        <i className="fas fa-chevron-circle-down"></i>
                    </Header>
                 </div>
                <Divider hidden className='fft-perc-divider'/>
                <FormCompost/>
            </div>
            )
        }
    }