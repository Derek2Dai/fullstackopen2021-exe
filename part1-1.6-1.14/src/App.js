import React, { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td></td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ feedback, text }) => {
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
    return (
      <div>
        <h1>{text}</h1>
        No Feedback given
      </div>
    );
  }
  return (
    <div>
      <h1>{text}</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={feedback.good} />
          <StatisticLine text="neutral" value={feedback.neutral} />
          <StatisticLine text="bad" value={feedback.bad} />
          <StatisticLine
            text="All"
            value={feedback.bad + feedback.neutral + feedback.good}
          />
          <StatisticLine
            text="Average"
            value={(
              (-feedback.bad + feedback.good) /
              (feedback.bad + feedback.neutral + feedback.good)
            ).toFixed(1)}
          />
          <StatisticLine
            text="Positive"
            value={
              (
                100 *
                (feedback.good /
                  (feedback.bad + feedback.neutral + feedback.good))
              ).toFixed(1) + "%"
            }
          />
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  const handleClick = (state) => {
    const stateFunctionArray = [
      {
        stateType: "good",
        function: () => setGood(good + 1),
      },
      {
        stateType: "neutral",
        function: () => setNeutral(neutral + 1),
      },
      {
        stateType: "bad",
        function: () => setBad(bad + 1),
      },
    ];
    return stateFunctionArray.find((o) => o.stateType === state).function;
  };
  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleClick("good")} text="good" />
      <Button handleClick={handleClick("neutral")} text="neutral" />
      <Button handleClick={handleClick("bad")} text="bad" />
      <Statistics text="Statistics" feedback={feedback} />
    </div>
  );
};

export default App;
