import Navbar from '../components/nav.jsx';
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
const data = [
    { name: "Staking", value: 15, color: "#FFD700" }, // Yellow
    { name: "Liquidity", value: 17.5, color: "#2ECC71" }, // Green
    { name: "Team", value: 7.5, color: "#3498DB" }, // Blue
    { name: "Ecosystem", value: 7.5, color: "#8E44AD" }, // Purple
    { name: "Marketing", value: 10, color: "#E91E63" }, // Pink
    { name: "Early Investors", value: 7.5, color: "#FF5733" }, // Pink
    { name: "Free Supply", value: 7.5, color: "#F39C12" }, // Pink
];    
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
                    <div className='sm:mt-[40px] md:mt-[20px] lg:mt-0'>
                        <h2 className='cartoon-text mb-[10px] text-green mt-0 sm:text-[30px] md:text-[30px] lg:text-[40px]'>MEME WORLD ORDER IS NOW LIVE</h2>
                        <p className='text-[15px] mt-[10px] font-bold'>Welcome to $MWOR. We are building a full blow movement on Solana</p>
                        <div className='flex'>
                            <button className='rounded-[70px] mr-[10px] border-black border-2 px-[20px] py-[10px] border mt-[20px] font-bold text-[19px] cursor-pointer bg-[#2eb335]'><a href="https://dexscreener.com/solana/GjeoEzugvhZYHyALgCLcxcLfbB52vRfz8jXFn26oNqsx" target="_blank" rel="noopener noreferrer">Pump.fun</a></button>
                            <button className='rounded-[70px] border-black border-2 px-[20px] py-[10px] border mt-[20px] font-bold text-[19px] cursor-pointer bg-white'><a href="https://dexscreener.com/solana/GjeoEzugvhZYHyALgCLcxcLfbB52vRfz8jXFn26oNqsx" target="_blank" rel="noopener noreferrer">DexScreener</a></button>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col-reverse mr-[80px] flex-row'>
                        <img className='w-[95%] object-contain' src="/Images/hero.png" alt="" />
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
            <h2 className='cartoon-text mb-[20px] text-green text-center mt-[20px] mb-[30px] sm:text-[30px] md:text-[30px] lg:text-[40px]'>Meme World Order Roadmap</h2>
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
                <h2 className='cartoon-text mb-[20px] text-green text-center mt-[20px] mb-[30px]'>Tokenomics</h2>
                <div className="p-6 rounded-lg flex justify-center">
                    <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={200}
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend/>
                    </PieChart>
                </div>
            </section>
            <section id="team">
                <h2 className='cartoon-text mb-[20px] text-green text-center mt-[20px] mb-[30px]'>Team</h2>
                <div className='grid grid-cols-3 gap-8 place-items-center px-[20px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:px-[50px] md:px-[60px] lg:px-[20px]'>
                    <div className='bg-gray-900 px-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px]'>
                        <img className='w-[50%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/founder.png" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>Dev</h2>
                        <p className='text-[#94a3b8] mb-[40px]'>Founder</p>
                    </div>
                    <div className='bg-gray-900 p   x-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px]'>
                        <img className='w-[50%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/team1.jpg" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>Glayzz_4T9ne</h2>
                        <p className='text-[#94a3b8] mb-[40px] w-[70%] text-center'>Community Manager | Graphic Designer</p>
                    </div>
                    <div className='bg-gray-900 p   x-[30px] flex justify-center flex-col items-center rounded-xl shadow-md mr-[30px]'>
                        <img className='w-[50%] mb-[20px] mt-[40px] rounded-[130px]' src="/Images/social.jpg" alt="" />
                        <h2 className='text-white text-[19px] mb-[20px]'>P Dave</h2>
                        <p className='text-[#94a3b8] mb-[40px]'>Social Media Manager</p>
                    </div>
                </div>
            </section>
            <section className='mx-[40px]'>
                <h2 className='mb-[20px] text-green-800 text-[20px] mt-[20px] font-bold'>Maintaining Order For Memes On Solana</h2>
                <p className='text-[15px] mt-[10px] font-bold'>Better speed. Better gains. Same delicious spicy flavor.</p>
                <div className='flex justify-start space-x-1 mt-[10px] items-center'>
                    <a href="https://t.me/memeworldorderchat" target="_blank" rel="noopener noreferrer"><img className='w-[70%] object-contain cursor-pointer' src="/Images/tg.png" alt="" /></a>
                    <a href="https://www.reddit.com/u/mworder2024/s/eJTNkOVjg7" target="_blank" rel="noopener noreferrer"><img className='w-[50%] object-contain cursor-pointer' src="/Images/reddit.png" alt="" /></a>
                    <a href="https://twitter.com/mworder2024" target="_blank" rel="noopener noreferrer"><img className='w-[30%] object-contain cursor-pointer' src="/Images/x.png" alt="" /></a>
                    <a href="https://discord.com/invite/H7eCbTZKHu" target="_blank" rel="noopener noreferrer"><img className='w-[70%] object-contain cursor-pointer' src="/Images/discord.png" alt="" /></a>
                    <a href="http://medium.com/@memeworldorder" target="_blank" rel="noopener noreferrer"><img className='w-[50%] object-contain cursor-pointer' src="/Images/medium.png" alt="" /></a>
                </div>
            </section>
        </>
    )
}
export default LandingPage