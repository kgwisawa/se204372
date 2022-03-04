<?php
class PagesController{
    public function home(){
        $company_List = company_model::getAll();
        require_once('views/pages/home.php');
    }
    public function error()
    {
        require_once('views/pages/error.php');
    }

    public function search(){
        $key = $_GET['key'];
        $company_List = company_model::search($key);
        // echo $company_list[0]->name;
        require_once('views/pages/home.php');
    }


}
?>