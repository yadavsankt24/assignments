import React from 'react'
import * as  types from "./actionType"
 const initialcustomer={
  data:[],
}

 const reducer = (state=initialcustomer,action) => {

  switch (action.type){
    case types.POST_ADMIN_SUCCESS:
      return {
        ...state,
        data:[...state.data,action.payload]
      }

      



      default : 
      return state
  }

}

export {reducer}
