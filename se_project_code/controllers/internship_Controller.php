<?php
class InternshipController{

    public function internship(){
        // $key = $_GET['key'];
        echo "start";
        $internship_List = internship_model::getAll();
        require_once('views/internship/internship.php');
    }

    public function error()
    {
        require_once('views/pages/error.php');
    }

    // public function search(){
    //     $key = $_GET['key'];
    //     $company_List = company_model::search($key);
    //     // echo $company_list[0]->name;
    //     require_once('views/pages/home.php');
    // }

}
?>