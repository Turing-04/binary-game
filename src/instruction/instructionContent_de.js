import React from "react";
import {getResults, addResults} from "../utils/firebase";
import BubbleMessage from "../resources/message_bubble_de.png" 
import Fingers from "../resources/finger_count.png"
import Five from "../resources/five.png"
import FiveHandwritten from "../resources/five_handwritten_de.png"
import Smiley from "../resources/smiley_face.png"
import Board from "../interactive/board";
import Instruction40_ from "../resources/instruction_40.png"
import Instruction41_ from "../resources/instruction_41.png"
import Instruction44_ from "../resources/instruction_44.png"
import Instruction45_ from "../resources/instruction_45.png"


export function Instruction0(_index) {
    return (
        <div>
            <h1>Lass uns mit einer Frage beginnen: <br/>
            Wie stellen wir Ziffern (die Zahlen 0 <br/>
            bis 9) im täglichen Leben dar?</h1>
        </div>
    );
}

export function Instruction1(_index) {
    return (
        <div>
            <h1> Du kannst den Namen der Zahl ausprechen, zum <br/></h1>
            <h1> Beispiel fünf: </h1>
            <img
            width={"65%"}
            src={BubbleMessage}
            alt="message_bubble"
            />
        </div>
    );
}

export function Instruction2(_index) {
    return (
        <div>
            <h1>Du kannst auch deine Finger hochhalten, um  <br/>
            eine Zahl anzuzeigen, etwa so:</h1>
            <img
            style={{alignSelf: 'center'}}
            src={Fingers}
            alt="fingers_count"
            />
        </div>
    );
}

export function Instruction3(_index) {
    return (
        <div>
            <h1>Du kannst auch das Symbol der Zahl <br/>
            schreiben, so wie du es in der Schule <br/>
            gelernt hast:</h1>
            <img 
            class= "square-image-layout"
            src={Five}
            alt="five_digit"
            />
        </div>
    );
}

export function Instruction4(_index) {
    return (
        <div>
            <h1>Du kannst sogar den Namen der Nummer  <br/>
            aufschreiben, etwa so:</h1>
            <img 
            class = "image-layout"
            src={FiveHandwritten}
            alt="handwritten_five"
            />
        </div>
    );
}


export function Instruction5(_index) {
    return (
        <div>
            <h1>Können wir Zahlen anders darstellen? <br/><br/>
            Was ist, wenn wir nicht sprechen, unsere Finger  <br/>
            nicht hochhalten oder etwas aufschreiben <br/>
            können? <br/><br/>
            Wie würden wir jemandem zeigen, an welche Zahl <br/>
            wir gerade denken?</h1>
        </div>
    );
}

export function Instruction6(_index) {
    return (
        <div>
            <h1>Kann ich eine Zahl mit etwas wie einer Reihe <br/><br/>
            von Glühbirnen anzeigen?!
            </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={6} labels={false}></Board>
        </div>
    );
}


export function Instruction7(_index) {
    return (
        <div>
            <h1>Ja, das können wir!  <br/><br/>
            Das ist es, was Binärsprache im Wesentlichen ist.  <br/><br/>
            Aber kommen wir zunächst zu der Reihe von  <br/>
            Glühbirnen zurück. </h1>
        </div>
    );
}


export function Instruction8(_index) {
    return(
        <div>
            <h1>Hier habe ich eine Reihe von 9 Glühbirnen,<br/>
            wie könnte ich jede Ziffer mit ihnen darstellen? <br/>
             </h1>
             <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}></Board>
        </div>  
    );

}



export function Instruction9(_index) {
    return(
        <div>
            <h1>Es gibt mehrere Möglichkeiten, dies zu tun! </h1>
            <h1 style={{fontStyle:'italic'}}>
            Eine Möglichkeit wäre, die entsprechende <br/>
            Anzahl von Glühbirnen einzuschalten, um die <br/>
            Zahl 3 anzuzeigen. 
            </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}
                        initial={[false, false, true, false, true, true, false, false, false]}>
            </Board>
        </div>


    );


}
export function Instruction10(_index) {
return(
    <div>   
        <h1> Du kannst das auf ungeordnete Weise tun...</h1>
        <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}
               initial={[false, false, true, false, true, true, false, false, false]}>
        </Board>
    </div>
)

}


export function Instruction11(_index) {
    return(
        <div>   
            <h1> Oder in geordneter Weise! <br/>
            Es spielt keine Rolle. </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}
                   initial={[false, false, false, false, false, false, true, true, true]}>
            </Board>
        </div>
    )
}

export function Instruction12(_index) {
    return(
        <div>   
            <h1> Was wäre, wenn wir Energie sparen wollten?  <br/><br/>
            Kann ich jede Zahl darstellen, indem ich  <br/>
            jeweils nur eine Glühbirne zum Leuchten <br/>
            bringe ?
            </h1>
            <Board binary={false} width={1} height={1} interactive={false} key={_index} labels={false}
                   initial={[true]}>
            </Board>
        </div>
    )

}

export function Instruction13(_index) {
    return(
        <div>   
            <h1> Ja! <br/><br/>
            Zünde einfach die Glühbirne an der  <br/>
            entsprechenden Stelle an. <br/>
            Wir nummerieren jede Glühbirne...
            </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={true}>
            </Board>
        </div>
    )

}


export function Instruction14(_index) {
    return(
        <div>   
            <h1> Und zünden dann die entsprechende  <br/>
            Glühbirne an! <br/> <br/>
            Wenn wir fünf zeigen wollen, zünden wir die   <br/>
            fünfte Glühbirne an.
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, true, false, false, false, false]}>
            </Board>
        </div>
    )
}

export function Instruction15(_index) {
    return(
        <div>   
            <h1> Und wenn wir 0 zeigen wollen, zünden wir gar  <br/>
            keine Glühbirne an!
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}>
            </Board>
        </div>
    )
}


export function Instruction16(_index) {
    return(
        <div>   
            <h1> Das nennt sich  <br/> </h1>
            <h1 style={{fontWeight: '900', fontSize:'3.8vw'}}> one-hot Kodierung <br/></h1> 
            <h2> Es ist immer nur eine Glühbirne heiss! </h2>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, true, false, false, false, false]}>
            </Board>
        </div>
    )

}
export function Instruction17(_index) {
    return(
        <div>
            <h1> Okay, so weit, so gut, mit nur neun Glühbirnen <br/> 
            können wir bereits sämtliche Ziffern <br/>
            darstellen.<br/></h1>
            <h1 style={{fontWeight: 'italic'}}> Aber können wir das besser?   <br/></h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, false, false, false, false, false]}>
            </Board>
        </div>
    )

}

export function Instruction18(_index) {
    return(
        <div>
            <h1>  Wie könnten wir weniger Glühbirnen verwenden ? <br/><br/>
            Was wäre die kompakteste Art, jede Ziffer nur <br/>
            mit Glühbirnen darzustellen?</h1>
            <Board binary={false} key={_index} width={4} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false]}>
            </Board>
        </div>
    )

}


export function Instruction19(_index) {
    return(
        <div>
            <h1 >  Die Antwort auf diese Frage lautet:  </h1> 
            <h1 style={{margin:'0px', fontSize: '10vw', fontWeight:'800', fontFamily:'DejaVu', fontStyle:'Italic'}} > Das Binärsystem
            </h1>
        </div>
    )
}


export function Instruction20(_index) {
    return(
        <div>   
            <h1> Erinner dich daran, was wir bei der one-hot   <br/>
            Kodierung gemacht haben: <br/><br/>
            Wir haben die Glühbirnen entsprechend ihrer  <br/>
            Position beschriftet. Allerdings leuchtet jeweils <br/>
            nur eine Glühbirne, während die anderen nichts tun.
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, true, false, false, false, false]}>
            </Board>
        </div>
        //TODO : arrow @Antoine je te la laisse cella la ;)
    )
}


export function Instruction21(_index) {
    return(
        <div>   
            <h1> Können wir mehrere Glühbirnen gleichzeitig <br/>
            einschalten ?
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, true, false, false, true, false, true, false, false]}>
            </Board>
        </div>
    )
}


export function Instruction22(_index) {
    return(
        <div>   
            <h1> Was wäre, wenn wir die Glühbirnen anders  <br/>
            beschriften würden?
            </h1>
            <Board key={_index} width={9} height={1} interactive={false} labels={true} binary={true}
                   initial={[false, true, false, false, true, false, true, false, false]}>
            </Board>
        </div>
    )

}



export function Instruction23(_index) {
    return(
        <div>   
            <h1>Schauen wir mal, was wir hier haben.  <br/><br/>
            Nur vier Glühbirnen. Die Glühbirnen sind mit  <br/>
            1, 2, 4 und 8 beschriftet. <br/><br/>
            Wie können wir nun die Ziffern 0 bis 9 darstellen? 
            </h1>
            <Board binary={true} key={_index} width={4} height={1} interactive={false} labels={true}>
            </Board>
        </div>
    )
}


export function Instruction24(_index) {
    return(
        <div>   
            <h1>Versuchen wir, die Glühbirnen mit den Ziffern <br/>
            1 und 4 zum Leuchten zu bringen.
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[false, true, false, true]}>
            </Board>
        </div>
    )
}


export function Instruction25(_index) {
    return(
        <div>   
            <h1>Was erhalten wir, wenn wir diese <br/>
            zusammenzählen ?
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 + 1 ...
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[false, true, false, true]}>
            </Board>
        </div>
    )

}


export function Instruction26(_index) {
    return(
        <div>   
            <h1>Was erhalten wir, wenn wir diese <br/>
            zusammenzählen ?
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 + 1 = 5 
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[false, true, false, true]}>
            </Board>
        </div>
    )
}



export function Instruction27(_index) {
    return(
        <div>   
            <h1>Was wäre, wenn wir Folgendes darstellen <br/>
            wollten:
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 9? 
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}>
            </Board>
        </div>
    )
}
export function Instruction28(_index) {
    return(
        <div>   
            <h1> Wir zünden die Glühbirnen '8' und '1' an!
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 9 = 8 + 1
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[true, false, false, true]}>
            </Board>
        </div>
    )
}


export function Instruction29(_index) {
    return(
        <div>   
            <h1>Was wäre, wenn wir Folgendes darstellen <br/>
            wollten:
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4?
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}>
            </Board>
        </div>
    )

}


export function Instruction30(_index) {
    return(
        <div>   
            <h1> Wir schalten nur Glühbirne 4 ein!
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 = 4 
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[false, true, false, false]}>
            </Board>
        </div>
    )

}


export function Instruction31(_index) {
    return(
        <div>   
            <h1>Was wäre, wenn wir Folgendes darstellen <br/>
            wollten:
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 0?
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}>
            </Board>
        </div>
    )
}

export function Instruction32(_index) {
    return(
        <div>   
            <h1> Keine Glühbirne leuchten lassen!
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}>
            </Board>
        </div>
    )
}

export function Instruction33(_index) {
    return(
        <div>   
        <h1> Schau, jetzt können wir alle Ziffern von 0 bis 9  <br/>
        mit nur vier Glühbirnen darstellen!
        </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}>
            </Board>
    </div>
        );

        //TODO: lightbulbs
}


export function Instruction34(_index) {
    return (
        <div>   
            <h1> Wir können sogar noch höher gehen: Wenn ich  <br/>
            alle Glühbirnen auf einmal zum Leuchten <br/>
            bringe, was erhalte ich dann?
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[true, true, true, true]}>
            </Board>
    
        </div>  
        );
        //TODO:lightbulbs
}


export function Instruction35(_index) {
    return (
        <div>   
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 8 + 4 + 2 + 1 = ...
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[true, true, true, true]}>
            </Board>
        </div>
    )
}


export function Instruction36(_index) {
    return(
        <div>   
            <h1> Mit 4 Glühbirnen können wir bis zu 15 zählen!
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 8 + 4 + 2 + 1 = 15
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}
                   initial={[true, true, true, true]}>
            </Board>
        </div>
    )
}


export function Instruction37(_index) {
    return(
        <div>   
            <h1> Mit "one-hot" von vorher hätten wir 15  <br/>
            Glühbirnen gebraucht!
            </h1>
            <Board key={_index} width={15} height={1} interactive={false} labels={true} binary={false}
                   initial={[true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}>
            </Board>
        </div>
    )
}


export function Instruction38(_index) {
    return (
        <div>
            <h1>Aber warum interessiert uns das?</h1>
            <img 
            class= "square-image-layout"
            src={Smiley}
            alt="confused_smiley"
            />
        </div>
    );
}


export function Instruction39(_index) {
    return (
        <div>
            <h1>Es ist viel simpler, einfach 5 aufzuschreiben.  <br/>
            Das haben wir alle in der Schule gelernt.
            </h1>
            <img 
            class= "square-image-layout"
            src={Five}
            alt="handwritten_five"
            />
        </div>
    );
}


export function Instruction40(_index) {
    return (
        <div>
            <h1>Aber stell dir vor, du versuchst, deinem Freund <br/>
            eine Nachricht zu schicken, ohne zu zeichnen,  <br/>
            zu sprechen, zu schreiben oder ihn zu sehen!
            </h1>
            <img 
            class= "image-layout"
            src={Instruction40_}
            alt="instruction_40"
            />
        </div>
    );


}


export function Instruction41(_index) {
    return (
        <div>
            <h1>Du könntest deinen Freunden eine ganze <br/>
            Nachricht nur mit Glühbirnen schicken !</h1>
            <img 
            class= "image-layout"
            src={Instruction41_}
            alt="instruction_41"
            />
        </div>
    );

}


export function Instruction42(_index) {
    return (
        <div>
            <h1>Und was wäre, wenn du Buchstaben statt <br/>
            Zahlen senden wolltest?</h1>
            <img 
            class="square-image-layout"           
            src={Smiley}
            alt="confused_smiley"
            />
        </div>
    );

}
export function Instruction43(_index) {
    return(
        <div>   
            <h1>Ganz einfach! Nummeriere einfach die Buchstaben ... <br/>
            A kann 1 sein, C kann 2 sein, D kann 3 sein ...
            </h1>
            <h1 style={{fontSize: '4vw', fontWeight:'500', fontFamily:'DejaVu', fontStyle:'italic', lineHeight:'0.8'}} >
            A = 1 <br/>
            B = 2 <br/>
            C = 3 <br/>
            D = 4 <br/>
            E = 5 <br/>
            F = 6 <br/>
             ...
            </h1>
        </div>
        
        )
}


export function Instruction44(_index) {
    return (
        <div>
            <h1>Mit genügend Glühbirnen können wir ganze <br/>
            Nachrichten versenden!
            </h1>
            <img 
            class= "image-layout"
            src={Instruction44_}
            alt="instruction_44"
            />
        </div>
    );


}
export function Instruction45(_index) {
    return (
        <div>
            <h1>Man braucht nicht einmal Glühbirnen, man   <br/>
            kann auch andere Dinge verwenden, wie z.B.  <br/>
            Kästchen, die schwarz oder weiss angemalt sind ! <br/>
            Das ist im Wesentlichen die Art und Weise, wie <br/>
            Maschinen funktionieren und miteinander kommunizieren !
            </h1>
            <img 
            class= "image-layout"
            src={Instruction45_}
            alt="instruction_45"
            />
        </div>
    );


}
