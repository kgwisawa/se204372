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
        $sql="select id , name , link from company as c";
        $result = $conn->query($sql);
        while($my_row = $result->fetch_assoc())
        {
            $id=$my_row['id'];
            $name=$my_row['name'];
            $link=$my_row['link'];
            
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
        $sql="select id , name , link from company  
        where (id like'%$key%'or name like '%$key%')";
        $result = $conn->query($sql);
        while($my_row = $result->fetch_assoc())
        {
            $id=$my_row['id'];
            $name=$my_row['name'];
            $link=$my_row['link'];
            
            $companyList[] = new company_model($id,$name,$link);
        }

        require("connection_close.php");
    
    return $companyList;
}

}

?>