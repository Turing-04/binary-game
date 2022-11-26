import React from 'react';
import '../common.css';
import MainLayout from "../mainLayout";

class Instruction2 extends React.Component {
    render() {
        return (
            <MainLayout content={
                <div>
                    <h1>Let's explore</h1>
                    <p style={{width: 600}}>
                        Instruction 2
                    </p>
                </div>
            } next="/game"/>
        );
    }

}

export default Instruction2;