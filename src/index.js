import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colored: false,
      value: null,
    };
  }


  render() {
    return (
      <button className="square" 
      onClick={(event) => {
          let col = this.state.colored ? "white" : "darkblue";
          this.setState({colored: !this.state.colored});
          event.target.style.backgroundColor = col
         }}>

      {/* {this.props.value} */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Let\'s have some fun !';


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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

