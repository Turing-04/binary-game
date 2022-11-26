import React from "react";
import Board from "../interactive/board";

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