import { Card } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react';

export const ImportantCard = ({ data }) => {
    const { icon: Icon, title, subtitle, url } = data;
    return (
        <Card className='group flex flex-row items-center p-4 bg-slate-950/60 border-slate-400/20 hover:border-teal-300 cursor-pointer transition-transform duration-340 ease-in-out hover:scale-110'>
            <div className='bg-slate-800 p-2 rounded-xl'>
                <Icon className='text-slate-400' />
            </div>
            <div className='flex-1' >
                <h2 className='text-white font-semibold text-lg group-hover:text-teal-300'>{title}</h2>
                <p className='line-clamp-1 text-slate-400'>{subtitle}</p>
            </div>
            <a href={url} target='_blank'>
                <ArrowUpRight className='text-slate-400 group-hover:text-teal-300' />
            </a>
        </Card>
    )
}
