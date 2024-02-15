const express = require('express');
const sql = require('mssql');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(cors());


const config = {
  user: 'bootcamp',
  password: 'Pass@123',
  server: 'bootcampfeb5.database.windows.net',
  database: 'bootcamp',
  options: {
    encrypt: true, 
    trustServerCertificate: false 
  }
};

sql.connect(config)
  .then(() => {
    console.log('Connected to SQL Azure database');
  })
  .catch(err => {
    console.error('Error connecting to SQL Azure database:', err);
  });

app.get('/data1', async (req, res) => {
  try {
    const result = await sql.query('SELECT TOP 20 * FROM SalesLT.Customer;');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error executing SQL query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/data2', async (req, res) => {
    try {
      const result = await sql.query('SELECT pc.*, p.* FROM SalesLT.ProductCategory pc INNER JOIN SalesLT.Product p ON pc.ProductCategoryID = p.ProductCategoryID;');
      res.json(result.recordset);
    } catch (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


// Production script
app.use(express.static('./client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
