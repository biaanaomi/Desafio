  
<?php

Route::get('/food', function () {
    return (new Food(true))->GetFood();
});

?>