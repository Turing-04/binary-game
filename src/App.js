import React from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import LanguageSelection from "./languageSelection";
import LoginForm from "./login";
import LoginFormDe from "./login_de";
import ActivitySelection from "./activitySelection";
import ActivitySelectionDe from "./activitySelection_de";
import Instruction from "./instruction/instruction";
import InstructionDe from "./instruction/instruction_de";
import ProblemSolving from "./problemSolving/problemSolving";
import Assessment from "./assessment/assessment";
import AssessmentDe from "./assessment/assessment_de";
import ProblemSolvingDe from "./problemSolving/problemSolving_de";

export function App() {

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<LanguageSelection/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/login-de" element={<LoginFormDe/>} />
                    <Route path="/problem-solving" element={<ProblemSolvingFn/>} />
                    <Route path="/problem-solving-de" element={<ProblemSolvingDeFn/>} />
                    <Route path="/instruction" element={<InstructionFn/>} />
                    <Route path="/instruction-de" element={<InstructionDeFn/>} />
                    <Route path="/assessment" element={<Assessment/>} />
                    <Route path="/assessment-de" element={<AssessmentDe/>} />
                    <Route path="/activityselection" element={<ActivitySelection/>} />
                    <Route path="/activityselection-de" element={<ActivitySelectionDe/>} />
                </Routes>
            </Router>
        );
}

export function InstructionFn() {
    return <Instruction navigation={useNavigate()}/>;
}

export function InstructionDeFn() {
    return <InstructionDe navigation={useNavigate()}/>;
}

export function ProblemSolvingFn() {
    return <ProblemSolving navigation={useNavigate()}/>;
}

export function ProblemSolvingDeFn() {
    return <ProblemSolvingDe navigation={useNavigate()}/>;
}

export default App;