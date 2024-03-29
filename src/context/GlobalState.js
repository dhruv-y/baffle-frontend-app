import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from '../reducers/AppReducer';

// initial state
const initialState = {
    currentType: null,
    pokemons: [],

    // persist favorites using storage
    favorites: localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : [],

    modal: {
        id: null,
        name: null,
        isOpen: false
    }
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // set the favorites array from localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state.favorites])

    // actions
    const getAllPokemon = currentType => {
        dispatch({ type: "GET_ALL_POKEMON", payload: currentType });
    }

    const addPokemonToFav = pokemon => {
        dispatch({ type: "ADD_FAV_POKEMON", payload: pokemon });
    }

    const removePokemonFromFav = id => {
        dispatch({ type: "REMOVE_FAV_POKEMON", payload: id })
    }

    const openModal = modalProps => {
        dispatch({ type: "OPEN_MODAL", payload: modalProps })
    }

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL", payload: null })
    }

    return (
        <GlobalContext.Provider
            value={{
                currentType: state.currentType,
                pokemons: state.pokemons,
                favorites: state.favorites,
                modal: state.modal,
                getAllPokemon,
                addPokemonToFav,
                removePokemonFromFav,
                openModal,
                closeModal
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}