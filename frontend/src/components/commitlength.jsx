
// import React...
import React from 'react';
import axios from 'axios';

class AverageCommitLength extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            averageCommitLength: 0
        }
    }

    componentDidMount() {
        let url = 'http://localhost:5000/commit/lengths?url=https://github.com/erich23/gitgood.git';

        axios.get(url).then((resp, err) => {
            if (err) {
                console.log(err)
            }
            else {

                let averageCommitLength = resp.data.payload;

                this.setState({
                    averageCommitLength
                }, () => { console.log(this.state) });

            }
        });

    }

    render() {
        return (
            <p> Average Commit Length: {this.state.averageCommitLength} </p>
        );
    }
}

export default AverageCommitLength;
