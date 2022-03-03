<?php
if (isset($_GET['controller']) && isset($_GET['action'])) {
    $controller = $_GET['controller'];
    $action = $_GET['action'];
} else {
    $controller = 'pages';
    $action = 'home';
}
?>
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href="styles.css">
    <title>navbar</title>
</head>

<body>
    <!-- <?php echo "controller=" . $controller . ",action=" . $action; ?> -->

    <header>
        <img class="logo" src="assets/image/KU Internship.png" alt="logo">
            <nav>
                <ul class="nav__links">
                    <li><a href="#">ข่าว</a></li>
                    <li><a href="#">ฝึกงาน</a></li>
                    <a class="cta" href="#"><button>Sing in</button></a>
                    <div> </div>
                </ul>
            </nav>

    </header>

    <!-- <br>[<a href="">Home</a>]<br> -->

    <?php require_once("routes.php"); ?>
</body>

</html>