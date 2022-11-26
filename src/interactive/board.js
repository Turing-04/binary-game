import React from "react";
import LightOff from '../resources/light_off.png';
import LightOn from '../resources/light_on.png';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

class Square extends React.Component {
    render() {
        return (
            <img src={this.props.on ? LightOn : LightOff}
                 alt={this.props.on ? "LightOn" : "LightOff"}
                 className={"bulbs"}
                 onClick={this.props.onClick}></img>
        );
    }
}

class Board extends React.Component {

    /*
    * Props:
    *  height: number of rows
    *  width: number of columns
    *  initial: initial state of the board
    *  answer: answer to the puzzle
    *  interactive: whether the board is interactive or not
    *  labels: whether to show labels or not
    *  binary: whether to show labels in binary or not
     */
    constructor(props) {
        super(props);
        let size = this.props.height * this.props.width;
        this.state = {
            grid: this.props.initial
                ? this.props.initial
                : Array(size).fill(false)
        }
    }

    handleClick(i) {
        if (this.props.interactive) {
            const grid = this.state.grid.slice();
            grid[i] = !this.state.grid[i];
            this.setState({grid: grid});
            let answerString = this.props.answer.map((x) => x ? "1" : "0").join("");
            let gridString = grid.map((x) => x ? "1" : "0").join("");
            if (answerString === gridString) {
                alert("You win!");
            }
        }
    }

    renderSquare(i) {
        return <Square
            key={i}
            on={this.state.grid[i]}
            colored={this.state.grid[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        let height = this.props.height;
        let width = this.props.width;
        let squares = [];
        for (let i = 0; i < width * height; i++) {
            squares.push(this.renderSquare(i));
        }
        let rows = [];
        for (let i = 0; i < height; i++) {
            rows.push(
                <div>
                    {squares.slice(i * width, (i + 1) * width)}
                </div>
            );
        }

        let labels = [];
        for (let i = 0; i < width; i++) {
            let j = width - i;
            let k = this.props.binary ? 2 ** (j - 1) : j;
            labels.push(<Row className="labels">{k}</Row>);
        }


        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    {rows}
                    <div style={{display: 'flex'}}>
                    {this.props.labels ? labels : null}
                    </div>
                </div>
            </div>
        );
    }
}
Board.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    interactive: PropTypes.bool.isRequired,
    initial: PropTypes.array,
    answer: PropTypes.array,
    labels: PropTypes.bool.isRequired,
    binary: PropTypes.bool.isRequired,
}

export default Board;