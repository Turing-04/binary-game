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
            <Board width={8} height={4} interactive={false} key={5}
                   initial={[
                       true, false, false, false, false, false, false, false,
                       false, true, false, false, false, false, false, false,
                       false, false, true, false, false, false, false, false,
                       false, false, false, true, false, false, false, false,
                       ]}></Board>

        </div>
    );
}

export function ProblemSolving6() {
    return (
        <div>
            <h1>6</h1>
            <Board key={6} width={4} height={8} interactive={true}></Board>
        </div>
    );
}

export function ProblemSolving7() {
    return (
        <div>
            <h1>7</h1>
            <Board key={7} width={8} height={8} interactive={true}
                answer={[
                    true, false, false, false, false, false, false, false,
                    false, true, false, false, false, false, false, false,
                    false, false, true, false, false, false, false, false,
                    false, false, false, true, false, false, false, false,
                    false, false, false, false, true, false, false, false,
                    false, false, false, false, false, true, false, false,
                    false, false, false, false, false, false, true, false,
                    false, false, false, false, false, false, false, true,
                ]}></Board>
        </div>
    );
}