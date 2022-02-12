import React from "react";
const Header = (props) => {
  return <h1>{props.coursename}</h1>;
};
const Content = (props) => {
  return (
    <div>
      <Part
        part={props.contentPart.part1.part1}
        exercises={props.contentPart.part1.exercises1}
      />
      <Part
        part={props.contentPart.part2.part2}
        exercises={props.contentPart.part2.exercises2}
      />
      <Part
        part={props.contentPart.part3.part3}
        exercises={props.contentPart.part3.exercises3}
      />
    </div>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
const Total = (props) => {
  return <p>Number of exercises {props.totalNumber}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const contentPart = {
    part1: {
      part1: part1,
      exercises1: exercises1,
    },
    part2: {
      part2: part2,
      exercises2: exercises2,
    },
    part3: {
      part3: part3,
      exercises3: exercises3,
    },
  };
  return (
    <div>
      <Header coursename={course} />
      <Content contentPart={contentPart} />
      <Total totalNumber={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
