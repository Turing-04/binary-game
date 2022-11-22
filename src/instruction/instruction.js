import React from "react";
import {
    Instruction0, Instruction1, Instruction2, Instruction3, Instruction4
} from "./instructionContent";


class Instruction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1,
        };
    }

    nextIndex() {
        this.setState({index: this.state.index + 1}, () => {
            console.log(this.state.index);
        });

    }

    previousIndex() {
        this.setState({index: this.state.index - 1}, () => {
            console.log(this.state.index);
        });
    }

    getContent() {
        switch (this.state.index) {
            case 0:
                return Instruction0();
            case 1:
                return Instruction1();
            case 2:
                return Instruction2();
            case 3:
                return Instruction3();
            default:
                return Instruction4();
        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>{this.getContent()}</div>
                <button className="floating-button-previous" onClick={() => this.previousIndex()}>Previous</button>
                <button className="floating-button-next" onClick={() => this.nextIndex()}>Next</button>
            </div>
        );
    }
}


export default Instruction;