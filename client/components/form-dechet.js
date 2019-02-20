import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import NavBar from '../components/nav-bar'
import {Helmet} from "react-helmet";
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import '../static/css/form.css'
import '../static/css/index.css'


class FormDechet extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Field>
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
        <Form.Field>
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
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default FormDechet
