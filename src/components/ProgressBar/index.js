import './index.css'
import {Line} from 'rc-progress'

const ProgressBar = () => (
  <div>
    <h1>I am from Progress</h1>

    <Line
      strokeLinecap="round"
      percent={100}
      strokeWidth={1}
      strokeColor="#d63841"
    />
  </div>
)

export default ProgressBar
