
import React, { useState, useEffect } from 'react';
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function getUserChartData() {
  return fetch('http://localhost:8080/user_chart')
    .then(data => data.json());
}

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getUserChartData()
      .then(items => {
        if (mounted) {
          setData(items);
        }
      });
  }, []);

  return (
    <React.Fragment>
      <div className='home'>
        <div className='home_item'>
          Users
          <br/>
          213
          <span className='small_text negative'>-1</span>
          <ArrowDownward  className="negative" sx={{position:'relative',top:'5px'}}/>
        </div>
        <div className='home_item'>
          Revenue
          <br/>
          $213
          <span className='small_text positive'>+$1</span>
          <ArrowUpward className="positive" sx={{position:'relative',top:'5px'}}/>
        </div>
        <div className='home_item'>
          Costs
          <br/>
          $213
          <span className='small_text positive'>+$1</span>
          <ArrowUpward className="positive" sx={{position:'relative',top:'5px'}}/>
        </div>
      </div>
      <div className='user_chart' style={{alignSelf:'flex-end'}}>
        User Chart
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <LineChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#111111" />

            <XAxis dataKey="name" stroke="#000000"/>
            <YAxis stroke="#000000" />
            <Legend/>
            <Line type="monotone" dataKey="uv" stroke="#5550bd" />
            <Line type="monotone" dataKey="pv" stroke="#bd5550" />
            <Tooltip />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </React.Fragment>
  );
}
