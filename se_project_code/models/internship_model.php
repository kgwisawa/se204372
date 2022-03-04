<?php
class internship_model {
    public $id;
    public $name;
    public $date;
    public $status;
    

    public function __construct($id,$name,$date,$status)
    {
        $this->id=$id;
        $this->name=$name;
        $this->date=$date;
        $this->status=$status;
        
    }

    public static function getAll($key)
    {
        // echo "getAll";
        require("connection_connect.php");
        $internshipList = [];
        $sql="select id , name , date , status from internshipDocument";
        $result = $conn->query($sql);
        while($my_row = $result->fetch_assoc())
        {
            $id=$my_row['id'];
            $name=$my_row['name'];
            $date=$my_row['date'];
            $status=$my_row['status'];
            
            $internshipList[] = new internship_model($id,$name,$date,$status);
        }

        require("connection_close.php");
    
    return $internshipList;
    }

//     // ------------------------------------------------------------------

//     public static function search($key)
// {
    
// 	require("connection_connect.php");
//         $internshipList = [];
//         $sql="select id , name , date from internship  
//         where (id like'%$key%'or name like '%$key%')";
//         $result = $conn->query($sql);
//         while($my_row = $result->fetch_assoc())
//         {
//             $id=$my_row['id'];
//             $name=$my_row['name'];
//             $date=$my_row['date'];
            
//             $internshipList[] = new internship_model($id,$name,$date);
//         }

//         require("connection_close.php");

//     return $internshipList;
// }

}

?>