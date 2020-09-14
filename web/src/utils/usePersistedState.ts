import { useState, useEffect, Dispatch, SetStateAction } from 'react';
//utilizando APIs internas dos Hooks no React

type Response<T> = [T, Dispatch<SetStateAction<T>>]

//Retorna um valor e uma função para atualizar o valor.
function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    }
    return initialState // o estado retornado é o mesmo que o valor passado como argumento inicial
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState]
}

export default usePersistedState;