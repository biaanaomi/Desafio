/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import FoodItem, { Food } from '../../components/FoodItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { PageFoodList, SearchFood } from './styles';
import api from '../../services/api';

//Definindo itens de busca e chamando api
const FoodList: React.FC = () => {
  const [foods, setFoods] = useState([])

  const [food, setFood] = useState('')
  const [nutrient, setNutrient] = useState('')

  async function searchFood(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('&food', {
      params: {
        food,
        nutrient,
      },
    })

    setFoods(response.data)
  }
//Input/submit da página de busca
  return (
    <PageFoodList>
      <PageHeader title="Procure o alimento ou nutriente desejado">
        <SearchFood onSubmit={searchFood}>
          <Input 
            type="string"
            name="food"
            label="Comida"
            value={food}
            placeholder="Digite aqui"
            onChange={e => {
              setFood(e.target.value)
            }}
          />

          <Select
            name="nutrient"
            label="Nutriente"
            value={nutrient}
            onChange={e => {
              setNutrient(e.target.value)
            }}
            options={[
              { value: 'Protein', label: 'Proteína' },
              { value: 'Total-lipid-(fat)', label: 'Lípidio total (gordura)' },
              { value: 'Carbohydrate', label: 'Carboidrato' },
              { value: 'Energy', label: 'Energia' },
              { value: 'Water', label: 'Água' },
              { value: 'Sugars', label: 'Açúcar' },
              { value: 'Fiber', label: 'Fibra' },
              { value: 'Calcium, Ca', label: 'Cálcio' },
              { value: 'Iron, Fe', label: 'Ferro' },
              { value: 'Sodium, Na', label: 'Sódio' },
              { value: 'Vitamin C', label: 'Vitamina C' },
              { value: 'Vitamin B-6', label: 'Vitamina B-6' },
              { value: 'Vitamin B-12', label: 'Vitamina B-12' },
              { value: 'Cholesterol', label: 'Colesterol' },
            ]}
          />

          <button type="submit">Buscar</button>
        </SearchFood>
      </PageHeader>

      <main>
        {foods.map((food: Food) => {
          return <FoodItem key={food.id} food={food} />
        })}
      </main>
    </PageFoodList>
  );
}

export default FoodList;