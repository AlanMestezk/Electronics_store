

export const Cart = ()=>{

    return(
        <>
            <main className="w-full max-w-7x1 px-8 mx-auto">

                <h1 className="font-bold text-2xl mb-20 mt-10 text-center my-4">
                    Carrinho de compras
                </h1>

                <section className="flex intems-center justify-between border-b-2 border-gray-300">

                    <img 
                        className="w-28"
                        src="https://m.media-amazon.com/images/I/71w4SgtqaeL._AC_SX679_.jpg" 
                        alt="notbook acer"
                    />

                    <strong className="gap-9">
                        R$ 767,22
                    </strong>

                    <div className="flex items-center justify-center gap-3">
                        <button className="bg-slate-700 px-2 rounded text-teal-50 flex items-center justify-center">
                            -
                        </button>
                        2
                        <button className="bg-slate-700 px-2 rounded text-teal-50 flex items-center justify-center">
                            +
                        </button>

                    </div>

                    <strong>
                        subtotal: R$767,22
                    </strong>


                </section>

                
                <p className="font-bold mt-4">
                    Total: 767, 22
                </p>
            </main>
        </>
    )
}