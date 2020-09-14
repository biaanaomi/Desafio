/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import { Container, ScheduleItem } from './styles';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

// definindo todas as constantes que serão usadas no formulario
const FoodForm: React.FC = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  //Sequencia lado a lado para preenchimento
  const [scheduleItems, setScheduleItems] = useState([
    { food: '', amount: 0, time: '' },
  ]);

  const [scheduleNutri, setScheduleNutri] = useState([
    { nutrient: 0, metric: 0,  quant: ''},
  ]);

//adicionar novo item com uma nova linha da sequencia
  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { food: '', amount: 0, time: '' }])
  }
  
  function addNewScheduleNutri() {
    setScheduleNutri([...scheduleNutri, { nutrient: 0, metric: 0, quant: '', }])
  }

//permitir a alteração/atualização de cada item da sequencia

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string,
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  function setScheduleNutriValue(
    position: number,
    field: string,
    value: string,
  ) {
    const updatedScheduleNutri = scheduleNutri.map((scheduleNutri, index) => {
      if (index === position) {
        return { ...scheduleNutri, [field]: value }
      }

      return scheduleNutri
    })
    setScheduleNutri(updatedScheduleNutri)
  }

  //Inicio do form para preenchimento com método post e Devolutiva//
  function handleCreateUser(e: FormEvent) { //conexão API externa
    e.preventDefault()

    api
      .post('user', {
        name,
        username,
        email,
        schedule1: scheduleNutri,
        schedule2: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!')

        history.push('/')
      })
      .catch(() => {
        alert('Erro no cadastro!')
      })

    console.log({
      name,
      username,
      email,
      schedule1: scheduleNutri,
      schedule2: scheduleItems,
    });
  }

  return (
    <Container>
      <PageHeader
        title="Conte nos um pouco sobre você"
        description="Com o preenchimento deste formulário, receberá via email instruções para continuar"
      />

      <main>
        <form onSubmit={handleCreateUser}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
            <Input
              name="username"
              label="User"
              value={username}
              onChange={e => {
                setUsername(e.target.value)
              }}
            />
            <Input
              name="email"
              label="E-mail"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />

          </fieldset>

          <fieldset>
            <legend>
              Sobre sua última refeição
              <button type="button" onClick={addNewScheduleItem}>
                + Novo alimento
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <ScheduleItem key={scheduleItem.food}>
                  <Input
                    name="food"
                    label="Alimento"
                    type = "string"
                    value={scheduleItem.food}
                    onChange={e => {
                      setScheduleItemValue(index, 'food', e.target.value)
                    }}
                  />

                  <Input
                    name="amount"
                    label="Quantidade"
                    type="float"
                    value={scheduleItem.amount}
                    placeholder="Digite aqui"
                    onChange={e => {
                      setScheduleItemValue(index, 'amount', e.target.value)
                    }}
                  />
                  <Input
                    name="time"
                    label="Horário"
                    type="time"
                    value={scheduleItem.time}
                    onChange={e => {
                      setScheduleItemValue(index, 'time', e.target.value)
                    }}
                  />
                </ScheduleItem>
              )
            })}
          </fieldset>

          <fieldset>
            <legend>
              O que espera melhorar
              <button type="button" onClick={addNewScheduleNutri}>
                + Novo Nutriente
              </button>
            </legend>

            {scheduleNutri.map((scheduleNutri, index) => {
              return (
                <ScheduleItem key={scheduleNutri.nutrient}>
                  <Select
                    name="nutrient"
                    label="Nutriente"
                    value={scheduleNutri.nutrient}
                    onChange={e => {
                      setScheduleNutriValue(index, 'nutrient', e.target.value)
                    }}
                    options={[
                      { value: 'Protein', label: 'Proteína' },
                      { value: 'Total-lipid-(fat)', label: 'Lípidio total (gordura)' },
                      { value: 'Carbohydrate', label: 'Carboidrato' },
                      { value: 'Energy', label: 'Energia' },
                      { value: 'Water', label: 'Água' },
                      { value: 'Sugars', label: 'Açucar' },
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

                  <Select
                    name="metric"
                    label="Deseja:"
                    value={scheduleNutri.metric}
                    onChange={e => {
                      setScheduleNutriValue(index, 'metric', e.target.value)
                    }}
                    options={[
                      { value: 'Diminuir', label: 'Diminuir' },
                      { value: 'Aumentar', label: 'Aumentar' },
                    ]}
                  />
                  <Input
                    name="quant"
                    label="Para quanto? "
                    value={scheduleNutri.quant}
                    onChange={e => {
                      setScheduleNutriValue(index, 'quant', e.target.value)
                    }}
                    />
                </ScheduleItem>
              )
            })}
          </fieldset>

          {/* caso falte algum bloco para preenchimento*/} 
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button> {/*botão para envio do form*/} 
          </footer>
        </form>
      </main>
    </Container>
  );
}

export default FoodForm;