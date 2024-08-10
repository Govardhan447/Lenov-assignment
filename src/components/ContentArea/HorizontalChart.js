import {BsThreeDots} from 'react-icons/bs'

import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts'

import './index.css'

const data = [
  {
    group_name: '10',
    boys: 200,
    girls: 400,
  },
  {
    group_name: '11',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: '12',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: '13',
    boys: 700,
    girls: 1200,
  },
]

const HorizontalChart = () => {
  const DataFormatter = number => {
    if (number % 5 === 0) {
      return `${(10).toString()}`
    }
    return (number * 50).toString()
  }

  return (
    <div className="chart-container">
      <div className="school-heading">
        <p>Institution Inspection</p>
        <BsThreeDots />
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="group_name"
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HorizontalChart
