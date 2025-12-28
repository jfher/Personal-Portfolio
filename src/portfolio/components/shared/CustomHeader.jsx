export const CustomHeader = ({ title, headline, description }) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className='md:text-xl text-center bg-linear-to-r from-blue-400 via-teal-400 to-green-500 bg-clip-text text-transparent'>{title.toUpperCase()}</h2>
            <h1 className='text-2xl md:text-6xl text-center font-extrabold text-white'>{headline}</h1>
            <p className='text-center text-slate-400'>{description}</p>
        </div>
    )
}
