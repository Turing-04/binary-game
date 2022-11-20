import React from 'react';
import '../common.css';
import MainLayout from "../mainLayout";
import getResults from "../utils/firebase";

class Instruction1 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data : null
        };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
        getResults().then((data) => {
            this.setState({data: data.toString()});
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <MainLayout content={
                <div>
                    {this.state.data ? <p>{this.state.data}</p> : <p>Loading...</p> }
                </div>
            } next="/instruction-2"/>
        );
    }
}



export default Instruction1;