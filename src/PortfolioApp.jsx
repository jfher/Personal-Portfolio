import React from 'react'
import { Hero } from './portfolio/components/hero/Hero'
import { StackTech } from './portfolio/components/stack/StackTech'
import { Experience } from './portfolio/components/experience/Experience'
import { Projects } from './portfolio/components/portfolio/Projects'
import { ImportantLinks } from './portfolio/components/contact/ImportantLinks'
import { CustomFooter } from './portfolio/components/shared/CustomFooter'

export const PortfolioApp = () => {
    return (
        <div className='select-none'>
            <Hero />
            <StackTech />
            <Experience />
            <Projects />
            <ImportantLinks />
            <CustomFooter />
        </div>
    )
}
