import React from 'react';
import SingleStudent from './SingleStudent';

const SingleCampus = (props) => {
  console.log(props.campus.students);
  return (
    <div>
      <h2>{props.campus.name}</h2>
      <ul>
        {props.students.map((student) => (
          <li key={student.id}>
            <SingleStudent student={student} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleCampus;
