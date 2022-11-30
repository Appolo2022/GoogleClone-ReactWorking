import { SET_SEARCH_TERM } from "./types";

export const initialState = {
  term: null,   // should be nothing / either with term: '', must work
};


const reducer = (state, action) => {
  console.log(action); // either without shold work!

  switch (action.type) {
      case SET_SEARCH_TERM:
          return {
              ...state,
              term: action.term,
              
          };
      
      default:
          return state;
         

  }
}

export default reducer;


  /////////////////////////////////////////

  // export const initialState = {
  //   term: null,   // should be nothing
  // };
  
  // export const actionTypes = {
  //   SET_SEARCH_TERM: "SET_SEARCH_TERM"
  // }
  

  // const reducer = (state, action) => {
  //   console.log(action);
  
  //   switch (action.type) {
  //       case actionTypes.SET_SEARCH_TERM:
  //           return {
  //               ...state,
  //               term: action.term,
  //           };
  
  //       default:
  //           return state;
  
  //   }
  // }
  
  // export default reducer;