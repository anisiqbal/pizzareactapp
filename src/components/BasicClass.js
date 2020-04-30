import React from 'react';
// import '../assets/css/basic-functional.css';

class BasicClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("BasicClass");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>BasicFunctional</p>
            </div>
        );
    }
}
export default BasicClass;