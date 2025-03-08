import Navbar from '../components/nav.jsx';
import React from "react";
import Swipers from '../components/swiper.jsx';
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import Marquee from "react-fast-marquee";
const data = [
    { name: "Staking", value: 15, color: "#31356E" }, // Yellow
    { name: "Liquidity", value: 17.5, color: "#6CE5E8" }, // Green
    { name: "Team", value: 7.5, color: "" }, // Blue
    { name: "Ecosystem", value: 7.5, color: "#2D8BBA" }, // Purple
    { name: "Marketing", value: 10, color: "#41B8D5" }, // Pink
    { name: "Early Investors", value: 7.5, color: "#6CE5E8" }, // Pink
    { name: "Free Supply", value: 35, color: "#1ABC9C" }, // Pink
];    
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
function LandingPage () {
    return (
        <>
            <Navbar/>
            <section>
               <div className='flex bg-[#813CAE] justify-center items-center pt-[100px] gap-9 mb-[80px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className='sm:mt-[40px] md:mt-[20px] lg:mt-0 flex flex-col justify-center items-center sm:justify-center md:justify-center lg:justify-center'>
                        <img className='w-[70%] sm:w-[60%] md:w-[60%] lg:w-[70%] ' src="/Images/logo.webp" alt="" />
                        <h2 className='text-[#111827] text-[60px] font-bold mb-[10px] sm:text-[50px] md:text-[50px] lg:text-[60px]'>$Mwor</h2>
                        <p className='text-[#111827] font-bold text-[19px] sm:text-[16px] md:text-[16px] lg:text-[19px]'>Meme World Order On Solana</p>
                        <button className='text-[22px] border-4 border-[#111827] rounded-md font-bold bg-green-500 px-[30px] py-[10px] mt-[33px] mb-[90px] sm:text-[17px] md:text-[17px] lg:text[22px]'><a href="#trade">Trade $MWOR</a></button>
                    </div>
                </div>
            </section>
            <div className="marquee">
                <div className="marquee__inner">
                    <span>BREAKING: MEME WORLD ORDER IS NOW LIVE!</span>
                    <span>BREAKING: MEME WORLD ORDER IS NOW LIVE! </span>
                </div>
            </div> 
            <section id='trade' className='bg-[#111827]'>
                <h2 className='text-center text-white text-[40px] font-bold pb-[20px]'>EASY TRADE</h2>
                <p className='text-center text-white text-[15px] font-bold pb-[20px]'>Easily trade any crypto to $MWOR with Rubic</p>
                    <div className="flex flex-col justify-center items-center w-full h-[70vh] rounded-xl mb-[40px]">
                       <iframe
                            src="https://app.rubic.exchange/?fromChain=SOLANA&toChain=SOLANA&from=SOL&to=MWOR"
                            title="Rubic Exchange Widget"
                                className="rounded-xl w-[90%] h-[80vh] sm:w-[90%] md:w-[90%] lg:w-[50%]"
                            style={{ border: "none", overflow: "hidden" }}
                        />
                    </div>
            </section>
            <section id='about' className='bg-[#813CAE] py-[60px]' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <h2 className='text-[#111827] font-bold flex justify-center items-center sm:text-[35px] md:text-[35px] lg:text-[40px] sm:text-center md:text-center lg:text-center'>LEARN ABOUT MEME WORLD ORDER</h2>
                <div className='grid grid-cols-3 place-items-center mx-[60px] gap-8 sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 sm:mx-[30px] md:mx-[w0px] lg:mx-[60px]'>
                   <div className='border-8 rounded-md bg-[#161e2e] border-[#111827] text-white mt-[40px]'>
                        <div className='flex items-center flex-col justify-center px-[20px] py-[30px]'>
                            <div className='flex justify-center items-center mb-[20px]'>
                                <h2 className='font-bold text-[18px]'>ABOUT MEME WORLD ORDER</h2>
                            </div>
                            <p className='text-center'>Meme World Order ($MWOR) is a memedriven cryptocurrency on the Solana
                                Network, created to deliver a fun,
                                community-focused, and potentially
                                rewarding crypto experience. Whether
                                you’re a seasoned enthusiast or a
                                newcomer, $MWOR invites you to join a
                                collective journey that blends humor
                                with blockchain innovation.
                            </p>
                        </div>
                    </div>
                    <div className='border-8 rounded-md bg-[#161e2e] border-[#111827] text-white pb-[30px]'>
                        <div className='flex items-center flex-col justify-center px-[20px] py-[20px]'>
                            <div className='flex justify-center items-center my-[20px]'>
                                <h2 className='font-bold text-[18px]'>ROBUST INTEGRATION</h2>
                            </div>
                            <p className='text-center'>
                                $MWOR has established
                                integrations with top dex, wallets,
                                and services in the crypto space,
                                ensuring seamless accessibility and
                                utility for users
                            </p>
                        </div>
                    </div>
                    <div className='border-8 rounded-md bg-[#161e2e] border-[#111827] text-white mt-[5px] w-full px-[40px] sm:px-[20px] md:px-[20px] lg:px-[40px]'>
                        <div className='flex items-center flex-col justify-center px-[14px] py-[20px]'>
                            <div className='flex justify-center flex-col items-center mb-[20px]'>
                                <h2 className='font-bold text-[18px] mb-[30px]'>$MWOR HIGHLIGHTS</h2>
                                <ul className='mb-[20px] text-center'>
                                    <li>LP Locked & Burned</li>
                                    <li>Tax 0% buy & sell</li>
                                    <li> ATH $191k</li>
                                    <li>100m burned with daily of 250k</li>
                                </ul>
                                <h2 className='font-bold text-[18px] mb-[20px] text-center'>$MWOR FACTS</h2>
                                <ul className='text-center'>
                                    <li>Token utility for daily jackpots</li>
                                    <li>25 % Buyback + Burn</li>
                                    <li>75 % Jackpot giveaways</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <section id='roadmap'className='mt-[70px] mb-[30px]'>
                <h2 className='text-white font-bold text-green text-center mt-[20px] sm:text-[35px] md:text-[35px] lg:text-[40px]'>Roadmap</h2>
                <Swipers/>
            </section>
            <section id='tokenomics' className='bg-[#813CAE] flex justify-center items-center flex-col pb-[50px]'>
                    <h2 className='mb-[20px] text-center mt-[100px] mb-[30px] text-[#111827] font-bold text-[40px] pt-[20px]'>Tokenomics</h2>
                    <p className='text-white font-bold w-[40%] text-center text-[18px] mb-[20px] sm:w-[80%] md:w-[80%] lg:w-[40%]'>MEME WORLD ORDER made One Billion tokens, burnt over 100m and leaving about 900m in circulation.</p>
                <div className=""> 
                    <PieChart width={330} height={330}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={110}
                            dataKey="value"
                            label
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
                <p className='text-[#813CAE] bg-[#111827] rounded-sm px-[10px] py-[20px] mt-[50px] text-[18px] text-center w-[77%]'>TOTAL SUPPLY <br></br> 1,000,000,000 $MWOR</p>
                <p className='text-[#813CAE] bg-[#111827] rounded-sm px-[10px] py-[20px] mt-[20px] text-[18px] text-center mx-[50px]'>TOKEN ADDRESS <br></br> EoRe4xECTe9imaYtwfdmrGoinD2S1 N5yMeu1LrjQpump</p>
            </section>
            <section id="buy" className='px-[50px] pb-[40px]'>
                <h2 className='text-[#813CAE] mb-[20px] text-center mt-[120px] text-[40px] font-bold sm:text-[35px] md:text-[35px] lg:text-[40px]'>HOW TO BUY</h2>
                <p className='text-[19px] text-center text-white font-bold'>Follow these easy steps to become part of the $MWOR holders</p>
                <div className='flex items-center justify-center mt-[50px] sm:block md:block lg:flex'>
                    <div className='flex justify-center items-center flex-col mr-[40px] w-[130%] sm:w-[97%] md:w-[97%] lg:w-[130%]'>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='bg-[#080D23] rounded-md px-[30px] py-[30px]'>
                                <h2 className='text-white text-[20px] font-bold mb-[20px]'><span className='text-[#813CAE] font-bold text-[20px]'>1.</span> CREATE A WALLET WITH PHANTOM</h2>
                                <p className='text-white'>Visit <span className='text-red-800'><a href="phantom.app" target="_blank" rel="noopener noreferrer">Phantom.app</a></span> and follow the simple steps to create a new account with the Phantom app or browser extension.</p>
                            </div>
                            <div className='bg-[#080D23] rounded-md px-[20px] py-[20px]'>
                                <h2 className='text-white font-bold mb-[20px] text-[20px]'><span className='text-[#813CAE] font-bold text-[20px]'>2.</span> GET SOME $SOL</h2>
                                <p className='text-white'>Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom wallet from the crypto exchange of your choice.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='bg-[#080D23] rounded-md px-[20px] py-[20px] mt-[10px]'>
                                <h2 className='text-white text-[20px] font-bold mb-[20px]'><span className='text-[#813CAE] font-bold text-[20px]'>3.</span> SWAP $SOL FOR $MWOR</h2>
                                <p className='text-white'>Tap the SWAP icon in your Phantom wallet and paste the $MWOR token address. Swap your $SOL for $MWOR.</p>
                            </div>
                            <div className='bg-[#080D23] rounded-md px-[20px] py-[20px] mt-[10px]'>
                                <h2 className='text-white font-bold mb-[20px] text-[20px]'>4. You are now a $MWOR holder!</h2>
                                <p className='text-white'>Welcome to the #MWOR Community.</p>
                            </div>
                        </div>
                        <button className='border bg-white text-[#111827] px-[20px] py-[6px] rounded-sm my-[53px] font-bold animate-bounce'><a href="https://jup.ag/swap/SOL-EoRe4xECTe9imaYtwfdmrGoinD2S1N5yMeu1LrjQpump" target="_blank" rel="noopener noreferrer">Buy $MWOR here</a></button>
                    </div>
                    <div className='rounded-lg sm:mt-[30px] md:mt-[30px] lg:mt-0'>
                        <img className='' src="/Images/hero.png" alt="" />
                    </div>
                </div>
            </section>
            <section id="nft" className='bg-[#813CAE] flex justify-center  text-white items-center flex-col pb-[50px]' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <h2 className='text-[#111827] font-bold text-[40px] text-center mt-[50px] mb-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px]'>NFT LAUNCH</h2>
                <p className='mb-[20px] w-[40%] font-bold text-center sm:w-[80%] md:w-[80%] lg:w-[40%]'><span className='text-[20px] text-white'>NFT Release April 10th priceeds</span><br></br>
                    50 % Jackpot giveaways 25 % Treasury 25 % NFT buyback and burn
                </p>
                <Marquee speed={2500}>
                    <img className='w-[20%]' src="/Images/n0.png" alt="" />
                    <img className='w-[20%]' src="/Images/n1.png" alt="" />
                    <img className='w-[20%]' src="/Images/n2.png" alt="" />
                    <img className='w-[20%]' src="/Images/n3.png" alt="" />
                    <img className='w-[20%]' src="/Images/n4.png" alt="" />
                    <img className='w-[20%]' src="/Images/n5.png" alt="" />
                    <img className='w-[20%]'  src="/Images/n6.png" alt="" />
                    <img className='w-[20%]' src="/Images/n7.png" alt="" />
                    <img className='w-[20%]' src="/Images/n8.png" alt="" />
                    <img className='w-[20%]' src="/Images/n9.png" alt="" />
                </Marquee>
                <div className='flex justify-center mt-[50px]'>
                    <div className='flex items-center mx-[50px] w-[50%] flex-col bg-[#080D23] border-8 border-black text-white px-[10px] py-[20px]  sm:mx-[10px] sm:w-[80%] md:w-[80%] lg:w-[50%]'>
                        <h2><span className='ext-[#813CAE] font-bold text-[20px] font-bold'>WHY INVEST IN $MWOR</span> </h2>
                        <div className='flex items-center justify-center mt-[10px]'>
                            <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-white before:text-[18px] mt-[20px]">Community-Driven: From meme contests to AMAs, we’re building a movement, not just a token.</p>
                        </div>
                        <div className='flex items-center justify-center mt-[10px]'>
                            <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-white before:text-[18px] mt-[20px]">Staking Rewards: High APYs and exclusive perks make holding $MWOR irresistible.</p>
                        </div>
                        <div className='flex items-center justify-center mt-[10px]'>
                            <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-white before:text-[18px] mt-[20px]">NFT Value: A unique NFT collection adds a collectible layer with tangible benefits for holders.</p>
                        </div>
                        <div className='flex items-center justify-center mt-[10px]'>
                            <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-white before:text-[18px] mt-[20px]"> Deflationary Edge: Our Buyback & Burn strategy ensures $MWOR becomes scarcer and more valuable over time.</p>
                        </div>
                        <div className='flex items-center justify-center mt-[10px]'>
                            <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-white before:text-[18px] mt-[20px]">Real Utility: From NFTs to merch to ecosystem services, $MWOR is more than a meme it’s a lifestyle.</p>
                        </div>
                        <div className='flex items-center justify-center mt-[10px]'>
                            <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-white before:text-[18px] mt-[20px]">Join us as we launch, promote, and scale $MWOR into a deflationary powerhouse with a killer NFT twist. The meme revolution starts here get in early!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team" className='bg-[#111827] flex justify-center items-center flex-col pb-[50px]' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <h2 className='text-[#813CAE] font-bold text-[40px] text-center mt-[50px] mb-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px]'>Team</h2>
                <div className='grid grid-cols-3 gap-8 place-items-center px-[20px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:px-[40px] md:px-[60px] lg:px-[20px]'>
                    <div className='bg-[#080D23] px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px] sm:mr-0 md:mr-0 lg:mr-[30px]'>
                        <img className='w-[30%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/founder.png" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>Dev</h2>
                        <p className='text-[#94a3b8] mb-[20px]'>Founder</p>
                        <div>
                            <a className='flex justify-center items-center mb-[20px]' href="https://t.me/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[11%] object-contain rounded-md border-2 border-white' src="/Images/s1.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className='bg-[#080D23] px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px] sm:mr-0 md:mr-0 lg:mr-[30px]'>
                        <img className='w-[30%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/team1.jpg" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>Glayzz_4T9ne</h2>
                        <p className='text-[#94a3b8] mb-[20px] w-[70%] text-center'>Community Manager  Graphic Designer</p>
                        <div className='grid grid-cols-2 place-items-center space-x-4'>
                            <a className='mb-[20px] flex justify-end' href="https://t.me/@Glayzz_4T9ne_XD" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain rounded-md border-2 border-white' src="/Images/s1.jpg" alt="" /></a>
                            <a className='mb-[20px]' href="https://x.com/glayzz_4t9ne_bk?s=21" target="_blank" rel="noopener noreferrer"><img className='w-[22%] object-contain rounded-md border-2 border-white' src="/Images/s3.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className='bg-[#080D23] px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px] sm:mr-0 md:mr-0 lg:mr-[30px]'>
                        <img className='w-[30%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/social.jpg" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>P Dave</h2>
                        <p className='text-[#94a3b8] mb-[20px]'>Social Media Manager</p>
                        <div className='grid grid-cols-2 place-items-center space-x-4'>
                            <a className='mb-[20px] flex justify-end' href="https://t.me/@JaceD23" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain rounded-md border-2 border-white' src="/Images/s1.jpg" alt="" /></a>
                            <a className='mb-[20px]' href="https://x.com/JaydenDavid23?t=tIfLF80pmxonn74smYRinw&s=09" target="_blank" rel="noopener noreferrer"><img className='w-[22%] object-contain rounded-md border-2 border-white' src="/Images/s3.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#813CAE] py-[40px]'>
                <h2 className='mb-[20px] text-center mt-[80px] text-white font-bold text-[40px] sm:text-[35px] md:text-[35px] lg:text-[40px]'>FAQS</h2>
                <div className='px-[50px]'>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-[#080D23] px-[40px] py-[20px] rounded-md sm:text-[18px] md:text-[18px] lg:text-[20px]'>
                                    What is $MWOR?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-white text-[18px] sm:text-[16px] md:text-[16px] lg:text-[18px]'>
                                    $MWOR is a meme-centric digital asset on Solana, aiming to blend fun and profitability by fostering a spirited community and offering intuitive staking mechanisms.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-[#080D23] px-[40px] py-[20px] rounded-md sm:text-[18px] md:text-[18px] lg:text-[20px]'>
                                    Where can I buy $MWOR?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-white text-[18px] sm:text-[16px] md:text-[16px] lg:text-[18px]'>
                                    You can purchase $MWOR through the fair launch process on pump.fun. Eventually, $MWOR may appear on various decentralized and centralized exchanges, offering extra ways to trade or acquire more tokens.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-[#080D23] px-[40px] py-[20px] rounded-md sm:text-[18px] md:text-[18px] lg:text-[20px]'>
                                    Is $MWOR secure?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-white text-[18px] sm:text-[16px] md:text-[16px] lg:text-[18px]'>
                                    Absolutely. We prioritize security with advanced encryption, frequent audits, and best-practice compliance to protect holders and the overall ecosystem.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-[#080D23] px-[40px] py-[20px] rounded-md sm:text-[17px] md:text-[17px] lg:text-[20px]'>
                                    How can I contact the $MWOR team?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-white text-[18px]  sm:text-[16px] md:text-[16px] lg:text-[18px]'>
                                    Connect with us on our official social channels—Twitter, Discord, and Telegram. Our support team is ready to assist with any questions or feedback you may have.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            <section className='mx-[40px]'>
                <div className='grid grid-cols-2 gap-4 place-items-center mt-[20px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-gray-900 px-[20px] rounded-md'>
                        <h2 className='mb-[10px] text-white text-[20px] mt-[20px] font-bold text-center'>Maintaining Order For Memes On Solana</h2>
                        <p className='text-[15px] my-[15px] font-bold text-white text-center'>Perfect order, Real value and Utility, Market takeover</p>
                        <div className='flex justify-center items-center pb-[35px] pt-[30px] sm:pl-[40px] md:pl-[40px] lg:pl-[70px]  rounded-md'>
                            <div className=''>
                                <a href="https://t.me/memeworldorderchat" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer rounded-md sm:w-[50%] md:w-[50%] lg:w-[29%] mb-[20px] border-2 border-white' src="/Images/s1.jpg" alt="" /></a>
                                <a href="http://medium.com/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain cursor-pointer sm:w-[50%] md:w-[50%] lg:w-[29%] rounded-md border-2 border-white' src="/Images/s6.jpg" alt="" /></a>
                            </div>
                            <div>
                                <a href="https://www.reddit.com/u/mworder2024/s/eJTNkOVjg7" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer rounded-md mb-[20px] sm:w-[50%] md:w-[50%] lg:w-[29%] border-2 border-white' src="/Images/s8.jpg" alt="" /></a>
                                <a href="f" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain cursor-pointer sm:w-[50%] md:w-[50%] lg:w-[29%] mr-[120px] ml-[25px] rounded-md sm:ml-0 md:ml-0 lg:ml-25 sm:mr-[20px] md:mr-[20px] lg:mr-[20px] border-2 border-white' src="/Images/s2.jpg" alt="" /></a>
                            </div>
                            <div>
                                <a href="https://twitter.com/mworder2024" target="_blank" rel="noopener noreferrer"><img className='w-[40%] object-contain cursor-pointer rounded-md mr-[80px] sm:mr-[20px] md:mr-[20px] lg:mr-[20px] sm:w-[50%] mb-[20px] md:w-[50%] lg:w-[29%] border-2 border-white' src="/Images/s3.jpg" alt="" /></a>
                                <a href="t" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain cursor-pointer sm:w-[50%] md:w-[50%] lg:w-[29%] rounded-md sm:ml-[0px] md:ml-[0px] lg:ml-[0px] border-2 border-white' src="/Images/s7.jpg" alt="" /></a>
                            </div>
                            <div>
                                <a href="https://discord.com/invite/H7eCbTZKHu" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer rounded-md sm:w-[50%] md:w-[50%] lg:w-[29%] mb-[20px] border-2 border-white' src="/Images/s5.jpg" alt="" /></a>
                                <a href="i" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain cursor-pointer sm:w-[50%] md:w-[50%] lg:w-[29%] rounded-md mr-[150px] sm:mr-[20px] md:mr-[20px] lg:ml-[0px] border-2 border-white' src="/Images/s4.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex judtify-center items-center'>
                        <img className='w-[70%] sm:w-full md:w-full lg:w-[70%] border-8 border-black' src="/Images/buy.jpg" alt="" />
                    </div>
                </div>
            </section>
            <div className='flex justify-center items-center bg-gray-800 py-[15px] text-white mt-[20px]'>
                <p className=''>© 2025 Meme World Order. All rights reserved.</p>
            </div>
        </>
    )
}
export default LandingPage