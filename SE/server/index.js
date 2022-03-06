const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database:"memo_care"
})


//////////////////////////////////////////////////////////// Model Company

//////////////////////////////////////////////////////////// read
app.get('/company', (req,res) =>{
    db.query("SELECT * FROM company", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



//////////////////////////////////////////////////////////// add
app.post("/create/company", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const link = req.body.link;

    db.query(
      "INSERT INTO company (cp_id, cp_name, cp_link) VALUES (?,?,?)",
      [id, name, link],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

//////////////////////////////////////////////////////////// update

  app.put("/update/company", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const link = req.body.link;

    db.query(
      "UPDATE company SET cp_name = ? , cp_link = ? WHERE cp_link = ?",
      [name, link ,id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

//////////////////////////////////////////////////////////// delete
  app.delete("/delete/company", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM company WHERE cp_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//////////////////////////////////////////////////////////// Model Company end

//-----------------------------------------------------------------------------------------//

//////////////////////////////////////////////////////////// Model loginnisit

//////////////////////////////////////////////////////////// read

app.get('/loginnisit', (req,res) =>{
  db.query("SELECT * FROM loginnisit", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});


//////////////////////////////////////////////////////////// Model loginnisit end

//-----------------------------------------------------------------------------------------//


//////////////////////////////////////////////////////////// Model loginadmin

//////////////////////////////////////////////////////////// read

app.get('/loginadmin', (req,res) =>{
  db.query("SELECT * FROM loginadmin INNER JOIN position AS p ON p.po_id = loginadmin.po_id", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});


//////////////////////////////////////////////////////////// Model loginadmin end

//-----------------------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------------//


//////////////////////////////////////////////////////////// Model internshipinsit

//////////////////////////////////////////////////////////// read

app.get('/internshipinsit', (req,res) =>{
  db.query("SELECT id_date ,ln_id , cp_name , ln_name , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm` FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id)", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});


//////////////////////////////////////////////////////////// Model internshipinsit end

//-----------------------------------------------------------------------------------------//




app.listen('3001', () => {
    console.log("start")
})