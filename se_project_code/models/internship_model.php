<?php
class internship_model
{
    public $lnid;
    public $lnname;
    public $cpname;
    public $position;
    public $sdate;
    public $edate;
    public $file;
    public $status;
    public $confirm;


    public function __construct($lnid,$lnname,$cpname,$position,$sdate,$edate,$file,$status,$confirm) {
        $this->lnid = $lnid;
        $this->lnname = $lnname;
        $this->cpname = $cpname;
        $this->position = $position;
        $this->sdate = $sdate;
        $this->edate = $edate;
        $this->file = $file;
        $this->status = $status;
        $this->confirm = $confirm;
    }

    public static function getAll()
    {
        // echo "getAll";
        require("connection_connect.php");
        $internshipList = [];
        $sql = "SELECT ln_id , cp_name , ln_name , `id_position`, `id_sdate`,`id_edate`,`id_file`,`id_status`,`id_confirm` FROM internshipDocument 
        JOIN company  USING(cp_id)
        JOIN loginNisit USING(ln_id)
        ";

        $result = $conn->query($sql);
        while ($my_row = $result->fetch_assoc()) {

            $lnid = $my_row['ln_id'];
            $lnname = $my_row['ln_name'];
            $cpname = $my_row['cp_name'];
            $position = $my_row['id_position'];
            $sdate = $my_row['id_sdate'];
            $edate = $my_row['id_edate'];
            $file = $my_row['id_file'];
            $status = $my_row['id_status'];
            $confirm = $my_row['id_confirm'];
            // echo $my_row['ln_id'];

            $internshipList[] = new internship_model(
                $lnid,
                $lnname,
                $cpname,
                $position,
                $sdate,
                $edate,
                $file,
                $status,
                $confirm
            );
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
