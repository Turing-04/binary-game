import React, {useCallback} from 'react';
import {logScreenChange, logBoard} from "../utils/firebase"
import constants from "../constants";
import {useNavigate} from "react-router-dom";
import * as Assessments from "./assessmentContent";

class Assessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            time_started: new Date().getTime()
        };
    }


    nextIndex() {
        //logScreenChange(constants.uuid, 'Instruction', + new Date(),(new Date().getTime() - this.state.time_started) / 1000, this.state.index+1)
        this.setState({index: this.state.index + 1, time_started: new Date().getTime()}, () => {
            console.log(this.state.index);
        });

    }

    previousIndex() {
        if (this.state.index === 0) {
            return;
        }
        //logScreenChange(constants.uuid, 'Instruction', + new Date(),(new Date().getTime() - this.state.time_started) / 1000, this.state.index-1)
        this.setState({index:Math.max(this.state.index - 1,0)}, () => {
            console.log(this.state.index)
        });
    }

    getContent() {
        switch (this.state.index) {
            case 0: return Assessments.Assessment0(0);
            case 1: return Assessments.Assessment1(1);
            case 2: return Assessments.Assessment2(2);
            case 3: return Assessments.Assessment3(3);
            case 4: return Assessments.Assessment4(4);
            case 5: return Assessments.Assessment5(5);
            case 6: return Assessments.Assessment6(6);
            case 7: return Assessments.Assessment7(7);
            case 8: return Assessments.Assessment8(8);
            default: return null;
            // Need to handle IPS or PSI to redirect correctly !
        }
    }

    serializeBoard = (boardString) =>{
        let components = boardString.split('|');
        logBoard(constants.uuid, 'assessment', this.state.index , components[0], components[1], components[2], components[3]);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>{this.getContent()}</div>
                {0 < this.state.index && this.state.index < 8 
                ? <button className="floating-button-previous" onClick={() => this.previousIndex()}>Previous</button>
                :  null
                }
                {this.state.index < 7 &&
                     <button className="floating-button-next" onClick={() => {                        
                        var boardStrings = this.getContent()[1]
                        boardStrings.forEach(this.serializeBoard)
                        this.nextIndex()
                    }}>Next</button>
                   }
                   {this.state.index == 7 &&
                   <button className="floating-button-next" onClick={() => {
                    let done = window.confirm(" Are you sure you're done with the assessment? \n There is no going back!");
                    if(done) this.nextIndex();
                   }}>Done</button>
                }
            </div>
        );
    }
}


export default Assessment;