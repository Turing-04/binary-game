import React from "react";
import { Row } from "react-bootstrap";
import {logFeedback} from "../utils/firebase"
import constants from "../constants";



class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'Write down your thoughts here!',
          slide: props.slide
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
      }

      doSubmit(message){
        console.log(constants.uuid)
        logFeedback(constants.uuid, this.state.slide, message)
      }

    // FIXME: submit buttons renders next to it instead of just below
    render(){
        return (
        <div    style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Row>
            <textarea cols="40" rows="10" value={this.state.value} onChange={this.handleChange} />
            </Row>
            <Row>
            
            <div style={{ height: "3vw", alignItems: 'center'}}></div>

            </Row>
            <Row>
            {this.state.value != '' && this.state.value != 'Write down your thoughts here!' && <button className='button' onClick={() => this.doSubmit(this.state.value)}> Submit </button>}

            </Row>

        </div>
        )
    }
}

export default FeedbackForm