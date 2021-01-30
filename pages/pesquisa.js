import React from 'react'


const Pesquisa = () => {
  return (
    <div className = 'pt-6'>
      <h1 className = 'text-center font-bold my-4 text-2xl'>De sua Opinião</h1>
      <p className = 'text-center mb-6'>
        O restaurante x sempre busca por atender melhor seus clientes.<br/>
        Por isso, estamos sempre abertos a ouvir sua opnião.
      </p>
      <div className = 'w-1/5 mx-auto'>
        <label className = 'font-bold'>Seu nome:</label>
        <input type = 'text' className = 'p-4 bg-blue-100 block my-2 rounded' />
        <label className = 'font-bold'>E-mail:</label>
        <input type = 'text' className = 'p-4 bg-blue-100 block my-2 rounded' />
        <label className = 'font-bold'>Whatsapp:</label>
        <input type = 'text' className = 'p-4 bg-blue-100 block my-2 rounded' />
        <label className = 'font-bold'>Opinião:</label>
        <input type = 'text' className = 'p-4 bg-blue-100 block my-2 rounded' />

        <input type = 'text' className = 'p-4 bg-blue-100 block my-2 rounded' />
      </div>
      <div className = 'text-center my-12'>
        <a className = 'bg-blue-400 px-8 py-4 font-bold shadow-2xl rounded-lg hover:shadow'>
          Concluir
        </a>
      </div>
      <p className = 'my-12 text-center'>
        Texto dinamico
      </p>
    </div>
  )
}

export default Pesquisa