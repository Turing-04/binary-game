import React from "react";
import * as Instructions from "./instructionContent";


class Instruction extends React.Component {

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
            case 0:return Instructions.Instruction0();
            case 1:return Instructions.Instruction1();
            case 2:return Instructions.Instruction2();
            case 3:return Instructions.Instruction3();
            case 4:return Instructions.Instruction4();
            case 5:return Instructions.Instruction5();
            case 6:return Instructions.Instruction6();
            case 7:return Instructions.Instruction7();
            case 8:return Instructions.Instruction8();
            case 9:return Instructions.Instruction9();
            case 10:return Instructions.Instruction10();
            case 11:return Instructions.Instruction11();
            case 12:return Instructions.Instruction12();
            case 13:return Instructions.Instruction13();
            case 14:return Instructions.Instruction14();
            case 15:return Instructions.Instruction15();
            case 16:return Instructions.Instruction16();
            case 17:return Instructions.Instruction17();
            case 18:return Instructions.Instruction18();
            case 19:return Instructions.Instruction19();
            case 20:return Instructions.Instruction20();
            case 21:return Instructions.Instruction21();
            case 22:return Instructions.Instruction22();
            case 23:return Instructions.Instruction23();
            case 24:return Instructions.Instruction24();
            case 25:return Instructions.Instruction25();
            case 26:return Instructions.Instruction26();
            case 27:return Instructions.Instruction27();
            case 28:return Instructions.Instruction28();
            case 29:return Instructions.Instruction29();
            case 30:return Instructions.Instruction30();
            case 31:return Instructions.Instruction31();
            case 32:return Instructions.Instruction32();
            case 33:return Instructions.Instruction33();
            case 34:return Instructions.Instruction34();
            case 35:return Instructions.Instruction35();
            case 36:return Instructions.Instruction36();
            case 37:return Instructions.Instruction37();
            case 38:return Instructions.Instruction38();
            case 39:return Instructions.Instruction39();
            case 40:return Instructions.Instruction40();
            case 41:return Instructions.Instruction41();
            case 42:return Instructions.Instruction42();
            case 43:return Instructions.Instruction43();
            case 44:return Instructions.Instruction44();
            case 45:return Instructions.Instruction45();
            default: return null;
                // Need to handle IPS or PSI to redirect correctly !
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