import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
function NavBar () {
    const { address, isConnecting} = useAccount();
    // const [nav, setNav] = useState(false);

    // const showNav = ()  => {
    //    setNav(!nav)
    // }
    useEffect(() => {
        if (address && !isConnecting) {
            window.open('https://wallet.keplr.app/', '_blank');
        }
      }, [address, isConnecting, history]);
    return (
        <>
            <div className="fixed w-full z-[1000] bg-[#813CAE] p-[5px] py-2 shadow-md">
                <nav className="flex justify-between items-center my-[10px] mx-10 h-10 pb-13 sm:mx-2 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-full md:w-full lg:w-[20%]">
                        <div className="flex justify-start items-center self-center">
                            <img className='w-[30%] sm:w-[25%] md:w-[20%] lg:w-[30%]' src="/Images/logo.png" alt="" />
                            <a className="text-[20px] text-[#111827] font-bold sm:text-[22px] md:text-[22px] lg:text-[27px]" href="/">MWOR</a>
                        </div>
                        {/* <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div> */}
                    </div>
                    <ul className="flex justify-center items-center ml-[80px] text-white sm:w-[90%] md:w-[90%] lg:w-[20%]">
                        <li className='border-2 rounded-sm bg-[#111827] px-[30px] py-[10px] sm:px-[15px] md:px-[15px] lg:px-[30px] sm:text-[14px] md:text-[14px] lg:text-[16px]'>White paper </li>
                    </ul>
                    {/* <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-gray-800 text-white shadow-md ease-in-out duration-500 sm:w-[60%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className='border-2 rounded-sm bg-[#111827] text-white px-[30px] py-[10px]'>White paper </li>
                        </ul>
                    </div> */}
                </nav>
            </div>
        </>
    )
}
export default NavBar