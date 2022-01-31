
import React from 'react';
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

export function Home() {

  const data = [
    {
      name: 'A',
      uv: 100,
      pv: 100,
      amt: 200
    },
    {
      name: 'B',
      uv: 2000,
      pv: 300,
      amt: 400
    },
    {
      name: 'C',
      uv: 500,
      pv: 600,
      amt: 700
    },
    {
      name: 'D',
      uv: 1100,
      pv: 1200,
      amt: 2400
    },
  ];

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
