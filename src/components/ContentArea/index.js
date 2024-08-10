import {FcCalendar} from 'react-icons/fc'
import {BsThreeDots} from 'react-icons/bs'
import './index.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts'

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
const pipedata = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

const ContentArea = () => {
  const DataFormatter = number => {
    if (number % 5 === 0) {
      return `${(50).toString()}`
    }
    return number.toString()
  }

  return (
    <>
      <div className="overview-contaienr">
        <div className="overview-heading">
          <h1>Overview</h1>
        </div>
        <div className="date-pickers-container">
          <div className="picker-container">
            <FcCalendar className="calendar" />
            <input type="date" className="date-picker" />
          </div>
          <div className="picker-container">
            <FcCalendar className="calendar" />
            <input type="date" className="date-picker" />
          </div>
        </div>
      </div>
      <div className="recharts-container">
        <div className="chart-container">
          <div className="school-heading">
            <p>School</p>
            <BsThreeDots />
          </div>
          <ResponsiveContainer width="80%" height={220}>
            <BarChart
              data={data}
              margin={{
                top: 5,
              }}
            >
              <XAxis
                dataKey="group_name"
                tick={{
                  stroke: 'gray',
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={DataFormatter}
                tick={{
                  stroke: 'gray',
                  strokeWidth: 0,
                }}
              />
              <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="1%" />
              <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="1%" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="school-heading">
            <p>Institution Inspection</p>
            <BsThreeDots />
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={data}
              margin={{
                top: 5,
              }}
            >
              <XAxis
                dataKey="group_name"
                tick={{
                  stroke: 'gray',
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={DataFormatter}
                tick={{
                  stroke: 'gray',
                  strokeWidth: 0,
                }}
              />
              <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
              <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="school-heading">
            <p>Academics Reports</p>
            <BsThreeDots />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                cx="50%"
                cy="40%"
                data={pipedata}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="Telugu" fill="#fecba6" />
                <Cell name="Hindi" fill="#b3d23f" />
                <Cell name="English" fill="#a44c9e" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <div className="school-heading">
            <p>Assignment and Examination</p>
            <BsThreeDots />
          </div>
          <AreaChart
            width={300}
            height={160}
            data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="boys"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="girls"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        <div className="chart-container">
          <div className="school-heading">
            <p>Academics and Scores</p>
            <BsThreeDots />
          </div>
          <LineChart
            width={300}
            height={160}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotoneX" dataKey="boys" stroke="#8884d8" />
            <Line type="monotone" dataKey="girls" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  )
}

export default ContentArea
