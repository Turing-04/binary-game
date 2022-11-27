import React from "react";
import Board from "../interactive/board";
import FeedbackForm from "./feedbackForm";
import Row from "react-bootstrap/Row";

export function ProblemSolving0(_index) {
    return ([
        <div>
            <h1>Lass uns forschen!</h1>
            <p> In dieser Aktivität wirst du eine geheime Nachricht <br/>
                an deinen Freund schicken! Versuche einen Weg zu finden, <br/>
                deine Nachricht nur mit Glühbirnen zu übermitteln.
            </p>
        </div>, true, '']
    );
}

export function ProblemSolving1(_index) {
    return ([
        <div>
            <h1>
                Alice will eine Nachricht an Bob schicken! <br/>
                Aber alles, was sie hat, sind ein paar Glühbirnen. <br/>
                Kannst du ihr helfen?
            </h1>
        </div>, true, '']
    );
}

export function ProblemSolving2(_index) {
    return ([
        <div>
            <h1>
                Sie kann jede der Glühbirnen ein- oder ausschalten. <br/>
                Wie kann ihr das helfen?
            </h1>
        </div>, true, '']
    );
}

export function ProblemSolving3(_index) {
    return ([
        <div>
            <h1>Kannst DU herausfinden, <br/>
                wie sie ihre Nachrichten schicken kann?
            </h1>
            <p>
                Es gibt keine falsche Lösung! Versuche, einen <br/>
                eigenen Weg zu finden, und erkläre deine Lösung!
            </p>
        </div>, true, '']
    );
}

var next4 = false;
var  boardString4 = "";

export function ProblemSolving4(_index) {
    return ([
        <div>
            <h1>
                Alice möchte mit Hilfe dieses Gitters die Zahl 6 senden. <br/>
                Kannst du ihr helfen?
            </h1>
            <Board binary={false} width={6} height={5} interactive={true} key={_index} labels={false} next={() => next4=true} log={(x) => boardString4 = x}>
            </Board>!
            <h1 style={{fontStyle:'italic', fontSize:'1.8vw'}}>Klicke auf die Glühbirnen um sie ein- und auszuschalten!</h1>
        </div>, next4, boardString4]
    );
}

var next5 = false;
export function ProblemSolving5(_index) {
    return ([
        <div>
            <h1>
                Wie hast du die Nachricht übermittelt? <br/> <br/>
                Welche Herausforderungen hattest du? <br/> <br/>
                Glaubst du, dass du mit diesem Raster längere Nachrichten versenden könntest?
            </h1>
            <FeedbackForm slide={5} part={"ps"} language={"DE"} next={() => next5=true}></FeedbackForm>
        </div>, next5, '']
    );
}

var next6 = false;
export function ProblemSolving6(_index) {
    return ([
        <div>
            <h1>
                Nun möchte Alice die Nummer 2022 senden. <br/> <br/>
                Wie würdest du das lösen?
            </h1>

            <Board binary={false} width={6} height={5} interactive={true} key={_index} labels={false} next={() => next6=true}>
            </Board>
            <h1 style={{fontStyle:'italic', fontSize:'1.8vw'}}>Spiel mit den Glühbirnen um<br/>
            Bob "2022" zu senden</h1>
        </div>, next6, '']
    );
}

var next7=false;
export function ProblemSolving7(_index) {
    return ([
        <div>
            <h1>
                War das schwieriger, als nur die Nummer 6 zu senden? <br/> <br/>
                Was war die grösste Herausforderung?
            </h1>
            <FeedbackForm slide={7} part={"ps"} language={"DE"} next={() => next7=true}></FeedbackForm>
        </div>, next7, '']
    );
}

var next8 = false;
export function ProblemSolving8(_index) {
    return ([
        <div>
            <h1>
                Jetzt möchte Alice das Wort BOB senden. <br/> <br/>
                Wie würdest du das machen?
            </h1>
            <Board binary={false} width={6} height={5} interactive={true} key={_index} labels={false} next={() => next8=true}>
            </Board>
            <h1 style={{fontStyle:'italic', fontSize:'1.8vw'}}>Finde einen Weg, das wort "BOB" an Alice zu senden</h1>        </div>, next8, '']
    );
}

export function ProblemSolving9(_index) {
    return ([
        <div>
            <h1>
                Ist das Raster zu klein für deine Nachrichten? <br/>
                Was wäre, wenn du versuchen würdest, <br/>
                einen Symbol pro Zeile darzustellen? <br/>
                Versuche es mit einer Zeile pro Buchstabe!
            </h1>
        </div>, true, '']
    );
}

var next10=false;
export function ProblemSolving10(_index) {
    return ([
        <div>
            <h1>
                Versuche, jede Zahl mit nur einer Reihe von Glühbirnen darzustellen!
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>4 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={100} labels={false} next={() => next10=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>1 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={101} labels={false} next={() => next10=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>8 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={102} labels={false} next={() => next10=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>0 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={103} labels={false} next={() => next10=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>3 =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={104} labels={false} next={() => next10=true}></Board> </Row>
            </div>
        </div>, next10, '']
    );
}

var next11 = false;
export function ProblemSolving11(_index) {
    return ([
        <div>
            <h1>
                Versuche, jeden Buchstaben mit nur einer Reihe von Glühbirnen darzustellen!
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>A =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={200} labels={false} next={() => next11=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>L =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={201} labels={false} next={() => next11=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>I =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={202} labels={false} next={() => next11=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>C =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={203} labels={false} next={() => next11=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>E =></h1> </Row>
                <Row> <Board binary={false} width={9} height={1} interactive={true} key={204} labels={false} next={() => next11=true}></Board> </Row>
            </div>
        </div>, next11, '']
    );
}

var next12 = false;
export function ProblemSolving12(_index) {
    return ([
        <div>
            <h1>
                Hast du einen Weg gefunden? <br/> <br/>
                Glaubst du, dass Bob deine Kodierungen verstehen wird? <br/> <br/>
                Warum? Oder warum nicht?
            </h1>
            <FeedbackForm key={_index}  slide={12} part={"ps"} language={"DE"} next={() => next12=true}></FeedbackForm>

        </div>, next12, '']
    );
}

var next13 = false;
export function ProblemSolving13(_index) {
    return ([
        <div>
            <h1>
                Glaubst du, dass du deine Nachrichten auch mit <br/>
                noch weniger Glühbirnen pro Zeile versenden könntest?
            </h1>
            <FeedbackForm key={_index}  slide={13} part={"ps"} language={"DE"} next={() => next13=true}></FeedbackForm>

        </div>, true, '']
    );
}

var next14 = false;
export function ProblemSolving14(_index) {
    return ([
        <div>
            <h1>
                Spielen wir die ultimative Herausforderung, wir haben nun sehr <br/>
                wenige Glühbirnen pro Zeile und müssen einen Weg finden, <br/>
                die gleichen Symbole darzustellen
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>9 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={300} labels={false} next={() => next14=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>1 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={301} labels={false} next={() => next14=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>7 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={302} labels={false} next={() => next14=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>5 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={303} labels={false} next={() => next14=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>13 =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={304} labels={false} next={() => next14=true}></Board> </Row>
            </div>
        </div>, next14, '']
    );
}

var next15 = false;
export function ProblemSolving15(_index) {
    return ([
        <div>
            <h1>
                Ultimative Herausforderung: Buchstaben!
            </h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>A =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={400} labels={false} next={() => next15=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>L =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={401} labels={false} next={() => next15=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>I =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={402} labels={false} next={() => next15=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>C =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={403} labels={false} next={() => next15=true}></Board> </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row> <h1>E =></h1> </Row>
                <Row> <Board binary={false} width={4} height={1} interactive={true} key={404} labels={false} next={() => next15=true}></Board> </Row>
            </div>
        </div>, next15, '']
    );
}

var next16 = false;
export function ProblemSolving16(_index) {
    return ([
        <div>
            <h1>
                Haben du eine Lösung gefunden? <br/>
                Was denkst du, wie viele Glühbirnen mindestens nötig <br/>
                sind, um deine Zahlen richtig darzustellen?
            </h1>
            <FeedbackForm key={_index}  slide={16} part={"ps"} language={"DE"} next={() => next16=true}></FeedbackForm>

        </div>, next16, '']
    );
}

export function ProblemSolving17(_index) {
    return ([
        <div>
            <h1>
                Gut gemacht! <br/>
                Du hast keine Ahnung, was diese Aufgabe sollte? <br/>
                Keine Sorge, wir werden es jetzt erklären!
            </h1>
        </div>, true, '']
    );
}