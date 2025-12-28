import { stackData } from '@/mock/Stacks'
import { StackItem } from './StackItem'
import { CustomHeader } from '../shared/CustomHeader'

export const StackTech = () => {
    return (
        <section className='flex flex-col gap-2 px-2 bg-slate-950/95 py-50' id='stack'>
            <CustomHeader title='stack tecnológico' headline='Tecnologias & Herramientas' description='Estas son algunas de las tecnologias modernas que empleo frecuentemente para crear soluciones escalables y eficientes' />
            <div className='grid grid-cols-2 md:grid-cols-8 gap-5 p-5'>
                {
                    stackData.map(s => <StackItem key={s.id} data={s} />)
                }
            </div>
        </section>
    )
}
