export default (state, action) => {
    switch (action.type) {
        case "GET_ALL_POKEMON":
            return {
                ...state,
                pokemons: [action.payload]
            }

        case "ADD_FAV_POKEMON":
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }

        case "REMOVE_FAV_POKEMON":
            return {
                ...state,
                favorites: state.favorites.filter(pokemon => pokemon.id !== action.payload)
            }

        case "OPEN_MODAL":
            return {
                ...state,
                modal: action.payload
            }

        case "CLOSE_MODAL":
            return {
                ...state,
                modal: {
                    id: null,
                    name: null,
                    isOpen: false
                }
            }


        default:
            return state;
    }
}