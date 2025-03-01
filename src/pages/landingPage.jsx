import Navbar from '../components/nav.jsx';
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
const data = [
    { name: "Staking", value: 15, color: "#FFD700" }, // Yellow
    { name: "Liquidity", value: 17.5, color: "#2ECC71" }, // Green
    { name: "Team", value: 7.5, color: "#3498DB" }, // Blue
    { name: "Ecosystem", value: 7.5, color: "#8E44AD" }, // Purple
    { name: "Marketing", value: 10, color: "" }, // Pink
    { name: "Early Investors", value: 7.5, color: "#A52A2A" }, // Pink
    { name: "Free Supply", value: 7.5, color: "#1ABC9C" }, // Pink
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
            <div className="marquee">
                <div className="marquee__inner">
                    <span>BREAKING: MEME WORLD ORDER IS NOW LIVE!</span>
                    <span>BREAKING: MEME WORLD ORDER IS NOW LIVE! </span>
                </div>
            </div>
            <section>
                <div className='grid grid-cols-3 pt-[120px] mx-[20px] gap-9 mb-[70px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div>
                        <div className="flex justify-center items-center w-full h-[70vh] rounded-xl">
                            <iframe
                                src="https://app.rubic.exchange/?fromChain=SOLANA&toChain=SOLANA&from=SOL&to=MWOR"
                                title="Rubic Exchange Widget"
                                className="rounded-xl w-full h-[80vh]"
                                style={{ border: "none", overflow: "hidden" }}
                            />
                        </div>
                    </div>
                    <div className='sm:mt-[40px] md:mt-[20px] lg:mt-0 flex justify-center items-center flex-col sm:justify-center md:justify-center lg:justify-start sm:items-center md:items-center lg:items-start'>
                        <h2 className='cartoon-text sm:text-center md:text-center lg:text-left mb-[10px] text-green mt-0 sm:text-[30px] md:text-[30px] lg:text-[40px]'>MEME WORLD ORDER IS NOW LIVE</h2>
                        <p className='text-[15px] mt-[10px] font-bold text-left sm:text-center md:text-center lg:text-left'>Welcome to $MWOR. We are building a full blow movement on Solana</p>
                        <div className='flex'>
                            <button className='rounded-[70px] mr-[10px] border-black border-2 px-[20px] py-[10px] border mt-[20px] font-bold text-[19px] cursor-pointer bg-[#2eb335]'><a href="https://raydium.io/swap/?inputMint=sol&outputMint=EoRe4xECTe9imaYtwfdmrGoinD2S1N5yMeu1LrjQpump&referrer=BosMQ79Pdj824ywxKtX6sG293QFSRAGC7EvBooZXCboj" target="_blank" rel="noopener noreferrer">Buy now</a></button>
                            <button className='rounded-[70px] border-black border-2 px-[20px] py-[10px] border mt-[20px] font-bold text-[19px] cursor-pointer bg-white'><a href="https://dexscreener.com/solana/GjeoEzugvhZYHyALgCLcxcLfbB52vRfz8jXFn26oNqsx" target="_blank" rel="noopener noreferrer">DexScreener</a></button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col-reverse mr-[80px] flex-row sm:mr-[20px] md:mr-[20px] lg:mr-[80px]'>
                        <img className='w-[85%] object-contain' src="/Images/hero.png" alt="" />
                    </div>
                </div>
            </section>
            <section id='about'>
                <h2 className='cartoon-text text-green text-center sm:text-[30px] md:text-[30px] lg:text-[40px]'>About Meme World Order</h2>
                <div className='grid grid-cols-2 place-items-center mx-[20px] gap-9 sm:grid-cols-1 grid-cols-1 lg:grid-cols-2'>
                    <div className='ml-[30px] sm:ml-[20px] md:ml-[20px] lg:ml-[30px]'>
                            <p className='text-[15px] mt-[10px] font-bold border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl sm:mt-[30px] md:mt-[30px] lg:mt-[10px]'><span className='text-[17px] text-green-500 font-bold'>Meme World Order ($MWOR)</span> is a meme-driven cryptocurrency on the Solana Network, created to deliver a fun, community-focused, and potentially rewarding crypto experience. Whether you’re a seasoned enthusiast or a newcomer, $MWO invites you to join a collective journey that blends humor with blockchain innovation.</p>
                        </div>
                        <div className='flex justify-end mr-[80px] flex-row'>
                            <img className=' object-contain' src="/Images/about.png" alt="" />
                        </div>
                    </div>
            </section>
            <section id='roadmap'>
            <h2 className='cartoon-text mb-[20px] text-green text-center mt-[20px] mb-[30px] sm:text-[30px] md:text-[30px] lg:text-[40px]'>Roadmap</h2>
                <div className='flex items-center space-x-8 mx-[50px] place-items-center sm:block md:block lg:flex sm:mx-[50px] mx-[40px] lg:mx-[50px] sm:space-x-0 md:space-x-0 lg:space-x-8'>
                    <div>
                        <div className=''>
                            <div className='flex items-start flex-col border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                                <h2><span className='text-[18px] text-green-500 font-bold'>PHASE 1: Launch & Community Ignition</span> </h2>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Official Launch: Deploy $MWOR on the Solana blockchain and unveil the project to the world.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Community Platforms: Establish a vibrant presence on X and other key platforms, fostering a welcoming hub for early adopters.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Engagement Campaigns: Meme Contest: A 2-week event with a $1,000 prize pool to spark creativity and virality.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">First AMA: Host an interactive session on X (no Telegram) to connect with the community, followed by a voice chat (VC) for real-time Q&A.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Strategic Partnerships: Secure 3-5 influential crypto callers to amplify reach and credibility.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px]">Website Debut: Launch a sleek, user-friendly website to serve as the project’s digital home, detailing the vision, tokenomics, and roadmap.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['✔'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Goal: Build a passionate community and generate buzz to set the stage for growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <div className='flex items-start flex-col border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl'>
                                <h2><span className='text-[18px] text-green-500 font-bold'>PHASE 2: Staking Rollout & Ecosystem Foundations</span> </h2>
                                <div className='flex items-center justify-center'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Staking Incentives: Introduce staking with high APYs and boosted early-bird rewards to encourage participation.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Staking Giveaways: Distribute exclusive NFTs and $MWOR rewards to stakers, driving engagement.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Wallet Integration: Partner with top Solana wallets (e.g., Phantom) to release staking guides, making participation seamless.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Community Spotlight: Reward active members with exclusive perks, fostering loyalty and excitement.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                   <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Strategic Partnerships: Secure 3-5 influential crypto callers to amplify reach and credibility.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                   <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">DEX Listings: List $MWOR on decentralized exchanges to enhance liquidity and accessibility for buyers.</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                   <p className="text-[15px] font-bold before:content-['✔'] before:mr-2 before:text-black before:text-[18px] mt-[20px]"> Goal: Incentivize holding, reward early supporters, and establish $MWOR as a must-have token.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center space-x-8 mx-[50px] mt-[20px] sm:block md:block lg:flex sm:mx-[50px] mx-[40px] lg:mx-[50px] sm:space-x-0 md:space-x-0 lg:space-x-8'>
                    <div>
                        <div className=''>
                            <div className='flex items-start flex-col border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                                <h2><span className='text-[18px] text-green-500 font-bold'>PHASE 3: Heavy Promotion, NFTs & Deflationary Mechanics</span> </h2>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Viral Campaigns: Launch meme challenges and community-created content competitions on X to boost $MWOR’s cultural footprint.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">NFT Launch: Debut a limited-edition $MWOR NFT collection—unique, meme-inspired digital assets tied to the ecosystem, offering holders exclusive benefits (e.g., staking boosts, merch discounts).</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                   <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Heavy Marketing Push: Roll out an aggressive marketing campaign across crypto spaces to promote both $MWOR and the NFT drop, attracting new investors and collectors.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">CLMM Burn2Earn Activation: Inject funds into a concentrated liquidity market maker (CLMM) model, introducing a Buyback & Burn program to reduce $MWOR supply and create deflationary pressure.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Token Utility Expansion: Add practical use cases for $MWOR (e.g., NFT purchases, in-ecosystem services, discounts) to drive demand.
                                    </p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['✔'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Goal: Skyrocket visibility, launch a high-value NFT ecosystem, and enhance token scarcity for long-term growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <div className='flex items-start flex-col border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl'>
                                <h2><span className='text-[18px] text-green-500 font-bold'> PHASE 4:</span> </h2>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Ecosystem Enrichment: Continue integrating Rubic (or similar coss-chain solutions) to enhance interoperability and user experience.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                   <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Listings and Promotion: List $MWOR on profitable and well known exchanges like MEXC</p>
                                </div>
                                <div className='flex items-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['✔'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Goal: To increase visibility & reach of $MWOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className='flex justify-end mr-[80px] flex-row'>
                        <img className='w-[60%] object-contain' src="/Images/chians.gif" alt="" />
                    </div> */}
                </div>
                <div className='flex justify-center space-x-6 mx-[50px] my-[20px] sm:block md:block lg:flex sm:mx-[50px] mx-[40px] lg:mx-[50px] sm:space-x-0 md:space-x-0 lg:space-x-8'>
                    <div>
                        <div className=''>
                            <div className='flex items-start flex-col border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                                <h2><span className='text-[18px] text-green-500 font-bold'>PHASE 5: Global Expansion & Merch Empire</span> </h2>
                                <div className='flex items-center justify-center mt-[10px]'>
                                   <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Exclusive Merch Drop: Launch a slick $MWOR merchandise line—think t-shirts, hoodies, and mugs that fans will love.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Token Payments: Enable $MWOR as the primary payment method for merch and select NFT trades, increasing real-world utility.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Global Outreach: Expand partnerships and marketing efforts worldwide to cement $MWOR’s status as a global meme coin contender.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['✔'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Goal: Take $MWOR to the global stage, blending culture, utility, and scarcity into a winning formula.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <div className='flex items-start flex-col border border-2 border-black bg-blue-900 text-white px-[10px] py-[20px] rounded-xl'>
                                <h2><span className='text-[18px] text-green-500 font-bold'>WHY INVEST IN $MWOR</span> </h2>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Community-Driven: From meme contests to AMAs, we’re building a movement, not just a token.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Staking Rewards: High APYs and exclusive perks make holding $MWOR irresistible.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">NFT Value: A unique NFT collection adds a collectible layer with tangible benefits for holders.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                   <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]"> Deflationary Edge: Our Buyback & Burn strategy ensures $MWOR becomes scarcer—and more valuable—over time.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Real Utility: From NFTs to merch to ecosystem services, $MWOR is more than a meme—it’s a lifestyle.</p>
                                </div>
                                <div className='flex items-center justify-center mt-[10px]'>
                                    <p className="text-[15px] font-bold text-center before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Join us as we launch, promote, and scale $MWOR into a deflationary powerhouse with a killer NFT twist. The meme revolution starts here—get in early!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className='flex justify-end mr-[80px] flex-row'>
                        <img className='w-[60%] object-contain' src="/Images/chians.gif" alt="" />
                    </div> */}
                </div>
            </section>
            <section id='tokenomics'>
                <h2 className='cartoon-text mb-[20px] text-green text-center mt-[100px] mb-[30px]'>Tokenomics</h2>
                <div className="rounded-lg flex justify-center items-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={140}
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
            </section>
            <section id="team">
                <h2 className='cartoon-text text-green text-center mt-[120px] mb-[30px]'>Team</h2>
                <div className='grid grid-cols-3 gap-8 place-items-center px-[20px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:px-[40px] md:px-[60px] lg:px-[20px]'>
                    <div className='bg-gray-900 px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px] sm:mr-0 md:mr-0 lg:mr-[30px]'>
                        <img className='w-[50%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/founder.png" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>Dev</h2>
                        <p className='text-[#94a3b8] mb-[40px]'>Founder</p>
                    </div>
                    <div className='bg-gray-900 px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px] sm:mr-0 md:mr-0 lg:mr-[30px]'>
                        <img className='w-[50%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/team1.jpg" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>Glayzz_4T9ne</h2>
                        <p className='text-[#94a3b8] mb-[40px] w-[70%] text-center'>Community Manager  Graphic Designer</p>
                    </div>
                    <div className='bg-gray-900 px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px] sm:mr-0 md:mr-0 lg:mr-[30px]'>
                        <img className='w-[50%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/social.jpg" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>P Dave</h2>
                        <p className='text-[#94a3b8] mb-[40px]'>Social Media Manager</p>
                    </div>
                </div>
            </section>
            <section id="buy" className='px-[50px]'>
                <h2 className='cartoon-text mb-[20px] text-green text-center mt-[120px]'>HOW TO BUY</h2>
                <div className='flex items-center justify-center mt-[50px] sm:block md:block lg:flex'>
                    <div className='mr-[40px] w-[130%] sm:w-[97%] md:w-[97%] lg:w-[130%]'>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='bg-gray-900 rounded-md px-[30px] py-[30px]'>
                                <h2 className='text-white font-bold mb-[20px]'>1. CREATE A WALLET</h2>
                                <p className='text-white'>Set up a Solana-compatible wallet (e.g., Phantom or Solflare) that supports $MWO. Remember to keep your seed phrase and private keys secure.</p>
                            </div>
                            <div className='bg-gray-900 rounded-md px-[20px] py-[20px]'>
                                <h2 className='text-white font-bold mb-[20px]'>2. Participate in the Fair Launch</h2>
                                <p className='text-white'>Head over to pump.fun to be part of the fair launch. There’s no presale—everyone obtains $MWO tokens at the same time, ensuring equal opportunity for all.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                            <div className='bg-gray-900 rounded-md px-[20px] py-[20px] mt-[10px]'>
                                <h2 className='text-white font-bold mb-[20px]'>3. Stake for Rewards</h2>
                                <p className='text-white'>Once you have your $MWO tokens, consider staking them to earn additional rewards. Check out our staking page (if applicable) for more information on how to maximize your $MWO holdings.</p>
                            </div>
                            <div className='bg-gray-900 rounded-md px-[20px] py-[20px] mt-[10px]'>
                                <h2 className='text-white font-bold mb-[20px]'>4. You are now a $MWO holder!</h2>
                                <p className='text-white'>Welcome to the #MWO Community.</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg border-black border-2 sm:mt-[30px] md:mt-[30px] lg:mt-0'>
                        <img className='' src="/Images/buy.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <h2 className='cartoon-text mb-[20px] text-green text-center mt-[120px]'>FAQS</h2>
                <div className='px-[50px]'>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-gray-900 px-[40px] py-[20px] rounded-md sm:text-[18px] md:text-[18px] lg:text-[20px]'>
                                    What is $MWO?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-white text-[18px] sm:text-[16px] md:text-[16px] lg:text-[18px]'>
                                    $MWO is a meme-centric digital asset on Solana, aiming to blend fun and profitability by fostering a spirited community and offering intuitive staking mechanisms.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-gray-900 px-[40px] py-[20px] rounded-md sm:text-[18px] md:text-[18px] lg:text-[20px]'>
                                    Where can I buy $MWO?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='text-white text-[18px] sm:text-[16px] md:text-[16px] lg:text-[18px]'>
                                    You can purchase $MWO through the fair launch process on pump.fun. Eventually, $MWO may appear on various decentralized and centralized exchanges, offering extra ways to trade or acquire more tokens.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='text-[20px] text-white bg-gray-900 px-[40px] py-[20px] rounded-md sm:text-[18px] md:text-[18px] lg:text-[20px]'>
                                    Is $MWO secure?
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
                                <AccordionItemButton className='text-[20px] text-white bg-gray-900 px-[40px] py-[20px] rounded-md sm:text-[17px] md:text-[17px] lg:text-[20px]'>
                                    How can I contact the $MWO team?
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
                        <h2 className='mb-[20px] text-green-800 text-[20px] mt-[20px] font-bold'>Maintaining Order For Memes On Solana</h2>
                        <p className='text-[15px] mt-[10px] font-bold text-white'>Better speed. Better gains. Same delicious spicy flavor.</p>
                        <div className='flex justify-center space-x-1 mt-[10px] items-center mb-[20px] sm:space-x-4 md:space-x-4 lg:space-x-1'>
                            <a href="https://t.me/memeworldorderchat" target="_blank" rel="noopener noreferrer"><img className='w-[50%] object-contain cursor-pointer sm:w-[130%] md:w-[70%] lg:w-[50%]' src="/Images/tg.png" alt="" /></a>
                            <a href="https://www.reddit.com/u/mworder2024/s/eJTNkOVjg7" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer sm:w-[80%] md:w-[40%] lg:w-[30%]' src="/Images/reddit.png" alt="" /></a>
                            <a href="https://twitter.com/mworder2024" target="_blank" rel="noopener noreferrer"><img className='w-[20%] object-contain cursor-pointer sm:w-[70%] md:w-[40%] lg:w-[35%]' src="/Images/x.png" alt="" /></a>
                            <a href="https://discord.com/invite/H7eCbTZKHu" target="_blank" rel="noopener noreferrer"><img className='w-[40%] object-contain cursor-pointer sm:w-[90%] md:w-[50%] lg:w-[40%]' src="/Images/discord.png" alt="" /></a>
                        </div>
                        <div className='flex justify-center space-x-4 mt-[10px] items-center mb-[20px] sm:space-x-6 md:space-x-4 lg:space-x-1'>
                            <a href="http://medium.com/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer sm:w-[80%] md:w-[50%] lg:w-[50%]' src="/Images/medium.png" alt="" /></a>
                            <a href="http://medium.com/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer sm:w-[80%] md:w-[50%] lg:w-[40%]' src="/Images/facebook.png" alt="" /></a>
                            <a href="http://medium.com/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer sm:w-[80%] md:w-[50%] lg:w-[40%]' src="/Images/tik.png" alt="" /></a>
                            <a href="http://medium.com/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer sm:w-[98%] md:w-[50%] lg:w-[52%]' src="/Images/instagram.png" alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <img className='w-[70%] sm:w-[90%] md:w-[90%] lg:w-[70%]' src="/Images/hero.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPage