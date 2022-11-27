import React, {useCallback} from 'react';
import {logScreenChange} from "../utils/firebase"
import constants from "../constants";
import {useNavigate} from "react-router-dom";
import * as Assessments from "./assessmentContent_de";

class AssessmentDe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            time_started: new Date().getTime()
        };
    }


    nextIndex() {
        if (this.state.index === 45) {
            if (constants.group === "ips") {
                this.props.navigation("/problem-solving");
            }
            else {
                this.props.navigation("/assessment");
            }
        }
        logScreenChange(constants.uuid, 'Assessment', + new Date(),(new Date().getTime() - this.state.time_started) / 1000, this.state.index+1)
        this.setState({index: this.state.index + 1, time_started: new Date().getTime()}, () => {
            console.log(this.state.index);
        });

    }

    previousIndex() {
        if (this.state.index === 0) {
            return;
        }
        logScreenChange(constants.uuid, 'Assessment', + new Date(),(new Date().getTime() - this.state.time_started) / 1000, this.state.index-1)
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
            // Need to take care of the puzzle implementation ?
        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>{this.getContent()}</div>
                {0 < this.state.index &&
                    <button className="floating-button-previous" onClick={() => this.previousIndex()}>Zurück</button>
                }
                {this.state.index < 8
                    ? <button className="floating-button-next" onClick={() => this.nextIndex()}>Weiter</button>
                    : null
                }
            </div>
        );
    }
}


export default AssessmentDe;