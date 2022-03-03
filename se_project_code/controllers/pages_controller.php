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


}
?>