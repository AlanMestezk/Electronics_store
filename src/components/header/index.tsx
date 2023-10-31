import {Link}           from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'


export const Header = ()=>{

    return(

        <header
        className='w-full px-1 bg-slate-300'>
            
            <nav className='w-full max-w-7xl h-20 flex items-center justify-between px-20 mx-auto'>

                <Link className='font-bold text-2xl ' to='/'>
                    Glock 90
                </Link>

                <Link className='relative' to='/cart'>
                    <BsFillCartFill/>
                    <span className='absolute -top-3.5 -right-1 px-2 bg-sky-500 rounded-full w-1 h-4 flex items-center justify-center text-white text-xs'>
                        2
                    </span>
                </Link>

            </nav>

        </header>
    )
}