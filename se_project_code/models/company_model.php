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
        require("connection_connect.php");
        $companyList = [];
        $sql="select * from company";
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

}

?>