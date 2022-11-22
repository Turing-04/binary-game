import React from "react";
import {getResults, addResults} from "../utils/firebase";
import BubbleMessage from "../resources/message_bubble.png" 
import Fingers from "../resources/finger_count.png"
import Five from "../resources/five.png"
import FiveHandwritten from "../resources/five_handwritten.png"
import Smiley from "../resources/smiley_face.png"

export function Instruction0() {
    return (
        <div>
            <h1>Let's start with a question: <br/>
             How do we represent digits (the number 0 to 9) <br/>
             in day to day life ?</h1>
        </div>
    );
}

export function Instruction1() {
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

export function Instruction2() {
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

export function Instruction3() {
    return (
        <div>
            <h1>You can also write the symbol of the <br/>
            number, as you have learnt in school:</h1>
            <img 
            class= "image-layout"
            src={Five}
            alt="five_digit"
            />
        </div>
    );
}

export function Instruction4() {
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


export function Instruction5() {
    return (
        <div>
            <h1>Can we represent the numbers differently ? <br/><br/>
             What if we can't speak, hold up our fingers, or <br/>
             write something down ?<br/><br/>
             How would we show somebody what number we are thinking of ?</h1>
        </div>
    );
}

export function Instruction6() {
    return (
        <div>
            <h1>Can I display a number with something like ...<br/><br/>
            ... a row of lightbulbs ?!
            </h1>
        </div>
    );
}


export function Instruction7() {
    return (
        <div>
            <h1>Yes we can ! <br/><br/>
             This is what binary essentially is about. <br/><br/>
             But first, let's get back to our row of lightbulbs. <br/>
             </h1>
             {/* TODO: Add row of lightbulbs */}
        </div>
    );
}

export function Instruction8() {
    return(
        <div>
            <h1>Here, I have a row of 9 lightbulbs, how could I <br/>
             represent each digit with them ? <br/><br/>
             </h1>
             {/* TODO: add lightbulbs */}
        </div>  
    );
}

export function Instruction9() {
    return(
        <div>
            <h1>Here, I have a row of 9 lightbulbs, how could I <br/>
             represent each digit with them ? <br/><br/>
             </h1>
        </div>  
    );

}



export function Instruction10() {
    return(
        <div>
            <h1>There are several ways to do so ! </h1>
            <h1 style={{fontStyle:'italic'}}>One way would be to turn on the appropriate number of lightbulbs,<br/>
                For instance, you could turn on three lightbulbs to show the number 3: 
            </h1>
        </div>  
        /* TODO: lightbulb row with 3 random lights on */

    );


}
export function Instruction11() {
return(
    <div>   
        <h1> You could do this in an unordered manner ...</h1>
    </div>
    // TODO : lightbulbs
)

}


export function Instruction12() {
    return(
        <div>   
            <h1> Or in an ordered manner ! <br/>
            It doesn't matter. </h1>
        </div>
    )
}

export function Instruction13() {
    return(
        <div>   
            <h1> What if we wanted to save energy ? <br/><br/>
            Can I represent each number by lightning up only <br/>
            one lightbulb at the time ? 
            </h1>
        </div>
    )
    // TODO : one turned on lightbulb

}

export function Instruction14() {
    return(
        <div>   
            <h1> Yes ! <br/><br/>
            Just light one lightbulb at a given position. <br/>
            We could add a label to each lightbulb. 
            </h1>
        </div>
        //TODO : Row of lightbulbs with numbers
    )

}


export function Instruction15(){
    return(
        <div>   
            <h1> And light the correct bulb ! <br/>
            If we want to show five, all we need is  <br/>
            to light up the fifth lightbulb.
            </h1>
        </div>
        //TODO : lightbulb with one on
    )
}

export function Instruction16(){
    return(
        <div>   
            <h1> What if we want to show 0 ? <br/>
            We can just leave all the lights off !
            </h1>
        </div>
    )
        /*TODO light bulbs off : 
        =>Could be very nice to make it interactive (that is display the row of lightbulbs turned off only after pressing next) */
}


export function Instruction17(){
    return(
        <div>   
            <h1> This is called  <br/> </h1>
            <h1 style={{fontWeight: '900', fontSize:'3.8vw'}}> One-hot encoding <br/></h1> 
            <h2> Only one lightbulb is hot for a given encoding ! </h2>
        </div>
         //Problème de gras ici ! Sois on change la police de charactère pour le one hot encoding sois moyen d'avoir du gras avec sans Cherif ? 
        //TODO : lightbulbs
    )

}
export function Instruction18(){
    return(
        <div>
            <h1>  With this new technique, we can now <br/> 
            represent a bunch of digits.</h1>
            <h1 style={{fontWeight: 'italic'}}> But can we do better ?  <br/></h1>
        </div>
        //TODO : lightbulbs
    )


}



export function Instruction19(){
    return(
        <div>
            <h1 >  Introducing ...  </h1> 
            <h1 style={{margin:'0px', fontSize: '12vw', fontWeight:'800', fontFamily:'DejaVu', fontStyle:'Italic'}} > Binary
            </h1>
        </div>
    )

    //TODO: Make this a bit prettier ?  :)
}


export function Instruction20(){
    return(
        <div>   
            <h1> Remember what we did for one-hot encoding :  <br/><br/> 
            We labelled the lightbulbs accoring to their <br/>
            position. However, only one lightbulb is lit at a <br/>
            time, while the others do nothing.
            </h1>
        </div>
        //TODO : arrow + lightbulbs
    )
}


export function Instruction21(){
    return(
        <div>   
            <h1> Can we light multiple bulbs at the same time ?
            </h1>
        </div>
        //TODO : lightbulbs
    )
}


export function Instruction22(){
    return(
        <div>   
            <h1> What if we were to label the lightbulbs <br/>
            differently ?
            </h1>
        </div>
        //TODO : lightbulbs
    )

}



export function Instruction23(){
    return(
        <div>   
            <h1>Let's see what we have here. <br/><br/>
            Only four lightbulbs. The lightbulbs are <br/>
            labelled with 1, 2, 4 and 8. <br/><br/>
            How can we represent the digits 0 to 9 now ?
            </h1>
        </div>
        //TODO : lightbulbs + labels
    )
}


export function Instruction24(){
    return(
        <div>   
            <h1>let's try to turn on lightbulbs labelled with  <br/>
            1 and 4.
            </h1>
        </div>
        //TODO : 4 correct lightbulbs
    )
}


export function Instruction25(){
    return(
        <div>   
            <h1>What do we get if we add those up together ?
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 + 1 ...
            </h1>
        </div>
        //TODO : lightbulbs
    )

}


export function Instruction26(){
    return(
        <div>   
            <h1>What do we get if we add those up together ?
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 + 1 = 5 
            </h1>
        </div>
        //TODO : lightbulbs
    )
}



export function Instruction27(){
    return(
        <div>   
            <h1>What if we wanted to represent
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 9 ? 
            </h1>
        </div>
        //TODO : lightbulbs
    )
}
export function Instruction28(){
    return(
        <div>   
            <h1>Light up lightbulbs '8' and '1' !
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 8 + 1 = 9 
            </h1>
        </div>
        //TODO : lightbulbs
    )
}


export function Instruction29(){
    return(
        <div>   
            <h1>What if we wanted to represent
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 ?
            </h1>
        </div>
        //TODO : lightbulbs
    )

}


export function Instruction30(){
    return(
        <div>   
            <h1>Turn on lightbulb '4' only !
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 4 = 4 
            </h1>
        </div>
        //TODO : lightbulbs
    )

}


export function Instruction31(){
    return(
        <div>   
            <h1>What if we wanted to represent
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 0 ?
            </h1>
        </div>
        //TODO : lightbulbs
    )
}

export function Instruction32(){
    return(
        <div>   
            <h1>Just as for the one-hot encoding representation : <br/>
            We don't light any bulb !
            </h1>

        </div>
        //TODO : lightbulbs
    )
}

export function Instruction33(){
    return(
        <div>   
        <h1>See, now we can represent all the digits from 0 <br/>
        to 9 using only four lightbulbs !
        </h1>
    </div>
        );

        //TODO: lightbulbs
}


export function Instruction34(){
    return (
        <div>   
            <h1>And we can even go higher ! <br/>
            What if we light up all the lightbulbs at once ... <br/>
            What do we get ?
            </h1>
    
        </div>  
        );
        //TODO:lightbulbs
}


export function Instruction35(){
    return (
        <div>   
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 8 + 4 + 2 + 1 = ...
            </h1>
    
        </div>
    
        //TODO : lightbulbs
    )
}


export function Instruction36(){
    return(
        <div>   
            <h1>With only four lightbulbs, we can encode numbers up to 15 !
            </h1>
            <h1 style={{fontSize: '8vw', fontWeight:'800', fontFamily:'DejaVu'}} > 8 + 4 + 2 + 1 = 15
            </h1>
        </div>
        //TODO : lightbulbs
    )
}


export function Instruction37(){
    return(
        <div>   
            <h1>With one-hot encoding, <br/>
            We would have needed 15 lightbulbs to achieve the same !
            </h1>
        </div>
    )
    //TODO : lightbulbs
}


export function Instruction38(){
    return (
        <div>
            <h1>But why do we even care about this ?</h1>
            <img 
            class= "image-layout"
            src={Smiley}
            alt="confused_smiley"
            />
        </div>
    );
}


export function Instruction39(){
    return (
        <div>
            <h1>Isn't it simpler to just write down 5 after all ? <br/>
            It's what we all learnt in school after all...
            </h1>
            <img 
            class= "image-layout"
            src={Five}
            alt="handwritten_five"
            />
        </div>
    );
}


export function Instruction40(){
    return (
        <div>
            <h1>But imagine you're trying to send your friend a <br/>
            message without drawing, speaking, writing, <br/>
            or seeing them !
            </h1>
        </div>
    );

    //TODO : ajouter schéma de Figma -> Image ou alors smart layout avec différents objets ?

}


export function Instruction41(){
    return (
        <div>
            <h1>You could send your friends an entire <br/>
            message using only lightbulbs !
            </h1>
        </div>
    );

}


export function Instruction42(){
    return (
        <div>
            <h1>And what if you wanted to send letterss instead <br/>
            of numbers ?</h1>
            <img 
            class= "image-layout"
            src={Smiley}
            alt="confused_smiley"
            />
        </div>
    );

}
export function Instruction43(){
    return(
        <div>   
            <h1>Easy ! Just number the letters ... <br/>
            A can be 1, B can be 2, c can be 3 ...
            </h1>
            <h1 style={{fontSize: '6vw', fontWeight:'500', fontFamily:'DejaVu', fontStyle:'italic'}} > 
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
export function Instruction44(){
    return (
        <div>
            <h1>With enough lightbulbs, you can send  <br/>
            entire messages !
            </h1>
        </div>
    );

    // TODO : implement image or nice html objects as in Figma

}
export function Instruction45() {
    return (
        <div>
            <h1>You don't even need lightbulbs, you can use other  <br/>
            things like boxes which are black and white ! <br/>
            They could also use zeros and ones, this is how  <br/>
            computers interact together !
            </h1>
        </div>
    );

    // TODO : put image from Figma or HTML properly

}
