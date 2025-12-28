
import { importantData } from '@/mock/ImportantLinks'
import { ImportantCard } from './ImportantCard'
import { CustomHeader } from '../shared/CustomHeader'

export const ImportantLinks = () => {
    return (
        <section className='flex flex-col justify-center gap-5 items-center py-50 px-5 bg-slate-950' id='contact'>
            <CustomHeader
                title='Contacto'
                headline='Enlaces Importantes'
                description='Multiples formas de contactar conmigo y explorar algunos trabajos'
            />

            <div className='grid md:grid-cols-3 mx-10 gap-5 my-20'>
                {
                    importantData.map(i =>
                        <ImportantCard key={i.id} data={i} />
                    )
                }
            </div>
        </section>
    )
}
