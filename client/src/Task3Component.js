import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Task3Component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://snehal-app.azurewebsites.net/data2')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data.then);

  return (
    <div>
      <h2>Data from Backend</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Colour</th>
            <th>Size</th>
            <th>Weight</th>         
          </tr>
        </thead>
        <tbody>            
        {data.map(item => (
  <tr>
    <td>{item.Name}</td>
    <td>{item.Color}</td>
    <td>{item.Size}</td>
    <td>{item.Weight}</td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
}

export default Task3Component;
