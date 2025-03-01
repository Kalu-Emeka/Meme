import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
function NavBar () {
    const { address, isConnecting} = useAccount();
    const [nav, setNav] = useState(false);

    const showNav = ()  => {
       setNav(!nav)
    }
    useEffect(() => {
        if (address && !isConnecting) {
            window.open('https://wallet.keplr.app/', '_blank');
        }
      }, [address, isConnecting, history]);
    return (
        <>
            <div className="fixed w-full z-[1000] bg-[#1E1E1E] p-[5px] py-2 shadow-md">
                <nav className="flex justify-between items-center my-[10px] mx-10 h-10 pb-13 sm:mx-2 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-full md:w-full lg:w-[20%]">
                        <div className="flex justify-start self-center">
                            <a className="text-[20px] text-white font-bold sm:text-[20px] md:text-[22px] lg:text-[20px]" href="/">Meme World Order</a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="uls flex justify-center items-center space-x-5 text-white sm:hidden md:hidden lg:flex">
                        <li className='cursor-pointer hover:text-blue-400'><a href="#about">About</a></li>
                        <li className='cursor-pointer hover:text-blue-400'><a href="#roadmap">Roadmap</a></li>
                        <li className='cursor-pointer hover:text-blue-400'><a href="#tokenomics">Tokenomics</a></li>
                        <li className='cursor-pointer hover:text-blue-400'><a href="#team">Team</a></li>
                        <li className='cursor-pointer hover:text-blue-400'><a href="https://app.streamflow.finance/staking/solana/mainnet/FwLFpr4p51edqsNzKHhTdpUGUm5dqQ3avzSpznRyfCJC" target="_blank" rel="noopener noreferrer">Staking</a></li>
                        <button><w3m-button /></button>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-gray-800 text-white shadow-md ease-in-out duration-500 sm:w-[60%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="text-md"><a className='hover:text-[#E46924] font-medium' onClick={showNav} href="#about">About</a></li>
                            <li className="text-md"><a className='hover:text-[#E46924] font-medium' onClick={showNav} href="#roadmap">Roadmap</a></li>
                            <li className='cursor-pointer hover:text-blue-400'><a className='hover:text-[#E46924] font-medium' onClick={showNav}  href="#tokenomics">Tokenomics</a></li>
                            <li className='cursor-pointer hover:text-blue-400'><a className='hover:text-[#E46924] font-medium' onClick={showNav} href="#team">Team</a></li>
                            <li className='cursor-pointer hover:text-blue-400'><a className='hover:text-[#E46924] font-medium' onClick={showNav} href="https://app.streamflow.finance/staking/solana/mainnet/FwLFpr4p51edqsNzKHhTdpUGUm5dqQ3avzSpznRyfCJC" target="_blank" rel="noopener noreferrer">Staking</a></li>
                            <button><w3m-button /></button>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar