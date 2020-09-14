<?php

class Conn
{
    public $Con;
    #conexão com o banco de dados
    public function conectaDB()
    {
        try {
            $host = 'localhost';
            $user = 'root';
            $senha = '';
            $bd = 'alimentalma';

            $this->Con = new PDO("mysql:host=" . $host . ";dbname=" . $bd, $user, $senha);
            $this->Con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->Con->exec("set names utf8");
            return $Con;
        } catch (PDOException $e) {
            return $Erro->getMessage();
        }
    }
}

?>