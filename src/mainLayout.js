import React from 'react';
import './common.css';
import {Link} from 'react-router-dom';

class MainLayout extends React.Component {
    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <div>{this.props.content}</div>
                <Link className="floating-button" to={this.props.next}>Next</Link>
            </div>
        );
    }

}

export default MainLayout;