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
                favorites: [action.payload, ...state.favorites]
            }

        default:
            return state;
    }
}