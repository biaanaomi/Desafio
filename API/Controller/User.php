<?php

class User extends Controller
{
    public function __construct($protected = false)
    {
        parent::__construct($protected);
        $this->table = [`name`, `username`, `email`, `food`, `amount`, `time`, `nutrient`,`metric`, `quant`];
        $this->tableName = 'users';
    }

    public function Store()
    {
        try {
            $query = "INSERT into `users`" .
                "(`name`, `username`, `email`, `food`, `amount`, 'time', 'nutrient', 'metric', 'quant')" .
                "VALUES" .
                "(:name, :username, :email, :food, :amount, :time, :nutrient, :metric, :quant)";

            $insert = $this->pdo->prepare($query);

            $insert->bindValue(":name", $this->InputJson('name'));
            
            $insert->bindValue(":username", $this->InputJson('username'));
            
            $insert->bindValue(":email", $this->InputJson('email'));
            $insert->bindValue(":food", $this->InputJson('food'));
            $insert->bindValue(":amount", $this->InputJson('amount'));
            $insert->bindValue(":time", $this->InputJson('time'));
            $insert->bindValue(":nutrient", $this->InputJson('nutrient'));
            $insert->bindValue(":metric", $this->InputJson('metric'));
            $insert->bindValue(":quant", $this->InputJson('quant'));

            $res = $insert->execute();

            if ($res) {
                
                return $this->Response(true, [], "Usuário criado com sucesso");
            }
            return $this->GenericError();
        } catch (Exception $e) {
            if ($e->errorInfo[1] == 1062) {
                return $this->Response(false, [], "Este e-mail já existe");
            } else {
                return $this->Response(false, [], "Erro no servidor, se persistir, por favor contate o suporte" . $e->getMessage());
            }
        }
    }
}