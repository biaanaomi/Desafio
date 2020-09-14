<?php

class FDC_API {
    private $api_key = null;
    private $error = false;

    function __construct($api_key = null){
        if (!empty($api_key)) $this->api_key = $api_key;
    }

    function request ( $endpoint = ' ', $params = array() ){
        $uri = "https://api.nal.usda.gov/fdc/v1/" . $endpoint . "?api_key=" . $this->api_key;
    
        //se necessário passar outros parametros
        if (is_array($params) ) {
            foreach ($params as $key => $value) {
                if (empty($value)) continue;
                $uri .= '&'. $key . '=' . urlencode ($value);
            }   

            $response = file_get_contents ($uri); //puxa informação, se erro na chaamada pula
            $this-> error = false;
            return json_decode($response, true);
        }
        else {
            $this-> error = true;
            return false;
        }

    }


    function is_error(){
        return $this->error;
    }

    function ali_list( $parametro = array() ) {
        $data = $this->request('foods/search', $parametro);


        if (!empty($data) && is_array($data['foods']) ) {
            $beef = $data['foods'];
            return $data['foods'];
        } else {
            $this->error = true;
            return false;
        }
    }

    function alimento_B12( $parametro = array(), $x = int ) {
        $data = $this->request('foods/search', $parametro);
        $nutri = array(); 

        if (!empty($data) && is_array($data['foods'][$x] ) ) {
            $info = $data['foods'][$x];          
            foreach ($info as $chave => $valor) {
                
                if(is_array($valor)) {
                    foreach ($valor as $chave2 => $othervalor) {
                        echo  '<br />';
                        foreach ($othervalor as $chave2 => $info_nutri) {
                            echo $chave2 . '=' . $info_nutri . ', ';
                        }
                        if ( $othervalor[nutrientName] === 'Vitamin B-12') {
                            $nutri = $othervalor[value];
                        }
                    }
                } else {
                    echo  '<br />' . $chave . ' = '. $valor . '<br />';
                }
            }
            return $nutri;
        }
    }

    function recursive_show_array($arr) {

        foreach($arr as $value) {
            if(is_array($value)) {
                recursive_show_array($value);
            } else {
                echo $value;
            }
        }
    }
}

?>