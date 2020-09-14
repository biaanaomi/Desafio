import React from 'react';

import { FoodItemComponent } from './styles';

//Mostrar na pesquisa do FoodList cada item

export interface Food {
  id: number
  description: string
  nutrientName: string
  value: number
}

interface FoodItemProps {
  food: Food
}

const FoodItem: React.FC<FoodItemProps> = ({
  food,
}: FoodItemProps) => {

  return (
    <FoodItemComponent>
      <header>
        <div>
          <strong>{food.description}</strong>
          <span>{food.nutrientName}</span>
        </div>
      </header>

      <p>{food.id}</p>

      <footer>
        <p>
          Valor nutricional
          <strong>
          gramas
            {food.value}
          </strong>
        </p>
      </footer>
    </FoodItemComponent>
  );
}

export default FoodItem;