<?php
if(isset($_GET['controller'])&&isset($_GET['action']))
{
    $controller=$_GET['controller'];
    $action=$_GET['action'];
}else{
    $controller='pages';
    $action='home';
}
?>
<!DOCTYPE html>

<html lang="en">
    
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet"  href="styles.css"> -->
    <title>Home</title>
</head>
<body>
<?php echo "controller=".$controller.",action=".$action ;?>
<br>[<a href="">Home</a>]<br>
<?php require_once("routes.php");?>
</body>
</html>