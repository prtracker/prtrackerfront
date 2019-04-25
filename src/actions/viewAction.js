export const viewAction = () => dispatch => {
    dispatch({
     type: 'VIEW_PR_LISTING',
     payload: 'result_of_view_action'
    })
   }