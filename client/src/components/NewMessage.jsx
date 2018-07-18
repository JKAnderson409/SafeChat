import React from 'react'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

export default (props) => {
  return (
    <FormGroup>
      <InputGroup >
        <InputGroup.Button>
          <Button onClick={props.postMessage} >Post!</Button>
        </InputGroup.Button>
        <FormControl onChange={props.handleChange} type='test' value={props.text}/>
      </InputGroup>
    </FormGroup>
  )
}
