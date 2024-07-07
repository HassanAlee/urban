import React from 'react'

const Container = ({ children }) => {
    return (
        <section className='h-screen w-full relative flex flex-col items-center justify-center  '>
            <img src="/images/form-bg.jpg" alt="pair_of_shoes" className='h-full w-full object-cover absolute -z-10' />
            {/* {children} */}
            <div className='bg-white p-4'>
                {children}
            </div>
        </section>
    )
}

export default Container