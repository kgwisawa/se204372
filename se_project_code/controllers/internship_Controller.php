<?php
class InternshipController{
    public function home(){
        $key = $_GET['key'];
        $internship_List = internship_model::getAll($key);
        require_once('views/pages/home.php');
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