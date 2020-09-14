<?php

require __DIR__ . "/Route.php";

require __DIR__ . "/Controller/Controller.php";

require __DIR__ . "/Controller/User.php";
require __DIR__ . "/Controller/Food.php";

require __DIR__ . "/methods/get.php";
require __DIR__ . "/methods/post.php";
require __DIR__ . "/methods/put.php";

Route::run('/');