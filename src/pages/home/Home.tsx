import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <>
         <div className="bg-white flex flex-col justify-center items-center">
                <div className='container grid grid-cols-2 text-gray-800 p-16'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>RéuriPoti</h2>
                        <p className='text-xl'>Potterzinho</p>
                    </div>

                    <div className="flex justify-center">
                        <img src='src/assets/imagens/harry.jpg' alt="" className='object-fill' />

                    </div>
                </div>
                
                <div className='container grid grid-cols-2  text-gray-800 p-16'>
                <div className="flex justify-center">
                        <img src='src/assets/imagens/harry4.jpg' alt="" className='object-contain' />

                    </div>

                    <div className="flex flex-col gap-4 items-center justify-center">
                        <h2 className='text-5xl font-bold'>Expecto Patronum</h2>
                        <p className='text-xl'>Pode vir Voldemort</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home