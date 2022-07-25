import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './index.css'

const CircularBar = props => {
  const {data} = props
  const {value, text} = data
  const percentage = value
  //   console.log(percentage)
  return (
    <div className="dummy">
      <li className="li-styling">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '22px',
            fontWeight: 'bold',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(99, 221, 188, ${percentage / 100})`,
            textColor: '#000000',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e9',
          })}
        />
        <p>{text}</p>
      </li>
    </div>
  )
}
export default CircularBar
