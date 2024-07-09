import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="bg-[#3e92cc] text-[#00171f] py-3 px-8 flex w-screen justify-between overflow-x-hidden sticky-top">
            <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Farmacia RéuriPoti</div>

                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar categoria</Link>
                    </div>
                </div>
        </div>
    )
}

export default NavBar