<?php 
$servername = "localhost";
$username = "memo_care";
$password = "memo_care";
$dbname = "memo_care";
//Create connection
$conn = new mysqli($servername,$username,$password);
mysqli_set_charset($conn,"utf8");
//Check connection
if($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}else{
    // echo "Successfully server"."<br>";
}

// echo "Successfully server"."<br>";

if(!$conn->select_db($dbname)){
    echo $conn->connect_error;
}else{
    echo "Successfully database"."<br>";
}
// echo "kuy";

// $sql = "select id , name , link from company ";
// $result = $conn->query($sql);
// echo "kuy2";
// while($my_row = $result->fetch_assoc())
// {
//     echo "id".$my_row[id];
//     echo "name".$my_row[name];
//     echo "link".$my_row[link];

// }
// echo "kuy3";

?>