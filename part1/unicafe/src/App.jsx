import {useState} from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, totalFeedback, average, positive}) => {
  if (totalFeedback > 0)
  {
    return (
        <>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <StatisticsLine text='Good' value={good}/>
              <StatisticsLine text='Neutral' value={neutral}/>
              <StatisticsLine text='Bad' value={bad}/>
              <StatisticsLine text='All' value={totalFeedback}/>
              <StatisticsLine text='Average' value={average}/>
              <StatisticsLine text='Positive' value={positive}/>
            </tbody>
          </table>

        </>
    )
  }
  return (
      <p>No feedback given</p>
  )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const totalFeedback = good + neutral + bad
    const positive = totalFeedback === 0 ? 0 : good / totalFeedback
    const average = totalFeedback === 0 ? 0 : (good + bad * -1) / totalFeedback

    const giveGoodFeedback = () => setGood(good + 1)
    const giveNeutralFeedback = () => setNeutral(neutral + 1)
    const giveBadFeedback = () => setBad(bad + 1)

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text='Good' onClick={giveGoodFeedback}/>
            <Button text='Neutral' onClick={giveNeutralFeedback}/>
            <Button text='Bad' onClick={giveBadFeedback}/>
            <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} average={average} positive={positive}/>
        </div>
    )
}

export default App