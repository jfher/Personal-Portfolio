import { expData } from '@/mock/Experience'
import { ExperienceCard } from './ExperienceCard'
import { CustomHeader } from '../shared/CustomHeader'

export const Experience = () => {
    return (
        <section className='flex flex-col items-center gap-2 bg-slate-950 py-50'>
            <CustomHeader title='trayectoria' headline='Experiencia Profesional' description='Experiencia en empresas del medio en proyectos ded vanguardia con tecnologias de investigacion y soporte' />
            <div className='grid md:grid-cols-3 p-10 gap-5'>
                {
                    expData.map(exp =>
                        <ExperienceCard key={exp.id} data={exp} />
                    )
                }
            </div>
        </section>
    )
}
