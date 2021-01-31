import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div className = 'pt-6'> 
      <PageTitle title='Contato' />
      <h1 className = 'text-center font-bold my-4 text-2xl'>Contato</h1>
      <p className = 'text-center mb-6'> 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
        sed do eiusmod tempor incididunt ut labore et dolore magna <br/> 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
        Duis aute irure dolor in reprehenderit in voluptate velit <br/>
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br/>
        occaecat cupidatat non proident, sunt in culpa qui officia <br/>
        deserunt mollit anim id est laborum."
      </p>
    </div>
  )
}

export default Contato