import React from "react";
import Board from "../interactive/board";
import FeedbackForm from "../problemSolving/feedbackForm";
import Row from "react-bootstrap/Row";


export function Assessment0(_index) {
    return (
        <div>
            <h1>
                Congratulations on making it this far!
            </h1>
            <p>
                Just a few more questions to check your understanding and a fun little puzzle to solve! <br/>
                Again, no wrong answers, just try your best!
            </p>
        </div>
    );
}

export function Assessment1(_index) {
    return (
        <div>
            <h1>
                Assume you found a system to represent numbers <br/>
                using only a row of lightbulbs, now you want <br/>
                to represent letters, how are you going to achieve this?
            </h1>
            <FeedbackForm key={_index} slide={_index} part={"assessment"}></FeedbackForm>
        </div>
    );
}

export function Assessment2(_index) {
    return (
        <div>
            <h1>
                What is the main deficit of using as many light bulbs <br/>
                as the value we want to represent?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"}></FeedbackForm>
        </div>
    );
}

export function Assessment3(_index) {
    return (
        <div>
            <h1>
                What is the smallest number of bits to represent <br/>
                numbers up to 7 in binary? Why?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"}></FeedbackForm>
        </div>
    );
}

export function Assessment4(_index) {
    return (
        <div>
            <h1>
                A lightbulb can only be on or off. <br/>
                What would change if it could be on, off, or half-lit? <br/>
                Would this change something about your coding?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"}></FeedbackForm>
        </div>
    );
}


export function Assessment5(_index) {
    return (
        <div>
            <h1>
                Represent the number 21 in binary.
            </h1>
            <Board binary={true} width={5} height={1} interactive={true} key={_index} labels={true}>
            </Board>
        </div>
    );
}

export function Assessment6(_index) {
    return (
        <div>
            <h1>
                Which number does the binary string “1011” represent?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"}></FeedbackForm>
        </div>
    );
}




//TODO : Add puzzle activity right here !
export function Assessment7(_index) {
    return (
        <div>
            <h1>
                Finally, let's play a quick game using your new binary skills ! <br/>
                Try to represent the different values on the grid using binary. <br/>
                You might end up with a nice little drawing :)
            </h1>
            <Board key={_index} width={8} height={8} interactive={true} labels={true} binary={true} puzzle={true}
                   answer={[
                       false, false, true, true, true, true, false, false,
                       false, true, false, false, false, false, true, false,
                       true, false, true, false, false, true, false, true,
                       true, false, false, false, false, false, false, true,
                       true, false, true, false, false, true, false, true,
                       true, false, false, true, true, false, false, true,
                       false, true, false, false, false, false, true, false,
                       false, false, true, true, true, true, false, false,
                   ]}>
            </Board>
        </div>
    );
}

export function Assessment8(_index) {
    return (
        <div>
            <h1>
                Congratulations!
            </h1>
            <p>
                You have completed the activity! <br/>
                We hope you enjoyed it and learned something new! <br/>
                If you did not understand everything, don't worry, <br/>
                you'll have plenty of time to learn more about it in the future! <br/>
                If you have any feedback, please let us know!
            </p>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"}></FeedbackForm>
        </div>
    );
}




