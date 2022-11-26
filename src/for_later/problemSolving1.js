import React from 'react';
import '../common.css';
import MainLayout from "../mainLayout";

class ProblemSolving1 extends React.Component {
    render() {
        return (
            <MainLayout content={
                <div>
                    <h1>Let's explore</h1>
                    <p style={{width: 600}}>
                        In this activity, you are going to send a secret message to your friend!
                        Try finding a way to transmitting your message using only colored boxes.
                    </p>
                </div>
            } next="/problem-solving-2"/>
        );
    }

}

export default ProblemSolving1;