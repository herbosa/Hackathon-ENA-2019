import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Icon, Header, Segment, Grid, Transition } from 'semantic-ui-react'
import '../static/css/form.css'
import '../static/css/index.css'


class FormDechet extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  toggleVisibility = () => this.setState({ visible_wastes: !this.state.visible_wastes})

  componentWillMount() {
    this.setState({ visible_wastes: false})
    }


  render() {
      const { visible_wastes } = this.state
    return (
      <Form textAlign='center' center className='form-font'>
          <Form.Group>
          <Form.Field width={3}/>
        <Form.Field width={6} >
          <label>Je suis :</label>
          <br/>
          <Checkbox label='un organisme de restauration collective'/>
          <br/>
          <Checkbox label='un commerce alimentaire'/>
          <br/>
          <Checkbox label='un particulier'/>
          <br/>
          <Checkbox label='autre'/>
        </Form.Field>
        <Form.Field width={6}>
          <label>Je produis :</label>
          <br/>
          <Checkbox label='des déchets alimentaires organiques non triés'/>
          <br/>
          <Checkbox label='des décehts alimentaires organiques triés' onClick={this.toggleVisibility}/>
          <br/>
          <Transition visible={visible_wastes} animation='scale' duration={500}>
                    <Form.Field width={6}>
            <br/>
              <Checkbox label='pain'/>
              <br/>
              <Checkbox label='fruits et légumes'/>
              <br/>
              <Checkbox label='autres'/>
              <input placeholder='' />
            </Form.Field>
            </Transition>
          <br/>
          <Checkbox label='des déchets verts'/>
        </Form.Field>
        </Form.Group>
        <Form.Group>
        <Form.Field width={3}/>

        <Form.Field width={6}>
          <label>Je produis par an :</label>
          <br/>
          <Checkbox label='0 - 500 kg de biodéchets'/>
          <br/>
          <Checkbox label='500 kg - 2 T de biodéchets'/>
          <br/>
          <Checkbox label='2 T - 5 T de biodéchets'/>
          <br/>
          <Checkbox label='5 T - 10 T de biodéchets'/>
        </Form.Field>
        </Form.Group>
        <Form.Group>
        <Form.Field width={3}/>
        <Form.Field width={6}>
          <label>J'ai un moyen de transport pour mes déchets :</label>
          <br/>
          <Checkbox>
            </Checkbox>&emsp;
          <Icon color="green" name='check' size='big' />
          &emsp;&emsp;&emsp;
          <Checkbox>
            </Checkbox>&emsp;
            <Icon color="red" name='times' size='big' />
        </Form.Field>
        </Form.Group>
        <Form.Group>
        <Form.Field width={3}/>
        <Form.Field width={6} width={4}>
            <label>J'habite :</label>
            <input placeholder='Mon adresse Postale' />
            <input placeholder='Mon adresse E-mail' />

        </Form.Field>
        <Form.Field width={4}/>
        <Form.Field color='blue' width={6} center href="/carte" control={Button}>Valider</Form.Field>
        </Form.Group>
      </Form>
    )
  }
}

export default FormDechet
