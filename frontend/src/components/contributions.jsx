
// import React...
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CanvasJSReact from './canvasjs/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Contributions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = 'http://localhost:5000/contributions/daily?url=https://github.com/eashwar/eashwar.github.io.git';
        axios.get(url).then((resp, err) => {
            if (err) {
                console.log(err)
            }
            else {
                let input = resp.data.payload;

                console.log(resp)

                let data = [];
                for (var key in input) {

                    data.push({ x: new Date(key), y: input[key] });

                }


                this.setState({
                    data
                }, () => { console.log(this.state) });

            }
        });

    }



    render() {
        const options = {
            theme: "light2",
            title: {
                text: "Contributions Over Time"
            },
            axisY: {
                title: "Contributions",
                includeZero: false
            },
            data: [{
                type: "line",
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#",
                dataPoints: this.state.data
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                    onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }


}

export default Contributions;
