const createReducer = (initialState, handleActions) => {
  return (state = initialState, action) => {
    return handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      : state
  }
}

export default createReducer
