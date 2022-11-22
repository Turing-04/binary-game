import React from "react";
import Board from "../interactive/board";

export function ProblemSolving0() {
    return (
        <div>
            <h1>Let's explore !</h1>
            <h2 > In this Activity, you are going to send a <br/>
            secret message to your friend ! Try <br/>
            finding a way to transmit your message <br/>
            using only black and white boxes. 
            </h2>
        </div>
    );
}

export function ProblemSolving1() {
    return (
        <div>
            <h1>1</h1>
            <p style={{width: 600}}>
                ProblemSolving 1
            </p>
        </div>
    );
}

export function ProblemSolving2() {
    return (
        <div>
            <h1>2</h1>
            <p style={{width: 600}}>
                ProblemSolving 1
            </p>
        </div>
    );
}

export function ProblemSolving3() {
    return (
        <div>
            <h1>3</h1>
            <p style={{width: 600}}>
                ProblemSolving 1
            </p>
        </div>
    );
}

export function ProblemSolving4() {
    return (
        <div>
            <h1>4</h1>
            <p style={{width: 600}}>
                ProblemSolving 1
            </p>
        </div>
    );
}

export function ProblemSolving5() {
    return (
        <div>
            <h1>5</h1>
            <Board width={8} height={8}/>
        </div>
    );
}