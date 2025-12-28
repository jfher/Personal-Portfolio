import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDown, Dot, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import 'animate.css';

export const Hero = () => {
    return (
        <section className='flex flex-col justify-evenly items-center h-screen px-5 bg-slate-950' id='hero'>
            <Badge className='bg-slate-800/70'>
                <span className='flex items-center justify-evenly p-1 text-slate-100 font-semibold md:text-lg'> <Dot className='w-8 h-8 md:w-10 md:h-10 text-green-400 animate__animated animate__pulse animate__repeat-3 animate__slow' /> Disponible para proyectos</span>
            </Badge>

            <h1 className='text-5xl md:text-8xl text-center leading-tight font-bold text-white'>Hola, soy
                <span className='font-bold bg-linear-to-r from-blue-800 via-teal-400 to-green-500 bg-clip-text text-transparent animate__animated animate__pulse'> Luis Fernando Aruquipa Gamarra</span>
            </h1>
            <p className='text-lg md:text-4xl text-center text-slate-400 font-semibold'>Desarrollador Full Stack creando soluciones para un impacto social</p>

            <div className='flex flex-wrap justify-between gap-5'>
                <a href="#projects" className='cursor-pointer'><Button className='bg-linear-to-r from-blue-800 via-teal-400 to-green-500  text-xl w-3xs py-6 text-slate-800 font-bold cursor-pointer hover:bg-linear-0'>Ver Proyectos</Button></a>
                <a href="#contact"><Button className='w-3xs py-6 text-teal-300 font-bold text-xl border border-teal-300 cursor-pointer' variant='ghost' size='lg'>Contactame</Button></a>
            </div>

            <div className='flex gap-5 mb-20'>
                <a href='https://github.com/jfher' target='_blank'
                    className='group grid place-items-center rounded-full bg-slate-800 p-2 cursor-pointer border border-transparent hover:border-teal-300 w-15 h-15 transition-transform duration-340 ease-in-out hover:scale-120'>
                    <Github className='text-slate-300 group-hover:text-teal-300' />
                </a>
                <a href='https://www.linkedin.com/in/luis-fernando-aruquipa-gamarra-983108141/' target='_blank'
                    className='group grid place-items-center rounded-full bg-slate-800 p-2 cursor-pointer border border-transparent hover:border-teal-300 w-15 h-15 transition-transform duration-340 ease-in-out hover:scale-120'>
                    <Linkedin className='text-slate-300 group-hover:text-teal-300' />
                </a>
                <a href='mailto:nando.ar.147@gmail.com'
                    className='group grid place-items-center rounded-full bg-slate-800 p-2 cursor-pointer border border-transparent hover:border-teal-300 w-15 h-15 transition-transform duration-340 ease-in-out hover:scale-120'>
                    <Mail className='text-slate-300 group-hover:text-teal-300' />
                </a>
            </div>

            <div className='absolute bottom-5 flex flex-col justify-center items-center mx-auto text-white'>
                <a href='#stack' className='text-lg md:text-2xl animate__animated animate__bounce animate__repeat-2 animate__slow text-slate-400'>SCROLL</a>
                <ArrowDown className='animate__animated animate__bounce animate__repeat-2 animate__slow text-slate-400' />
            </div>
        </section>
    )
}
