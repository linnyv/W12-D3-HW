const express = require("express");

const superBonus = express();

const PORT = process.env.PORT || 3001;

//View engine
superBonus.set("view engine", "ejs");

const students = [
    {name: 'Arnold', id: 1 },
    {name: 'Loonette', id: 2 },
    {name: 'Steve', id: 3 },
    {name: 'Dora the Explorer', id: 4 },
    {name: 'Eliza Thornberry', id: 5 }
];

//Route 1: single student
superBonus.get("/students/:id", (req, res) => {
    const studentID = req.params.id;

    const student = students.find((student) => student.id === parseInt(studentID));

    if (student) {

    res.render('student', { student: student, students: students });

    }else {
        res.send('Student not there.');
    }
  });

  superBonus.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`);
});