import axios from "axios";



export function getPokemon() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/pokemons")
    
    return dispatch({
      type: "GET_POKEMON",
      payload:response.data
    })
  }
}

export function getTypes() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/types")
    return dispatch({
      type:"GET_TYPES",
      payload:response.data
    })
  }
}

export function filterType(payload) {

  return {
    type: "FILTER_BY_TYPE",
    payload:payload
  }
}

export function getPokemonByName(name) {
  return async function (dispatch) {
    const response =await axios(`http://localhost:3001/pokemons/name?name=${name}`)

    return dispatch({
      type:"GET_POKEMON_NAME",
      payload:response.data
    })
  }
}

export function orderByAttack(payload) {
  return {
    type :"ORDER_BY_ATTACK" ,  
     payload
  }
}

export function orderByName(payload) {
  return {
    type :  'ORDER_BY_NAME',
    payload
  }
}
// export function postPokemon(payload) {
//   return async function (dispatch) {
//     const response =await axios(`http://localhost:3001/pokemons`,payload)

//     return dispatch({
//       type:"POST_POKEMON",
//       payload:response
//     })
//   }
// }


// export function getPokemonDetail(id) {
//   return async function (dispatch) {
//     const response =await axios(`http://localhost:3001/pokemons/${id}`)

//     return dispatch({
//       type:"GET_POKEMON_DETAIL",
//       payload:response.data
//     })
//   }
// }


// export function filterCreated(payload) {
//   return {
//     type : 'FILTER_CREATED',  
//     payload
//   }
// }

 