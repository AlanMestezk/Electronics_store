import { BsCartPlusFill} from 'react-icons/bs'

export const Home =()=>{

    return(
        <>
            <main className="w-full max-w-7xl px-4 mx-auto">

                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                    Produtos em alta
                </h1>

                <div className='grid grid-cols gap-6 md:grid-cols-2 lg:grid-cols-5'>

                    <section className="w-full">

                        <img 
                            className='w-full max-h-70'
                            src="https://m.media-amazon.com/images/I/71w4SgtqaeL._AC_SX679_.jpg" 
                            alt="computador acer" 
                        />

                        <strong className='font-medium'>
                            Notebook Acer Predator Helios
                        </strong>

                        <div className='flex gap-2 items-center'>
                            <strong className='text-zinc-700/90'>
                                R$ 767,22
                            </strong>

                            <button className='bg-zinc-900 p-1 rounded-3xl items-center'>
                                <BsCartPlusFill size={18} color='aliceblue'/>
                            </button>
                        </div>

                    </section>

                </div>

            </main>
        </>
    )
}