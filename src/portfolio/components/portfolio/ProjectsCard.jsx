import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import { ArrowUpRight, Github } from 'lucide-react'
import { useState } from 'react';

export const ProjectsCard = ({ data }) => {
    const { imgUrl, webUrl, repository, title, description, stack } = data;
    const [showButtons, setShowButtons] = useState(false)

    return (
        <Card className='group pt-0 flex flex-col bg-slate-900 border-slate-400/30 hover:border-teal-300'
            onMouseOver={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <CardHeader className="relative inline-block p-0 rounded-t-xl">
                <img
                    className={cn('block w-full h-50 object-cover rounded-t-xl transition-transform duration-340 ease-in-out group-hover:scale-105', showButtons ? 'opacity-50' : 'opacity-100')}
                    src={imgUrl || "https://placehold.co/600x300"}
                />
                {showButtons && <div className="absolute inset-0 flex items-center justify-center gap-4">
                    <a href={webUrl} target='_blank' className='bg-teal-300 p-5 rounded-full cursor-pointer hover:transform hover:scale-105 w-10 h-10 grid place-content-center'>
                        <ArrowUpRight className='text-slate-900' />
                    </a>
                    <a href={repository} target='_blank' className='bg-slate-800 p-5 rounded-full cursor-pointer hover:transform hover:scale-110 w-10 h-10 grid place-content-center'>
                        <Github className='text-white' />
                    </a>
                </div>}
            </CardHeader>
            <CardContent className='flex flex-col flex-1'>
                <h2 className='text-xl font-semibold text-white'>{title}</h2>
                <p className='text-slate-400 line-clamp-1'>{description}</p>
            </CardContent>
            <CardFooter>
                <div className='flex flex-wrap gap-1'>
                    {
                        stack.map(s =>
                            <Badge className='bg-slate-800 text-slate-400 text-sm' key={s}>{s}</Badge>
                        )
                    }
                </div>
            </CardFooter>
        </Card>
    )
}
