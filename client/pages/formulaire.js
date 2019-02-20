import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'


export default class formulaire extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <Fullpage>
            <FullPageSections>
            <FullpageSection style={{
                backgroundColor: 'lime',
                padding: '1em',
            }}>
            1
            </FullpageSection>
            
            <FullpageSection style={{
                backgroundColor: 'coral',
                padding: '1em',
            }}>
            2
            </FullpageSection>
            
            <FullpageSection style={{
                backgroundColor: 'firebrick',
                padding: '1em',
            }}>
            3
            </FullpageSection>
            
            </FullPageSections>
            
            </Fullpage>
            </div>
            )
        }
    }
    