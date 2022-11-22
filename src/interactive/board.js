import React from "react";
import PropTypes from 'prop-types';
import LightOff from '../resources/light_off.png';
import LightOn from '../resources/light_on.png';

class Square extends React.Component {
    render() {
        return (
            <img src={this.props.on ? LightOn : LightOff}
                 alt={this.props.on ? "LightOn" : "LightOff"}
                 className={"images"}
                 onClick={(event) => {
                        let color = this.props.colored ? "white" : "#FFC430";
                        this.props.onClick(); // update color state directly in Board
                        //event.target.style.backgroundColor = color;
                        //event.target.style.background = LightOn;

                 }}></img>
        );
    }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        let size = this.props.height * this.props.width;
        this.state = {
            grid: Array(size).fill(false), //keep track of which square is colored or not
        };
    }

    handleClick(i) {
        const grid = this.state.grid.slice();
        grid[i] = !this.state.grid[i];
        this.setState({grid: grid});
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
        console.log(height);
        console.log(width);
        let squares = [];
        for (let i = 0; i < width * height; i++) {
            squares.push(this.renderSquare(i));
        }
        let rows = [];
        for (let i = 0; i < height; i++) {
            rows.push(
                <div className="board-row">
                    {squares.slice(i * width, (i + 1) * width)}
                </div>
            );
        }

        return (
            <div>{rows}</div>
        );
    }
}
Board.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default Board;