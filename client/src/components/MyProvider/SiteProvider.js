import React, { useReducer, useMemo } from 'react'

export const SiteContext = React.createContext()

const reducer = (state, newState) => ({
  ...state,
  ...newState
})

const SiteProvider = ({ children }) => {
  const initState = {
    isDarkMode: false
  }

  const [state, setState] = useReducer(reducer, initState)

  const memoValue = useMemo(() => ({
    ...state,
    setState
  }), [state.isDarkMode])

  return (
    <SiteContext.Provider value={memoValue}>
      {children}
      {console.log(state)}
    </SiteContext.Provider>
  )
}

export default SiteProvider