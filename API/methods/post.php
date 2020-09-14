<?php

Route::post('/users', function () {
    return (new User(true))->Store();
});

?>