import React from 'react';
import './common.css';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import constants from "./constants";

class ActivitySelectionDe extends React.Component {
    render() {

        return (
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>


                <Row>
                    <h1>Hallo {constants.name}!</h1>
                    <p style={{width: 600}}>
                        Heute erforschen wir das Binärsystem. 
                        <br/>
                        Hast du schon einmal davon gehört?
                        <br/>
                        Falls nicht, kein Problem. Am Ende dieser Lektion wirst du ein wahrer Binärmeister sein!
                        <br/>
                        Bitte klick auf die Gruppe, der du zugeteilt wurdest.
                        <br/>
                        <br/>
                    </p>
                </Row>
                <Row>
                    <div style={{width: 100}}></div>
                </Row>
                <Row>
                    <Link className="button" to="/problem-solving-de"
                          onClick={() => {constants.group = "psi"; constants.language = "de";}}
                    >Gruppe 1</Link>
                </Row>
                <Row>
                    <div style={{width: 100}}></div>
                </Row>
                <Row>
                    <Link className="button" to="/instruction-de"
                          onClick={() => {constants.group = "ips"; constants.language = "de";}}
                    >Gruppe 2</Link>
                </Row>

            </div>


        );
    }

}


export default ActivitySelectionDe;