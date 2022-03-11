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


//*?----------------------------------------------------------------------------------------- Model Company

//*?-----------------------------------------------------------------------------------------  read
app.get('/company', (req,res) =>{
    db.query("SELECT * FROM company", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



//*?-----------------------------------------------------------------------------------------  add
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
//*?----------------------------------------------------------------------------------------- update

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

//*?----------------------------------------------------------------------------------------- delete
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

//*?----------------------------------------------------------------------------------------- Model Company end

//-----------------------------------------------------------------------------------------//

//*?-----------------------------------------------------------------------------------------  Model loginnisit

//*?----------------------------------------------------------------------------------------- read

app.get('/loginnisit', (req,res) =>{
  db.query("SELECT email , password FROM loginnisit", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

//*?-----------------------------------------------------------------------------------------  Model loginnisit end

//-----------------------------------------------------------------------------------------//


//*?-----------------------------------------------------------------------------------------  Model loginadmin

//*?-----------------------------------------------------------------------------------------  read

app.get('/loginadmin', (req,res) =>{
  db.query("SELECT email , password , po_name FROM loginadmin INNER JOIN position AS p ON p.po_id = loginadmin.po_id", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});



//*?-----------------------------------------------------------------------------------------  Model loginadmin end

//-----------------------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------------//


//*?----------------------------------------------------------------------------------------- Model internshipdocument

//*?-----------------------------------------------------------------------------------------  read

app.get('/internshipdocument', (req,res) =>{
  db.query("SELECT  ln_id  ,id_date ,  cp_name  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm` FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id)", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

//*?-----------------------------------------------------------------------------------------  add
app.post("/create/internshipdocument", (req, res) => {
  const ln_id = req.body.ln_id;
  const id_date = req.body.id_date;
  const cp_id = req.body.cp_id;
  const id_position = req.body.id_position;
  const id_sdate = req.body.id_sdate;
  const id_edate = req.body.id_edate;
  const id_file = req.body.id_file;
  const id_tfile1 = req.body.id_tfile1;
  const id_tfile2 = req.body.id_tfile2;
  const id_status = req.body.id_status;
  const id_confirm = req.body.id_confirm;

  db.query(
    "INSERT INTO internshipdocument (ln_id  , id_date ,  cp_id  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_tfile1`,`id_tfile2`,`id_status`,`id_confirm`) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [ln_id , id_date, cp_id ,id_position,id_sdate,id_edate,id_file ,id_tfile1,id_tfile2, id_status, id_confirm],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


//*?-----------------------------------------------------------------------------------------  Model internshipinsit end

//-----------------------------------------------------------------------------------------//


//*?-----------------------------------------------------------------------------------------  Model internshipresult

//*?-----------------------------------------------------------------------------------------  read

app.get('/internshipresult', (req,res) =>{
  db.query("SELECT ln_id , ln_name , cp_name , ir_date , ir_image ,ir_status FROM internshipresult JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id)", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});


//*?-----------------------------------------------------------------------------------------  Model internshipresult end

//-----------------------------------------------------------------------------------------//




app.listen('3001', () => {
    console.log("start")
})