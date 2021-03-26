import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Main from './main'

function App() {
  const language = navigator.language

  return (
    <>
      <Switch>
        <Route exact path='/'>
          {(language === 'pt-BR') ? <Redirect to='/br'/> : <Redirect to='/en'/>}
        </Route>
        <Route path='/:lang' component={Main}/>
      </Switch>
    </>
  )
}

export default App;
