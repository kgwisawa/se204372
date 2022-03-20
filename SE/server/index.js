const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());



const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database:"se_internship"
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
  db.query("SELECT ln_id ,email , password ,ln_name FROM loginnisit", (err, result) => {
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
  db.query("SELECT  cp_id,id_comment,id_id , ln_id , ln_name ,id_year , email  ,id_date ,  cp_name  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm`,id_other FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id)", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});






//*?-----------------------------------------------------------------------------------------  read orderstatus

app.get('/internshipdocument/orderstatus', (req,res) =>{
  db.query("SELECT  cp_id,id_comment,id_id , ln_id , ln_name ,id_year , email  ,id_date ,  cp_name  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm`,id_other FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id) ORDER BY id_status DESC", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

//*?-----------------------------------------------------------------------------------------  read orderdate

app.get('/internshipdocument/orderdate', (req,res) =>{
  db.query("SELECT  cp_id,id_comment,id_id , ln_id , ln_name ,id_year , email  ,id_date ,  cp_name  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm`,id_other FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id) ORDER BY id_id DESC", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

//*?-----------------------------------------------------------------------------------------  read orderyear

app.get('/internshipdocument/orderyear', (req,res) =>{
  db.query("SELECT  cp_id,id_comment,id_id , ln_id , ln_name ,id_year , email  ,id_date ,  cp_name  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm`,id_other FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id) ORDER BY id_year DESC", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

//*?-----------------------------------------------------------------------------------------  search

app.get('/internshipdocument/search', (req,res) =>{
  const key = req.body.key;
  db.query("SELECT   * FROM internshipDocument JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id) where ln_name like '%?%' or cp_name like '%?%' or id_status like '%?%'", [key,key,key],(err, result) => {
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
  const id_year = req.body.id_year;
  const cp_id = req.body.cp_id;
  const id_position = req.body.id_position;
  const id_sdate = req.body.id_sdate;
  const id_edate = req.body.id_edate;
  const id_file = req.body.id_file;
  const id_tfile1 = req.body.id_tfile1;
  const id_tfile2 = req.body.id_tfile2;
  const id_other = req.body.id_other;
  const id_status = req.body.id_status;
  const id_confirm = req.body.id_confirm;

  db.query(
    "INSERT INTO internshipdocument (ln_id  , id_date  , cp_id , id_year  , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_tfile1`,`id_tfile2`,id_other,`id_status`,`id_confirm`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [ln_id , id_date, cp_id,id_year ,id_position,id_sdate,id_edate,id_file ,id_tfile1,id_tfile2,id_other, id_status, id_confirm],
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

app.put("/update/internshipdocument", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  const id_comment = req.body.id_comment;


  db.query(
    "UPDATE internshipdocument SET id_status = ? , id_comment = ? WHERE id_id = ?",
    [ status ,id_comment ,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


//*?-----------------------------------------------------------------------------------------  Model internshipinsit end

//-----------------------------------------------------------------------------------------//


//*?-----------------------------------------------------------------------------------------  Model internshipresult

//*?-----------------------------------------------------------------------------------------  read

app.get('/internshipresult', (req,res) =>{
  db.query("SELECT ir_id, ln_id , ln_name ,email , cp_name , ir_date , ir_image ,ir_other,ir_status FROM internshipresult JOIN company  USING(cp_id) JOIN loginNisit USING(ln_id)", (err, result) => {
      if(err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

//*?-----------------------------------------------------------------------------------------  add
app.post("/create/internshipresult", (req, res) => {
  const ln_id = req.body.ln_id;
  const cp_id = req.body.cp_id;
  const ir_date = req.body.ir_date;
  const ir_status = req.body.ir_status;
  const ir_image = req.body.ir_image;
  const ir_other = req.body.ir_other;

  db.query(
    "INSERT INTO internshipresult (ln_id,cp_id ,ir_date,ir_status,ir_image,ir_other) VALUES (?,?,?,?,?,?)",
    [ln_id,cp_id,ir_date, ir_status, ir_image,ir_other],
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

app.put("/update/internshipresult", (req, res) => {
  const id = req.body.id;
  const detail = req.body.detail;
  const status = req.body.status;


  db.query(
    "UPDATE internshipresult SET ir_status = ?, ir_detail = ? WHERE ir_id = ?",
    [ status ,detail,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


//*?-----------------------------------------------------------------------------------------  Model internshipresult end

//-----------------------------------------------------------------------------------------//




app.listen('3001', () => {
    console.log("start")
})
