import _ from "lodash";

import { GRAPH5 } from "../actions";

//Reducer listening to different action types
//initial state is {}
export default function(state = {}, action) {
  switch (action.type) {
    //target
    case GRAPH5:
      console.log(action);
      return (action.payload.data);
    // case TLOGIN:
    //   console.log(action.payload.data);
    //   return _.mapKeys(action.payload.data, "name");

    default:
      return { ...state };
  }
}
