<?php
class company_model {
    public $id;
    public $name;
    public $link;
    

    public function __construct($id,$name,$link)
    {
        $this->id=$id;
        $this->name=$name;
        $this->link=$link;
        
    }

    public static function getAll()
    {
        // echo "getAll";
        require("connection_connect.php");
        $companyList = [];
        $sql="SELECT cp_id , cp_name ,cp_link FROM company";
        $result = $conn->query($sql);
        while($my_row = $result->fetch_assoc())
        {
            $id=$my_row['cp_id'];
            $name=$my_row['cp_name'];
            $link=$my_row['cp_link'];
            
            $companyList[] = new company_model($id,$name,$link);
        }

        require("connection_close.php");
    
    return $companyList;
    }

    // ------------------------------------------------------------------

    public static function search($key)
{
    
	require("connection_connect.php");
        $companyList = [];
        $sql="SELECT cp_id , cp_name ,cp_link FROM company  
        where (cp_id like'%$key%'or cp_name like '%$key%')";
        $result = $conn->query($sql);
        while($my_row = $result->fetch_assoc())
        {
            $id=$my_row['cp_id'];
            $name=$my_row['cp_name'];
            $link=$my_row['cp_link'];
            
            $companyList[] = new company_model($id,$name,$link);
        }

        require("connection_close.php");

    return $companyList;
}

}

?>