<?php 

require_once "/../Conn.php";

class ClassListFood extends ClassConn{

    #Selecionar os dados no db
    public function listFood($Par=null){
        if($Param==null){
            $Crud=$this->conectaDB()->prepare("select DISTINCT description from carros");
        }else{
            $Crud=$this->conectaDB()->prepare("select * from carros where nutrientName = :NutrientName");
            $Crud->bindParam(":NutrientName",$Param,PDO::PARAM_STR);
        }
        $Crud->execute();

        $I=0;
        $J=[]; //retorno

        while($Fetch=$Crud->fetch(PDO::FETCH_ASSOC)){
            if($Param == null){
                $J[$I]=[
                    "Resposta"=>$Fetch['description']
                ];
            }else{
                $J[$I]=[
                    "Resposta"=>$Fetch['nutrientName']
                ];
            }
            $I++;
        }
        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}

?>