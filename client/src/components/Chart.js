/*
http://rrag.github.io/react-stockcharts/documentation.html
*/

// IMPORTS 
import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import styled from 'styled-components'

// RECHARTS
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// STYLED COMPONENTS
const ChartContainer = styled.div`
    display: flex;  

    border: 1px solid black
`;



// const data = [
//     {
//         date: '12/1/18', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         date: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         date: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         date: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         date: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         date: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         date: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];

// class MainChart extends PureComponent {
function MainChart({state}) {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    console.log('<Chart/> State: ',state)

        return (
            <ChartContainer>
                {!state ?
                    <div className="loading">Loading Data</div>
                    :
                
                    <LineChart
                        width={500}
                        height={300}
                        data={state.historical}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                }
            </ChartContainer>
        );
    }

// MAP STATE TO PROPS
const mapStateToProps = state => {
	return {
        state: state.r_API.apiData
	}
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps,
    {},
)(MainChart) 
