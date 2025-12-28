import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const ExperienceCard = ({ data }) => {
    const { icon: Icon, position, company, description, startDate, endDate, stack } = data;
    return (
        <Card className='flex justify-center col-span-2 md:even:col-start-2 md:even:col-end-4 hover:border-teal-300 bg-slate-900 border-slate-400/20'>
            <CardHeader className='flex items-center'>
                <div className='bg-teal-500/30 p-2 rounded-xl'>
                    <Icon className='w-5 h-5 text-teal-300 ' />
                </div>
                <span className='font-semibold text-xl text-teal-300' >{startDate}-{endDate}</span>
            </CardHeader>

            <CardContent className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold text-white'>{position}</h2>
                    <p className='text-lg text-slate-400'>{company}</p>
                </div>
                <p className='text-slate-300'>{description}</p>
            </CardContent>

            <CardFooter className='flex gap-2 flex-wrap'>
                {
                    stack.map(s =>
                        <Badge className='bg-teal-800' key={s}>{s}</Badge>
                    )
                }
            </CardFooter>
        </Card >
    )
}
