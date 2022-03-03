<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
</head>
<style media="screen">
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    .carousel {
        background: #EEE;
    }

    .carousel-cell {
        width: 27%;
        height: 250px;
        margin-right: 50px;
        background: #8C8;
        border-radius: 20px;
        /* counter-increment: gallery-cell; */
    }

    /* cell number */
    .carousel-cell:before {
        display: block;
        text-align: center;
        /* content: counter(gallery-cell); */
        line-height: 200px;
        font-size: 80px;
        color: white;
    }
</style>

<body>
    <h1 class="w3-center">Helloooooo</h1>
    <!-- Flickity HTML init -->
    <div class="carousel" data-flickity='{ "autoPlay": true }'>
        <div class="carousel-cell"><br>kuy</br></div>
        <div class="carousel-cell"><br>kuy2</br></div>
        <div class="carousel-cell"><br>kuy3</br></div>
        <div class="carousel-cell"><br>kuy4</br></div>
        <div class="carousel-cell"><br>kuy5</br></div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
</body>

</html>