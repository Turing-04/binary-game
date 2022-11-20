import React from 'react';
import '../common.css';
import MainLayout from "../mainLayout";
import {getResults, addResults} from "../utils/firebase";

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
                    <h1>List data</h1>
                    {this.state.data ? <p>{this.state.data}</p> : <p>Loading...</p> }
                    <h1>Upload data</h1>
                    <button onClick={
                        () => {
                            addResults("test").then(r => {
                                this.renderMyData();
                            });
                        }
                    }>Upload</button>
                </div>
            } next="/instruction-2"/>
        );
    }
}



export default Instruction1;