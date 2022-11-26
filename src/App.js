import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LanguageSelection from "./languageSelection";
import ActivitySelection from "./activitySelection";
import ActivitySelectionDe from "./activitySelection_de";
import Instruction from "./instruction/instruction";
import ProblemSolving from "./problemSolving/problemSolving";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<LanguageSelection/>} />
                    <Route path="/problem-solving" element={<ProblemSolving/>} />
                    <Route path="/instruction" element={<Instruction/>} />
                    <Route path="/activityselection" element={<ActivitySelection/>} />
                    <Route path="/activityselection_de" element={<ActivitySelectionDe/>} />
                </Routes>
            </Router>
        );
    }

}

export default App;