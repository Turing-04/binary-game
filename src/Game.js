import React from 'react';
import './Game.css';
import {Link} from "react-router-dom";

class Square extends React.Component {
    render() {
        return (
            <button className="square"
                    onClick={(event) => {
                        let col = this.props.colored ? "white" : "darkblue";
                        this.props.onClick(); // update color state directly in Board
                        event.target.style.backgroundColor = col
                    }}>
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(64).fill(false), //keep track of which square is colored or not
        };
    }

    renderSquare(i) {
        return <Square
            colored={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    //update state of squares when one is clicked
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.squares[i] ? false : true;
        this.setState({squares: squares});
    }

    render() {
        const status = victory(this.state.squares) ? "Congrats, you did it !" : "Let\'s have some fun !";

        var columns = [];
        for (let i = 0; i < 8*8; i++) {
            columns.push(this.renderSquare(i));

        }
        var rows = [];
        for (let i = 0; i < 8; i++) {
            rows.push(<div className="board-row">{columns.slice(i*8, (i+1)*8)}</div>)
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="binary-values"> {"8 4 2 1 1 2 4 8"}</div>
                {rows}
                <div className="vert_line"></div>
            </div>
        );
    }
}

// TODO
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                </div>

                <Link to="/">Go back</Link>
            </div>

        );
    }
}

export default Game;


function victory(colors) {
    const vic = // smiley face combination
        [false, false, true, true, true, true, false, false,
            false, true, false, false, false, false, true, false,
            true, false, true, false, false, true, false, true,
            true, false, false, false, false, false, false, true,
            true, false, true, false, false, true, false, true,
            true, false, false, true, true, false, false, true,
            false, true, false, false, false, false, true, false,
            false, false, true, true, true, true, false, false,
        ]

    return JSON.stringify(colors) === JSON.stringify(vic);
}