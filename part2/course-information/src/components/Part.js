import React from "react";
const Part = ({ course }) => (
  <p>
    {course.name} {course.exercises}
  </p>
);

export default Part;
