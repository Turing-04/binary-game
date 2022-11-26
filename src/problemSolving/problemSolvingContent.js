import React from "react";
import Board from "../interactive/board";
import FeedbackForm from "./feedbackForm";
import Row from "react-bootstrap/Row";

export function ProblemSolving0(_index) {
    return (
        <div>
            <h1>Let's explore !</h1>
            <p> In this Activity, you are going to send a <br/>
            secret message to your friend ! Try <br/>
            finding a way to transmit your message <br/>
            using only black and white boxes. 
            </p>
        </div>
    );
}

export function ProblemSolving1(_index) {
    return (
        <div>
            <h1>
                Alice wants to send a message to Bob! <br/>
                But all she has are a few colored boxes. <br/>
                Can you help her?
            </h1>
        </div>
    );
}

export function ProblemSolving2(_index) {
    return (
        <div>
            <h1>
                She can turn any of the boxes on or off. <br/>
                How does this help her?
            </h1>
        </div>
    );
}

export function ProblemSolving3(_index) {
    return (
        <div>
            <h1>Can YOU figure out <br/>
                how to send her messages?</h1>
            <p>
                There is no wrong solution! <br/>
                Try to come up with your own way,
                and try to reason about it!
            </p>

        </div>
    );
}

export function ProblemSolving4(_index) {
    return (
        <div>
            <h1>
                Alice wants to send the number 6 using this grid. <br/>
                Can you help her?
            </h1>
            <Board binary={false} width={6} height={5} interactive={true} key={_index} labels={false}>
            </Board>
            <h1>6</h1>
        </div>
    );
}

export function ProblemSolving5(_index) {
    return (
        <div>
            <h1>
                How did you send the message? <br/> <br/>
                What were the challenges you faced? <br/> <br/>
                Do you think you could send longer messages with this grid?
            </h1>
            <FeedbackForm slide={5}></FeedbackForm>
        </div>
    );
}

export function ProblemSolving6(_index) {
    return (
        <div>
            <h1>
                Now Alice wants to send the number 2022. <br/> <br/>
                How would you do this?
            </h1>
            <Board binary={false} width={6} height={5} interactive={true} key={_index} labels={false}>
            </Board>
            <h1>2022</h1>
        </div>
    );
}

export function ProblemSolving7(_index) {
    return (
        <div>
            <h1>
                Was it more difficult than just sending the number 6? <br/> <br/>
                What was the main challenge?
            </h1>
        </div>
    );
}

export function ProblemSolving8(_index) {
    return (
        <div>
            <h1>
                Now Alice wants to send the word BOB. <br/> <br/>
                How would you do this?
            </h1>
            <Board binary={false} width={6} height={5} interactive={true} key={_index} labels={false}>
            </Board>
            <h1>BOB</h1>
        </div>
    );
}

export function ProblemSolving9(_index) {
    return (
        <div>
            <h1>
                Is the Grid too small for your messages? <br/>
                What if you tried to enter one character per row? <br/>
                Try using one row per letter now!
            </h1>
        </div>
    );
}

export function ProblemSolving10(_index) {
    return (
        <div>
            <h1>
                Try representing each number using only one row of boxes!
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Row> <h1>4 =></h1> </Row>
                    <Row> <Board binary={false} width={9} height={1} interactive={true} key={100} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>1 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={101} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>8 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={102} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>0 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={103} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>3 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={104} labels={false}></Board> </Row>
            </div>
        </div>
    );
}

export function ProblemSolving11(_index) {
    return (
        <div>
            <h1>
                Try representing each letter using only one row of boxes!
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>A =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={200} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>L =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={201} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>I =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={202} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>C =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={203} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>E =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={204} labels={false}></Board> </Row>
            </div>
        </div>
    );
}

export function ProblemSolving12(_index) {
    return (
        <div>
            <h1>
                Did you come up with a way? <br/> <br/>
                Do you think Bob will be able to understand your encodings? <br/> <br/>
                Why? Or why not?
            </h1>
        </div>
    );
}

export function ProblemSolving13(_index) {
    return (
        <div>
            <h1>
                Now, do you think you could still <br/>
                send your messages with even less boxes per row?
            </h1>
        </div>
    );
}

export function ProblemSolving14(_index) {
    return (
        <div>
            <h1>
                Let’s play the ultimate version, we now have only very few <br/>
                boxes per line and we have to find a way to represent the same data
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>9 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={300} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>1 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={301} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>7 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={302} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>5 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={303} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>13 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={304} labels={false}></Board> </Row>
            </div>
        </div>
    );
}

export function ProblemSolving15(_index) {
    return (
        <div>
            <h1>
                Ultimate version: letters edition!
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>A =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={400} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>L =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={401} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>I =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={402} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>C =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={403} labels={false}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>E =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={404} labels={false}></Board> </Row>
            </div>
        </div>
    );
}

export function ProblemSolving16(_index) {
    return (
        <div>
            <h1>
                Did you manage to make it work? <br/>
                What do you think is the least amount of boxes <br/>
                to properly represent your numbers?
            </h1>
        </div>
    );
}

export function ProblemSolving17(_index) {
    return (
        <div>
            <h1>
                Great job! <br/>
                You don’t know what this was about? <br/>
                No worries, we are going to explain it now!
            </h1>
        </div>
    );
}