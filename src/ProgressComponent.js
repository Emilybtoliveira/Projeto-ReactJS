import React from 'react';
import {Progress} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressHomePage=(props) => {
  return (
    <div>
      <Progress animated color="success" value="88">Muito Satisfeita - 88% </Progress>
      <h1></h1>
      <Progress animated color="primary" value="8">Satisfeita - 8% </Progress>
      <h1></h1>
      <Progress animated color="info" value="4">Neutra - 4% </Progress>
      <h1></h1>
      <Progress animated color="warning" value="0">Insatisfeita - 0% </Progress>
      <h1></h1>
      <Progress animated color="danger" value="0">Muito Insatisfeita - 0% </Progress>
    </div>
  );
};

export default ProgressHomePage;