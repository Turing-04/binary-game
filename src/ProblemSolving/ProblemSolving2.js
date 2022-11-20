import React from 'react';
import './../Common.css';
import MainLayout from "../MainLayout";

class ProblemSolving2 extends React.Component {
    render() {
        return (
            <MainLayout content={
                <div>
                    <h1>Let's explore</h1>
                    <p style={{width: 600}}>
                        Problem Solving 2
                    </p>
                </div>
            } next="/game"/>
        );
    }

}

export default ProblemSolving2;