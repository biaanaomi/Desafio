<?php

#Requisição API (api_key)
require_once 'config.php';
require_once 'fdc-api.php';

$fdc = new FDC_API(FDC_API_KEY);

$Selecao=new ClassSelecao();


#Que alimento gostaria de buscar
$search = [query => 'BROCCOLI'];

#Mostra sempre o primeiro registro desse alimento
$list = $fdc->alimento_B12($search, 1);

if($list == null){
    $Selecao->selecao(null);
}else{
    $Selecao->selecao($Search['query']);
}

//testando Api
//$url = 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=pQLfoKnOXgl5ni4aGNpSQiq4SjOHPn6faTcs59jT';
//$list = json_decode(file_get_contents($url));
//echo($list['currentPage']);
//var_dump($list);

#Se valor do nutriente para tal alimento for menor que 1 cor vermelha, caso contrário azul
if ($fdc->is_error() == false){
  $variation = ($list < 1 ) ? 'danger' : 'info';
}

?>
<!-- utilizando Bootstrap -->
<!doctype html>
<html lang="en">
  <head>
    <title>Alimentos</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
        <div class="container">
            <div class="row">
                <div class=<div class="col-12">  
                    <p>B-12</p>
                      <?php if ($fdc->is_error == false): ?>
                      <p> <?php echo $search[query]; ?> <span class="badge badge-pill badge-<?php echo ($variation); ?>"><?php echo ($list); ?></span></p>
                      <?php else: ?>
                      <p><span class="badge badge-pill badge-danger">Serviço Indisponível</span>"
                      <?php endif; ?>  
                </div>
            </div>
        </div>
             <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>