
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CanvasJSReact from './canvasjs/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Emotions extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = 'http://localhost:5000/messages/emotions?url=https://github.com/erich23/gitgood.git';
        axios.get(url).then((resp, err) => {
            if (err) {
                console.log(err)
            }
            else {
                let input = resp.data.payload;

                console.log(resp)

				let sum = 0;
				for (var key in input) {
					sum += input[key];
				}
                let data = [];
                for (var key in input) {

                    data.push({ y: 100 * input[key]/sum, label: key });

                }


                this.setState({
                    data
                }, () => { console.log(this.state) });

            }
        });

    }

    render() {
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Emotions of Commit Messages"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",

                dataPoints: this.state.data
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default Emotions;                    
