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
          lng: props.language,
          sent: false
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
        this.setState({value: '', sent: true});
        logFeedback(constants.uuid, this.state.slide, message, this.state.part)
      }

  

    // FIXME: submit buttons renders next to it instead of just below
    render(){
    
        return (
        <div    style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
            {this.state.lng == 'EN' && <textarea style = {{resize:'none', fontSize:'1.4vw'}} cols="60" rows="4" placeholder={'Write down your thoughts here!'} onChange={this.handleChange} id="form"/>}
             {this.state.lng == 'DE' && <textarea style = {{resize:'none', fontSize:'1.4vw'}} cols="60" rows="4" placeholder={'Schreibe deine Gedanken hier auf!'} onChange={this.handleChange} id="form"/>}            
    
             {this.state.sent && this.state.lng == 'EN' && <p style = {{resize:'none', fontSize:'1.4vw'}}> Answer saved, you may continue ! </p>}
              {this.state.sent && this.state.lng == 'DE' && <p style = {{resize:'none', fontSize:'1.4vw'}}> Du kannst jetzt weitermachen! </p>}
    
            <div style={{ height: "3vw", alignItems: 'center'}}></div>

            {this.state.lng == 'EN' && this.state.value != '' && <button className='button' 
                onClick={() => {
                  this.doSubmit(this.state.value);
                  document.getElementById("form").disabled="true";
                }}
                  > Submit </button>}
           {this.state.lng == 'DE' && this.state.value != '' && <button className='button' 
                onClick={() => {
                  this.doSubmit(this.state.value);
                  document.getElementById("form").disabled="true";
                }}
                  > Senden </button>}
        </div>
        )
    }
}

export default FeedbackForm