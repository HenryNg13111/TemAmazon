import './styles.css'
import TemamazonLogo from "./assets/TemamazonLogo.png";

function NavBar() {
    return (
        <>
            <div className='flex p-2.5 bg-[#232F3E] text-white'>
                <a href='/'>
                    <img src={TemamazonLogo} alt="Logo" className='max-h-16  max-w-24'/>
                </a>
                <div className='ml-auto mr-4 content-center'>
                    Search
                </div>
                <div className='mx-4 content-center'>
                    Log In
                </div>
            </div>
            <div className='flex
            '>
                <p className='ml-auto pr-2 pl-6 pb-1 text-white border-[0.5px] bg-blue-800 border-blue-800 rounded-bl-full'>Built with React!</p>
            </div>
        </>
    )
}

export default NavBar