import React from "react";
import * as Problems from "./problemSolvingContent";


class ProblemSolving extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
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
                return Problems.ProblemSolving0();
            case 1:
                return Problems.ProblemSolving1();
            case 2:
                return Problems.ProblemSolving2();
            case 3:
                return Problems.ProblemSolving3();
            case 4:
                return Problems.ProblemSolving4();
            default:
                return Problems.ProblemSolving5();
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


export default ProblemSolving;