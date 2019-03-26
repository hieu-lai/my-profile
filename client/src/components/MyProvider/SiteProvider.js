import React, { useReducer, useMemo, useEffect } from 'react'

export const SiteContext = React.createContext()

const reducer = (state, newState) => ({
  ...state,
  ...newState
})

const SiteProvider = ({ children }) => {
  const initState = {
    isDarkMode: false,
    isReady: false
  }

  const [state, setState] = useReducer(reducer, initState)

  const memoValue = useMemo(() => ({
    ...state,
    setState
  }), [state.isDarkMode])

  const test = () => {
    console.log(test)
  }


  useEffect(() => {
    try {
      const json = localStorage.getItem('isDarkMode')
      const isDarkMode = JSON.parse(json)
      if (isDarkMode) {
        setState({ isDarkMode, isReady: true })
      }
    } catch (e) {
      setState({ isReady: true })
      // Do nothing
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(state.isDarkMode)
    localStorage.setItem('isDarkMode', json)
    setState({ isReady: true })
  }, [state.isDarkMode])

  return (
    <SiteContext.Provider value={memoValue}>
      {state.isReady && children}
      {/* {console.log(state)} */}
    </SiteContext.Provider>
  )
}

export default SiteProvider