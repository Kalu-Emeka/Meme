import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Swipers() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Enable navigation arrows
      pagination={{
        type: 'bullet'
        // renderFraction: (currentClass, totalClass) => {
        //   return `<span class="${currentClass}"></span><span style="font-size: 20px;"> Of </span><span class="${totalClass}"></span>`;
        // },
      }} // Enable pagination dots
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      autoplay={{ delay: 4000 }}
    >
      <div className='mx-auto'>
        <SwiperSlide>
        <div className=''>
          <div className='flex justify-center'>
              <div className=' mx-[50px] w-[50%] flex items-center flex-col border border-2 border-black bg-gray-900 text-white px-[10px] py-[20px] rounded-xl sm:mb-[20px] md:mb-[20px] lg:mb-0 sm:w-[80%] md:w-[80%] lg:w-[50%]'>
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
        </SwiperSlide>
        <SwiperSlide>
         <div>
              <div className='flex justify-center'>
                  <div className='flex items-center mx-[50px] w-[50%] flex-col border border-2 border-black bg-gray-900 text-white px-[10px] py-[20px] rounded-xl sm:w-[80%] md:w-[80%] lg:w-[50%]'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className='flex justify-center'>
                        <div className='flex items-start flex-col mx-[50px] w-[50%] border border-2 border-black bg-gray-900 text-white px-[10px] py-[20px] rounded-xl sm:mb-[20px] md:mb-[20px] lg:mb-0 sm:w-[80%] md:w-[80%] lg:w-[50%]'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div>
              <div className='flex justify-center'>
                  <div className='flex items-start flex-col mx-[50px] w-[50%] border border-2 border-black bg-gray-900 text-white px-[10px] py-[20px] rounded-xl sm:w-[80%] md:w-[80%] lg:w-[50%]'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div>
              <div className='flex justify-center'>
                  <div className='flex items-start flex-col w-[50%] mx-[50px] border border-2 border-black bg-gray-900 text-white px-[10px] py-[20px] rounded-xl sm:mb-[20px] md:mb-[20px] lg:mb-0 sm:w-[80%] md:w-[80%] lg:w-[50%]'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className='flex justify-center'>
                <div className='flex items-start mx-[50px] w-[50%] flex-col border border-2 border-black bg-gray-900 text-white px-[10px] py-[20px] rounded-xl sm:w-[80%] md:w-[80%] lg:w-[50%]'>
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
                        <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]"> Deflationary Edge: Our Buyback & Burn strategy ensures $MWOR becomes scarcer and more valuable over time.</p>
                    </div>
                    <div className='flex items-center justify-center mt-[10px]'>
                        <p className="text-[15px] font-bold before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Real Utility: From NFTs to merch to ecosystem services, $MWOR is more than a meme it’s a lifestyle.</p>
                    </div>
                    <div className='flex items-center justify-center mt-[10px]'>
                        <p className="text-[15px] font-bold text-center before:content-['•'] before:mr-2 before:text-black before:text-[18px] mt-[20px]">Join us as we launch, promote, and scale $MWOR into a deflationary powerhouse with a killer NFT twist. The meme revolution starts here get in early!</p>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
export default Swipers;
