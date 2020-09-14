<?php

include("ClassSelecao.php");

$List=new ClassListFood();
$Campo=json_decode(file_get_contents("php://input"),true);
if($Campo == null){
    $List->listFood(null);
}else{
    $List->listFood($Campo['nutrientName']);
}

?>
