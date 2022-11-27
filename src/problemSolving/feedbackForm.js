import React from "react";
import { Row } from "react-bootstrap";
import {logFeedback} from "../utils/firebase"
import constants from "../constants";



class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: '',
          slide: props.slide,
          part: props.part,
          next: props.next,
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
        this.props.next();
        console.log(constants.uuid)
        logFeedback(constants.uuid, this.state.slide, message, this.state.part)
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
            <textarea style = {{resize:'none', fontSize:'1.4vw'}} cols="60" rows="4" placeholder={'Write down your thoughts here!'} onChange={this.handleChange} id="form"/>
            </Row>
            <Row>
            <div style={{ height: "3vw", alignItems: 'center'}}></div>

            </Row>
            <Row>
            {this.state.value != '' && <button className='button' 
                onClick={() => {
                  this.doSubmit(this.state.value);
                  document.getElementById("form").disabled="true";
                }}
                  > Submit </button>}

            </Row>

        </div>
        )
    }
}

export default FeedbackForm