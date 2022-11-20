import React from 'react';
import Game from './game';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ActivitySelection from "./activitySelection";
import ProblemSolving1 from "./problemSolving/problemSolving1";
import ProblemSolving2 from "./problemSolving/problemSolving2";
import Instruction1 from "./instruction/instruction1";
import Instruction2 from "./instruction/instruction2";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<ActivitySelection/>} />
                    <Route path="/game" element={<Game/>} />
                    <Route path="/problem-solving-1" element={<ProblemSolving1/>} />
                    <Route path="/problem-solving-2" element={<ProblemSolving2/>} />
                    <Route path="/instruction-1" element={<Instruction1/>} />
                    <Route path="/instruction-2" element={<Instruction2/>} />
                </Routes>
            </Router>
        );
    }

}

export default App;