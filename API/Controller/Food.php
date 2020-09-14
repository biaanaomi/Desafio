<?php

class Food extends Controller
{
    public function __construct($protected = false) {
        parent::__construct($protected);
    }
    
    public function GetFood()
    {
        if ($this->food) {
            $foodNutri = $this->food['description'];

            return $this->Json([
                "Success" => true,
                "Data" => $this->SelectAll("SELECT `id`, `description`, `nutrientName`, `value` FROM `food` WHERE `description` == '$foodNutri'"),
                "Message" => ""
            ]);
        }
    }
}