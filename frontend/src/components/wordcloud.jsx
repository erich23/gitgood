
// import React...
import React from 'react';
import axios from 'axios';

class WordCloud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cloud: []
        }
    }

    componentDidMount() {

        let url = 'http://localhost:5000/messages/words?url=https://github.com/erich23/gitgood.git';

        axios.get(url).then((resp, err) => {
            if (err) {
                console.log(err)
            }
            else {
                let input = resp.data.payload;

                let cloud = [];
                for (var key in input) {

                    cloud.push({ text: key, value: cloud[key] });

                }


                this.setState({
                    cloud
                }, () => { console.log(this.state) });

            }
        });

    }

    render() {
        const fontSizeMapper = word => Math.log2(word.value) * 5;
        const rotate = word => word.value % 360;
        return (
            <WordCloud data={this.state.cloud} fontSizeMapper={fontSizeMapper} rotate={rotate} />
        );
    }
}


export default WordCloud;
