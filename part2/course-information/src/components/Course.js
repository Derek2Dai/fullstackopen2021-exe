import React from "react";
import Content from "./Content";

const Header = ({ name }) => <h2>{name}</h2>;
const Sum = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((s, p) => s + p);
  return <b>total of {total} exercises</b>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Sum parts={course.parts} />
    </div>
  );
};

export default Course;
