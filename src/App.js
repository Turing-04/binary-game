import React from 'react';
import Game from './Game';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ActivitySelection from "./ActivitySelection";
import ProblemSolving1 from "./ProblemSolving/ProblemSolving1";
import ProblemSolving2 from "./ProblemSolving/ProblemSolving2";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<ActivitySelection/>} />
                    <Route path="/game" element={<Game/>} />
                    <Route path="/problem-solving-1" element={<ProblemSolving1/>} />
                    <Route path="/problem-solving-2" element={<ProblemSolving2/>} />
                </Routes>
            </Router>
        );
    }

}

export default App;