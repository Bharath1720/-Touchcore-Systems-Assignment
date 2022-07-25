import './index.css'

import renderBarChart from '../Barchart'

import CircularBar from '../CircularBar'

const RetirementIncome = () => {
  const data = [
    {
      uniqueNo: 1,
      value: 78,
      text: 'Average',
    },
    {
      uniqueNo: 2,
      value: 95,
      text: 'Top',
    },
    {
      uniqueNo: 3,
      value: 59,
      text: 'Me',
    },
  ]

  return (
    <>
      <div className="retirement-income-container">
        <p className="retirement-income-heading">Retirement Income</p>
        <h1 className="starting-year-text">Starting Year 2056</h1>
        <div className="monthly-goal-container">
          <div className="my-goal">
            <h1 className="my-goal-heading">$300,000</h1>
            <p className="my-goal-value">My Goal</p>
          </div>
          <div className="my-goal">
            <h1 className="my-goal-heading">59%</h1>
            <p className="my-goal-value">My Goal</p>
          </div>
          <div className="my-goal">
            <h1 className="my-goal-heading">$300</h1>
            <p className="my-goal-value">My Goal</p>
          </div>
        </div>

        {/* Bar Graph */}
        <div className="bar-container">
          <h1 className="contribution-over-the-time">
            Contribution over the time
          </h1>
          {renderBarChart()}
        </div>

        {/* Circular Bar */}

        <div>
          <h1 className="circular-bar-heading">
            How do I compare with my peers
          </h1>
          <p className="circular-bar-para">
            These numbers represent current goal achievement
          </p>
          <div className="circular-bar-outer-container">
            <div className="circular-bar-inner-container">
              <div>
                <span className="select-span">Age:</span>
                <select className="circular-bar-select">
                  <option value="under 30k">Under 30k</option>
                  <option value="under 20k">under 20k</option>
                </select>
                <hr className="hr-line-two" />
              </div>
              <div>
                <span className="select-span">Salary:</span>
                <select className="circular-bar-select">
                  <option value="k 20 - k 30">k 20 - k 30</option>
                  <option value="k 40 - k 50">k 20 - k 30</option>
                </select>
                <hr className="hr-line-two" />
              </div>
              <div>
                <span className="select-span">Gender:</span>
                <select className="circular-bar-select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <hr className="hr-line-two" />
              </div>
            </div>
            <ul>
              {data.map(each => (
                <CircularBar data={each} key={each.uniqueNo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default RetirementIncome
