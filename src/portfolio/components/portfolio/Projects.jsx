import { projectData } from '@/mock/Projects'
import { ProjectsCard } from './ProjectsCard'
import { CustomHeader } from '../shared/CustomHeader'

export const Projects = () => {
    return (
        <section className='flex flex-col gap-2 bg-slate-950/95 py-50' id='projects'>
            <CustomHeader
                title='Portfolio'
                headline='Proyetos Recientes'
                description='Una seleccion de trabajos recientes y significativos. Asi como de side projects para practicar o mejorar habilidades'
            />
            <div className='grid md:grid-cols-3 gap-5 px-10 mt-10'>
                {
                    projectData.map(p =>
                        <ProjectsCard key={p.id} data={p} />
                    )
                }

            </div>
        </section>
    )
}
