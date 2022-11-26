import React from "react";
import * as Instructions from "./instructionContent";
import {logScreenChange} from "../utils/firebase"

class Instruction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            time_started: new Date().getTime()
        };
    }

    nextIndex() {
        logScreenChange('wengle','instruction', + new Date(),(new Date().getTime() - this.state.time_started) / 1000, this.state.index+1)
        this.setState({index: this.state.index + 1, time_started: new Date().getTime()}, () => {
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
            case 0: return Instructions.Instruction0(0);
            case 1: return Instructions.Instruction1(1);
            case 2: return Instructions.Instruction2(2);
            case 3: return Instructions.Instruction3(3);
            case 4: return Instructions.Instruction4(4);
            case 5: return Instructions.Instruction5(5);
            case 6: return Instructions.Instruction6(6);
            case 7: return Instructions.Instruction7(7);
            case 8: return Instructions.Instruction8(8);
            case 9: return Instructions.Instruction9(9);
            case 10: return Instructions.Instruction10(10);
            case 11: return Instructions.Instruction11(11);
            case 12: return Instructions.Instruction12(12);
            case 13: return Instructions.Instruction13(13);
            case 14: return Instructions.Instruction14(14);
            case 15: return Instructions.Instruction15(15);
            case 16: return Instructions.Instruction16(16);
            case 17: return Instructions.Instruction17(17);
            case 18: return Instructions.Instruction18(18);
            case 19: return Instructions.Instruction19(19);
            case 20: return Instructions.Instruction20(20);
            case 21: return Instructions.Instruction21(21);
            case 22: return Instructions.Instruction22(22);
            case 23: return Instructions.Instruction23(23);
            case 24: return Instructions.Instruction24(24);
            case 25: return Instructions.Instruction25(25);
            case 26: return Instructions.Instruction26(26);
            case 27: return Instructions.Instruction27(27);
            case 28: return Instructions.Instruction28(28);
            case 29: return Instructions.Instruction29(29);
            case 30: return Instructions.Instruction30(30);
            case 31: return Instructions.Instruction31(31);
            case 32: return Instructions.Instruction32(32);
            case 33: return Instructions.Instruction33(33);
            case 34: return Instructions.Instruction34(34);
            case 35: return Instructions.Instruction35(35);
            case 36: return Instructions.Instruction36(36);
            case 37: return Instructions.Instruction37(37);
            case 38: return Instructions.Instruction38(38);
            case 39: return Instructions.Instruction39(39);
            case 40: return Instructions.Instruction40(40);
            case 41: return Instructions.Instruction41(41);
            case 42: return Instructions.Instruction42(42);
            case 43: return Instructions.Instruction43(43);
            case 44: return Instructions.Instruction44(44);
            case 45: return Instructions.Instruction45(45);
            default: return null;
                // Need to handle IPS or PSI to redirect correctly !
        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>{this.getContent()}</div>
                {0 < this.state.index &&
                    <button className="floating-button-previous" onClick={() => this.previousIndex()}>Previous</button>
                }
                
                {this.state.index < 45 &&
                    <button className="floating-button-next" onClick={() => this.nextIndex()}>Next</button>
                }
            </div>
        );
    }
}


export default Instruction;