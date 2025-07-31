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
        </>
    )
}

export default NavBar