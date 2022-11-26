import React from "react";
import {getResults, addResults} from "../utils/firebase";
import BubbleMessage from "../resources/message_bubble.png" 
import Fingers from "../resources/finger_count.png"
import Five from "../resources/five.png"
import FiveHandwritten from "../resources/five_handwritten.png"
import Smiley from "../resources/smiley_face.png"
import Board from "../interactive/board";
import Instruction40_ from "../resources/instruction_40.png"
import Instruction41_ from "../resources/instruction_41.png"
import Instruction44_ from "../resources/instruction_44.png"
import Instruction45_ from "../resources/instruction_45.png"


export function Instruction0(_index) {
    return (
        <div>
            <h1>Let's start with a question: <br/>
             How do we represent digits (the number 0 to 9) <br/>
             in day to day life?</h1>
        </div>
    );
}

export function Instruction1(_index) {
    return (
        <div>
            <h1>You can say the name of the number, <br/></h1>
            <h1 style={{textAlign:'left'}}>For instance for 5 : </h1>
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
            <h1>You can also hold up your fingers to show <br/>
            a number, like this:</h1>
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
            <h1>You can also write the symbol of the <br/>
            number, as you have learnt in school:</h1>
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
            <h1>You can even write down the name of the <br/>
            number like this:</h1>
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
            <h1>Can we represent the numbers differently? <br/><br/>
             What if we can't speak, hold up our fingers, or <br/>
             write something down?<br/><br/>
             How would we show somebody what number we are thinking of?</h1>
        </div>
    );
}

export function Instruction6(_index) {
    return (
        <div>
            <h1>Can I display a number with something like ...<br/><br/>
            ... a row of lightbulbs?!
            </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={6} labels={false}></Board>
        </div>
    );
}


export function Instruction7(_index) {
    return (
        <div>
            <h1>Yes we can! <br/><br/>
             This is what binary essentially is about. <br/><br/>
             But first, let's get back to our row of lightbulbs. <br/>
             </h1>
        </div>
    );
}

export function Instruction8(_index) {
    return(
        <div>
            <h1>Here, I have a row of 9 lightbulbs, how could I <br/>
             represent each digit with them? <br/><br/>
             </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}></Board>
        </div>  
    );
}

export function Instruction9(_index) {
    return(
        <div>
            <h1>Here, I have a row of 9 lightbulbs, how could I <br/>
             represent each digit with them? <br/><br/>
             </h1>
        </div>  
    );

}



export function Instruction10(_index) {
    return(
        <div>
            <h1>There are several ways to do so! </h1>
            <h1 style={{fontStyle:'italic'}}>One way would be to turn on the appropriate number of lightbulbs,<br/>
                For instance, you could turn on three lightbulbs to show the number 3: 
            </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}
                        initial={[false, false, true, false, true, true, false, false, false]}>
            </Board>
        </div>


    );


}
export function Instruction11(_index) {
return(
    <div>   
        <h1> You could do this in an unordered manner ...</h1>
        <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}
               initial={[false, false, true, false, true, true, false, false, false]}>
        </Board>
    </div>
)

}


export function Instruction12(_index) {
    return(
        <div>   
            <h1> Or in an ordered manner! <br/>
            It doesn't matter. </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={false}
                   initial={[false, false, false, false, false, false, true, true, true]}>
            </Board>
        </div>
    )
}

export function Instruction13(_index) {
    return(
        <div>   
            <h1> What if we wanted to save energy? <br/><br/>
            Can I represent each number by lightning up only <br/>
            one lightbulb at the time? 
            </h1>
            <Board binary={false} width={1} height={1} interactive={false} key={_index} labels={false}
                   initial={[true]}>
            </Board>
        </div>
    )

}

export function Instruction14(_index) {
    return(
        <div>   
            <h1> Yes! <br/><br/>
            Just light one lightbulb at a given position. <br/>
            We could add a label to each lightbulb. 
            </h1>
            <Board binary={false} width={9} height={1} interactive={false} key={_index} labels={true}>
            </Board>
        </div>
    )

}


export function Instruction15(_index) {
    return(
        <div>   
            <h1> And light the correct bulb! <br/>
            If we want to show five, all we need is  <br/>
            to light up the fifth lightbulb.
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, true, false, false, false, false]}>
            </Board>
        </div>
    )
}

export function Instruction16(_index) {
    return(
        <div>   
            <h1> What if we want to show 0? <br/>
            We can just leave all the lights off!
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}>
            </Board>
        </div>
    )
        /*TODO light bulbs off : 
        =>Could be very nice to make it interactive (that is display the row of lightbulbs turned off only after pressing next) */
}


export function Instruction17(_index) {
    return(
        <div>   
            <h1> This is called  <br/> </h1>
            <h1 style={{fontWeight: '900', fontSize:'3.8vw'}}> One-hot encoding <br/></h1> 
            <h2> Only one lightbulb is hot for a given number! </h2>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, true, false, false, false, false]}>
            </Board>
        </div>
         //Problème de gras ici ! Sois on change la police de charactère pour le one hot encoding sois moyen d'avoir du gras avec sans Cherif ? 
    )

}
export function Instruction18(_index) {
    return(
        <div>
            <h1>  With this new technique, we can now <br/> 
            represent a bunch of digits.</h1>
            <h1 style={{fontWeight: 'italic'}}> But can we do better?  <br/></h1>
        </div>
    )


}



export function Instruction19(_index) {
    return(
        <div>
            <h1 >  Introducing ...  </h1> 
            <h1 style={{margin:'0px', fontSize: '12vw', fontWeight:'800', fontFamily:'DejaVu', fontStyle:'Italic'}} > Binary
            </h1>
        </div>
    )

    //TODO: Make this a bit prettier?  :)
}


export function Instruction20(_index) {
    return(
        <div>   
            <h1> Remember what we did for one-hot encoding :  <br/><br/> 
            We labelled the lightbulbs according to their <br/>
            position. However, only one lightbulb is lit at a <br/>
            time, while the others do nothing.
            </h1>
            <Board binary={false} key={_index} width={9} height={1} interactive={false} labels={true}
                   initial={[false, false, false, false, true, false, false, false, false]}>
            </Board>
        </div>
        //TODO : arrow
    )
}


export function Instruction21(_index) {
    return(
        <div>   
            <h1> Can we light multiple bulbs at the same time?
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
            <h1> What if we were to label the lightbulbs <br/>
            differently?
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
            <h1>Let's see what we have here. <br/><br/>
            Only four lightbulbs. The lightbulbs are <br/>
            labelled with 1, 2, 4 and 8. <br/><br/>
            How can we represent the digits 0 to 9 now?
            </h1>
            <Board binary={true} key={_index} width={4} height={1} interactive={false} labels={true}>
            </Board>
        </div>
    )
}


export function Instruction24(_index) {
    return(
        <div>   
            <h1>let's try to turn on lightbulbs labelled with  <br/>
            1 and 4.
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
            <h1>What do we get if we add those up together?
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
            <h1>What do we get if we add those up together?
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
            <h1>What if we wanted to represent
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
            <h1>Light up lightbulbs '8' and '1'!
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 8 + 1 = 9 
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
            <h1>What if we wanted to represent
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
            <h1>Turn on lightbulb '4' only!
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
            <h1>What if we wanted to represent
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
            <h1>Just as for the one-hot encoding representation : <br/>
            We don't light any bulb!
            </h1>
            <Board key={_index} width={4} height={1} interactive={false} labels={true} binary={true}>
            </Board>
        </div>
    )
}

export function Instruction33(_index) {
    return(
        <div>   
        <h1>See, now we can represent all the digits from 0 <br/>
        to 9 using only four lightbulbs!
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
            <h1>And we can even go higher! <br/>
            What if we light up all the lightbulbs at once ... <br/>
            What do we get?
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
            <h1>With only four lightbulbs, we can encode numbers up to 15!
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
            <h1>With one-hot encoding, <br/>
            We would have needed 15 lightbulbs to achieve the same!
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
            <h1>But why do we even care about this?</h1>
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
            <h1>Isn't it simpler to just write down 5 after all? <br/>
            It's what we all learnt in school after all...
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
            <h1>But imagine you're trying to send your friend a <br/>
            message without drawing, speaking, writing, <br/>
            or seeing them!
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
            <h1>You could send your friends an entire <br/>
            message using only lightbulbs!</h1>
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
            <h1>And what if you wanted to send letters instead <br/>
            of numbers?</h1>
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
            <h1>Easy! Just number the letters ... <br/>
            A can be 1, B can be 2, c can be 3 ...
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
    //FIXME: trop grand pour mon écran - ok now ?
}
export function Instruction44(_index) {
    return (
        <div>
            <h1>With enough lightbulbs, you can send  <br/>
            entire messages!
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
            <h1>You don't even need lightbulbs, you can use other  <br/>
            things like boxes which are black and white! <br/>
            You could also use zeros and ones, this is actually  <br/>
            how computers interact together!
            </h1>
            <img 
            class= "image-layout"
            src={Instruction45_}
            alt="instruction_45"
            />
        </div>
    );

    // TODO : put image from Figma or HTML properly

}
