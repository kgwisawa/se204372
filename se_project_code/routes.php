<?php
$controllers = array(
    'pages' => ['home', 'error', 'search'],
    'internshipstaff' => ['internship']
);
function call($controller, $action)
{
    require_once("controllers/" . $controller . "_controller.php");
    switch ($controller) {
        case "pages":
            require_once('./models/company_model.php');
            $controller = new PagesController();
            break;
        case "internshipstaff":
            require_once('./models/internshipstaff_model.php');
            $controller = new InternshipstaffController();
            break;
    }
    $controller->{$action}();
}



if (array_key_exists($controller, $controllers)) {
    if (in_array($action, $controllers[$controller])) {
        call($controller, $action);
    } else {
        call('pages', 'error');
    }
} else {
    call('pages', 'error');
}
