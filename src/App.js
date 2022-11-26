import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LanguageSelection from "./languageSelection";
import LoginForm from "./login";
import LoginFormDe from "./login_de";
import ActivitySelection from "./activitySelection";
import ActivitySelectionDe from "./activitySelection_de";
import Instruction from "./instruction/instruction";
import InstructionDe from "./instruction/instruction_de";
import ProblemSolving from "./problemSolving/problemSolving";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<LanguageSelection/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/login_de" element={<LoginFormDe/>} />
                    <Route path="/problem-solving" element={<ProblemSolving/>} />
                    <Route path="/instruction" element={<Instruction/>} />
                    <Route path="/instruction_de" element={<InstructionDe/>} />
                    <Route path="/activityselection" element={<ActivitySelection/>} />
                    <Route path="/activityselection_de" element={<ActivitySelectionDe/>} />x
                </Routes>
            </Router>
        );
    }

}

export default App;