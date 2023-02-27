const app = require("express")();

const mysql = require("mysql2/promise");

async function connect() {
  const connection = await mysql.createPool({
    host: "localhost",
    user: "root",
    port: 3307,
    password: "1234",
    database: "test",
    connectionLimit: 10,
  });
  return connection;
}
app.get("/", async (req, res) => {
  try {
    const conn = await connect();
    const dbData = await conn.query("SELECT * FROM test.data;");
    res.json(dbData[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
