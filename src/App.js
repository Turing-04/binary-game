import React from 'react';
import Game from './game';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ActivitySelection from "./activitySelection";
import Instruction from "./instruction/instruction";
import ProblemSolving from "./problemSolving/problemSolving";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<ActivitySelection/>} />
                    <Route path="/game" element={<Game/>} />
                    <Route path="/problem-solving" element={<ProblemSolving/>} />
                    <Route path="/instruction" element={<Instruction/>} />
                </Routes>
            </Router>
        );
    }

}

export default App;