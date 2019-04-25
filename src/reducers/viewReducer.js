export default (state = {}, action) => {
  console.log(action, 'action');
    switch (action.type) {
     case 'VIEW_PR_LISTING':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }