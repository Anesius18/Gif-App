
export const gifReducer = (state, action) => {


  switch (action.type) {
    case 'add':
        if (state.includes(action.payload)) return;
        return [action.payload, ...state ]
        
    case 'delete':
        return state.filter(task => task !== action.payload)
    default:
       state
  }
}
