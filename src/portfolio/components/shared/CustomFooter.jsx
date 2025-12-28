import { ArrowBigUp } from 'lucide-react'
import React from 'react'

const currentYear = new Date().getFullYear()

export const CustomFooter = () => {
    return (
        <div className='flex p-10 justify-evenly items-center bg-slate-900'>


            <span className='text-slate-400 text-sm font-semibold'>&copy; {currentYear} Todos los derechos reservados a sus respectivos autores. Diseñado y desarrollado por
                <a className='hover:text-teal-300' href='https://github.com/jfher' target='_blank'> Jfher's &trade;</a>
            </span>
            <a href='#hero'><ArrowBigUp className='text-slate-400 hover:text-teal-300 transition-transform duration-300 ease-in-out hover:scale-125' /></a>
        </div>
    )
}
