import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student",
});

// GET all students
app.get("/", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.json({ Message: "Error inside server" });
    }

    return res.json(result);
  });
});

// POST a new student
app.post("/students", (req, res) => {
  const { first_name, last_name, location, email, dob, education } = req.body;
  const sql =
    "INSERT INTO students (first_name, last_name, location, email, dob, education) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [first_name, last_name, location, email, dob, education],
    (err, result) => {
      if (err) {
        console.error("Error creating student:", err);
        return res.status(500).json({ error: "Error creating student" });
      }
      console.log("Student created:", result);
      return res.status(200).json({ message: "Student created successfully" });
    }
  );
});
// Read the existing student for Updating the student
app.get("/read/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM students WHERE student_id =?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ Message: "Error inside server" });
    }
    return res.status(200).json(result);
  });
});
// UPDATE the existing student
app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE students SET `first_name` = ?, `last_name` = ?, `email` = ?, `location` = ?, `dob` = ?, `education` = ? WHERE student_id = ?";
  const id = req.params.id;
  const { first_name, last_name, location, email, dob, education } = req.body;
  db.query(
    sql,
    [first_name, last_name, email, location, dob, education, id],
    (err, result) => {
      if (err) {
        console.error("Error updating student:", err);
        return res.status(500).json({ error: "Error updating student" });
      }
      console.log("Student updated:", result);
      return res.status(200).json({ message: "Student updated successfully" });
    }
  );
});
// DELETE the student
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM students WHERE student_id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      return res.status(500).json({ error: "Error deleting student" });
    }
    console.log("Student Deleted:", result);
    return res.status(200).json({ message: "Student deleted successfully" });
  });
});

app.listen(8081, () => {
  console.log(`Listening on port 8081`);
});
