import React from "react";
import * as Problems from "./problemSolvingContent";
import constants from "../constants";


class ProblemSolving extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    nextIndex() {
        if (this.state.index === 17) {
            if (constants.group === "psi") {
                this.props.navigation("/instruction");
            }
            else {
                this.props.navigation("/assessment");
            }
        }
        this.setState({index: this.state.index + 1}, () => {
            console.log(this.state.index);
        });

    }

    previousIndex() {
        if (this.state.index === 0) {
            return;
        }
        this.setState({index: this.state.index - 1}, () => {
            console.log(this.state.index);
        });
    }

    getContent() {
        switch (this.state.index) {
            case 0: return Problems.ProblemSolving0(0);
            case 1: return Problems.ProblemSolving1(1);
            case 2: return Problems.ProblemSolving2(2);
            case 3: return Problems.ProblemSolving3(3);
            case 4: return Problems.ProblemSolving4(4);
            case 5: return Problems.ProblemSolving5(5);
            case 6: return Problems.ProblemSolving6(6);
            case 7: return Problems.ProblemSolving7(7);
            case 8: return Problems.ProblemSolving8(8);
            case 9: return Problems.ProblemSolving9(9);
            case 10: return Problems.ProblemSolving10(10);
            case 11: return Problems.ProblemSolving11(11);
            case 12: return Problems.ProblemSolving12(12);
            case 13: return Problems.ProblemSolving13(13);
            case 14: return Problems.ProblemSolving14(14);
            case 15: return Problems.ProblemSolving15(15);
            case 16: return Problems.ProblemSolving16(16);
            case 17: return Problems.ProblemSolving17(17);


            default:
                return Problems.ProblemSolving5();
        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>{this.getContent()}</div>
                {0 < this.state.index &&
                    <button className="floating-button-previous" onClick={() => this.previousIndex()}>Previous</button>
                }
                <button className="floating-button-next" onClick={() => this.nextIndex()}>Next</button>
            </div>
        );
    }
}


export default ProblemSolving;