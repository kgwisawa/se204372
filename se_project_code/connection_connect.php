<?php 
$servername = "localhost";
$username = "memo_care";
$password = "memo_care";
$dbname = "memo_care";

//Create connection
$conn = new mysqli($servername,$username,$password);
//Check connection
if($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

// echo "Successfully server"."<br>";

// if(!$conn->select_db($dbname)){
//     echo $conn->connect_error;
// }else{
//     echo "Successfully database"."<br>";
// }

// // $sql = "select * from employees";
// // $result = $conn->query($sql);

// // echo "num row =".$result->num_rows."<br>";
// // while($row = $result->fetch_assoc()){
// //     echo "id:".$row["id"];
// //     echo "name:".$row["name"];
// // }

?>