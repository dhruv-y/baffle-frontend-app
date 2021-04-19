import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from '../reducers/AppReducer';

// initial state
const initialState = {
    pokemons: [],
    favorites: []
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const getAllPokemon = allPokemon => {
        dispatch({ type: "GET_ALL_POKEMON", payload: allPokemon });
    }

    const addPokemonToFav = pokemon => {
        dispatch({ type: "ADD_FAV_POKEMON", payload: pokemon });

    }

    return (
        <GlobalContext.Provider
            value={{
                pokemons: state.pokemons,
                favorites: state.favorites,
                getAllPokemon,
                addPokemonToFav
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}