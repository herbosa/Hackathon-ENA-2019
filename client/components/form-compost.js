import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Icon, Header, Segment, Grid, Transition, Divider } from 'semantic-ui-react'
import '../static/css/form.css'
import '../static/css/index.css'


class FormCompost extends Component {
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
          <label>J'ai à disposition' :</label>
          <br/>
          <Checkbox label='un lombricomposteur'/>
          <br/>
          <Checkbox label='un bac à compostage' onClick={this.toggleVisibility}/>
          <br/>
          <Checkbox label='un pavillon de compostage'/>
          <br/>
          <Checkbox label='un compostage électromécanique'/>
          <br/>
          <Checkbox label='un andain de compostage'/>
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
        <Form.Field width={6}>
          <label>Je peux transformer :</label>
          <br/>
          <Checkbox label='des déchets alimentaires organiques non triés'/>
          <br/>
          <Checkbox label='des déchets alimentaires organiques triés'/>
          <br/>
          <Checkbox label='des biodéchets'/>
        </Form.Field>
        </Form.Group>
        <Form.Group>
        <Form.Field width={3}/>
        <Form.Field width={6}>
          <label>Je propose un service de compost :</label>
          <br/>
            <Checkbox label='gratuit'/>
          &emsp;&emsp;&emsp;
            <Checkbox label='payant'/>
        </Form.Field>
        <Form.Field width={6}>
          <label>Je cherche de nouveaux débouchés pour mon compost :</label>
          <br/>
            <Checkbox label='oui'/>
          &emsp;&emsp;&emsp;
            <Checkbox label='non'/>
        </Form.Field>
        </Form.Group>
        <Form.Group>
        <Form.Field width={3}/>
        <Form.Field width={4}>
            <label>J'habite :</label>
            <input placeholder='Mon adresse Postale' />
            <input placeholder='Mon adresse E-mail' />

        </Form.Field>
        <Form.Field width={3}/>
        <Form.Field color='brown' width={6} center href="/carte" control={Button}>Valider</Form.Field>
        </Form.Group>
      </Form>
    )
  }
}

export default FormCompost
