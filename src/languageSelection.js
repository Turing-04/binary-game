import React from 'react';
import './common.css';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import constants from "./constants";

class LanguageSelection extends React.Component {
    render() {


        return (
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Row>
                    <Link className="button" to="/login-de"  onClick={() => constants.language='DE'}>Deutsch</Link>
                </Row>
                <Row>
                    <div style={{width: 100}}></div>
                </Row>
                <Row>
                    <Link className="button" to="/login"  onClick={() => constants.language='EN'}>English</Link>
                </Row>

            </div>
        );
    }

}


export default LanguageSelection;