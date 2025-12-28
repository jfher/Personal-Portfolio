import { Card, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import React, { useState } from 'react'

export const StackItem = ({ data }) => {
    const { name, url, icon: Icon, subStack } = data;
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <Popover open={showMore} onOpenChange={setShowMore}>
                <PopoverTrigger asChild>
                    <Card className="flex flex-col cursor-pointer transition-transform duration-340 ease-in-out hover:scale-110">
                        <CardContent>
                            {url && <img src={url} alt={name} />}
                        </CardContent>
                    </Card>
                </PopoverTrigger>
                {

                    subStack.length !== 0 &&
                    <PopoverContent className="w-fit flex flex-col md:flex-row gap-2 bg-slate-800 border-teal-400">
                        {
                            subStack.length !== 0 &&
                            subStack.map(s =>
                                <Card className="flex items-center justify-center w-20 md:w-fit">
                                    <CardContent>
                                        <img src={s.url} alt={s.name} className='md:w-15 w-10' />
                                    </CardContent>
                                </Card>
                            )
                        }
                    </PopoverContent>
                }
            </Popover>


        </>
    )
}
