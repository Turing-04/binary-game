import React from "react";
import Board from "../interactive/board";
import FeedbackForm from "../problemSolving/feedbackForm";
import Row from "react-bootstrap/Row";


export function Assessment0(_index) {
    return ([
        <div>
            <h1>
                Herzlichen Glückwunsch, <br/> du hast es weit geschafft!
            </h1>
            <p>
                Nur noch ein paar Fragen, um dein Verständnis zu überprüfen, und ein lustiges kleines Rätsel zum Lösen! <br/>
                Auch hier gibt es keine falschen Antworten, versuche einfach dein Bestes!
            </p>
        </div>
 , []]
    );
}

export function Assessment1(_index) {
    return ([
        <div>
            <h1>
            Angenommen, du hast ein System zur Darstellung von <br/>
            Zahlen mithilfe von Glühbirnen gefunden <br/>
            und nun möchtest du Buchstaben darstellen. <br/>
            Wie kannst du das erreichen?
            </h1>
            <FeedbackForm key={_index} slide={_index} part={"assessment"} language={"DE"} next={() => console.log('')}></FeedbackForm>

        </div>
 , []]
    );
}

export function Assessment2(_index) {
    return ([
        <div>
            <h1>
                Was ist das Hauptproblem bei der Verwendung von gleich <br/>
                vielen Glühbirnen wie den Wert, <br/>
                den wir darstellen wollen?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"} language={"DE"} next={() => console.log('')}></FeedbackForm>
        </div>
 , []]
    );
}

export function Assessment3(_index) {
    return ([
        <div>
            <h1>
                Was ist die kleinste Anzahl von Glühbirnen zur Darstellung von <br/>
                Zahlen bis 7 im Binärformat darzustellen? Warum?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"} language={"DE"} next={() => console.log('')}></FeedbackForm>
        </div>
 , []]
    );
}

export function Assessment4(_index) {
    return ([
        <div>
            <h1>
            Eine Glühbirne kann nur an oder aus sein. <br/>
            Was würde sich ändern, wenn die Glühbirne an, aus oder halb an sein könnte? <br/>
            Würde dies etwas an deiner Codierung ändern? <br/>
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"} language={"DE"} next={() => console.log('')}></FeedbackForm>
        </div>
 , []]
    );
}

var boardString5 = '';
export function Assessment5(_index) {
    return ([
        <div>
            <h1>
                Stelle die Zahl 21 in binärer Form dar.
            </h1>
            <Board binary={true} width={5} height={1} interactive={true} key={_index} labels={true} log={(x) => boardString5 = x}>
            </Board>
        </div>
    , [boardString5]]);
}

export function Assessment6(_index) {
    return ([
        <div>
            <h1>
                Für welche Zahl steht die binäre Zeichenfolge "1011"?
            </h1>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"} language={"DE"} next={() => console.log('')}></FeedbackForm>
        </div>
 ,[]]
    );
}




//TODO : Add puzzle activity right here !
var boardString7 = '';
export function Assessment7(_index) {
    return ([
        <div>
            <h1>
                Zum Schluss noch ein kleines Spiel, bei dem du deine neuen Binärkenntnisse anwenden kannst! <br/>
                Versuche, die verschiedenen Werte auf dem Raster mit Binärzahlen darzustellen. <br/>
                Vielleicht bekommst du am Ende eine schöne kleine Zeichnung :) 
            </h1>
            <Board key={_index} width={8} height={8} interactive={true} labels={true} binary={true} puzzle={true} log={(x) => boardString7 = x}
                         answer={[
                             false, false, true, true, true, true, false, false,
                             false, true, false, false, false, false, true, false,
                             true, false, true, false, false, true, false, true,
                             true, false, false, false, false, false, false, true,
                             true, false, true, false, false, true, false, true,
                             true, false, false, true, true, false, false, true,
                             false, true, false, false, false, false, true, false,
                             false, false, true, true, true, true, false, false,
                         ]}>
            </Board>
        </div>
    , [boardString7]]);
}

export function Assessment8(_index) {
    return ([
        <div>
            <h1>
                Glückwunsch!
            </h1>
            <p>
                Du hast die Aktivität abgeschlossen! 
                Wir hoffen, es hat dir Spass gemacht und du hast etwas Neues gelernt! 
                Mach dir keine Sorgen, wenn du nicht alles verstanden hast.
                Du hast genug Zeit, um in Zukunft mehr darüber zu lernen! 
                Wenn du ein Feedback hast, lass es uns bitte wissen!
            </p>
            <FeedbackForm key={_index}  slide={_index} part={"assessment"} language={"DE"} next={() => console.log('')}></FeedbackForm>
        </div>
 , []]
    );
}




