import { useEffect, useState } from "react"
import NavigationBar from "./navbar"
import { Button } from "react-bootstrap";
import Image from "next/image";


import qolaqlearn from "../assets/images/learn-content-1.png";
import offer1 from "../assets/images/offer-1.png";
import offer2 from "../assets/images/offer-2.png";
import offer3 from "../assets/images/offer-3.png";
import offer4 from "../assets/images/offer-4.png";
import landingContent1 from "../assets/images/landing-content-1.png";
import landingContent3 from "../assets/images/landing-content-3.png";
import how1 from "../assets/images/how-1.png";
import how2 from "../assets/images/how-2.png";
import how3 from "../assets/images/how-3.png";
import how4 from "../assets/images/how-4.png";
import Footer from "./footer";


export default function Landing({}) {
    const [toggle, setToggle] = useState(false);

    function centerText(component) {
        return (
            <div className="self-center py-2">
                {component}
            </div>
        );
    }

    useEffect(() => {
        console.log("Component did mount");
    });

    function test() {
        if (toggle == false) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    }

    return (
    <div>
        <NavigationBar/>
        <div className="flex flex-col items-center">
            {/* Intro section */}
            <div id="intro" className="w-full py-10">
                <div className="lg:container lg:mx-auto lg:flex flex-row-reverse self-center justify-center items-center px-10 ">
                    <div className="shrink-0">
                        <Image className="h-96 w-full object-cover lg:h-full lg:w-96"  alt="qolaq-learn" src={qolaqlearn}/>
                    </div>
                    <div className="px-5 py-5"/>
                    <div className="flex flex-col">
                        <p className="text-5xl font-bold">QolaQ’s Decentralized Mutual Aid Platform</p>
                        <div className="py-2"/>
                        <p className="text-xl" >A simpler, fairer and easier way to support you and the community.</p>
                    </div>
                </div>
            </div>
            {/* End of intro section */}


            {/* why-qolaq-section */}
            <div id="qolaq-section" className="w-full py-36">
                <div className="lg:container lg:mx-auto lg:flex flex-col items-center px-10 ">
                    <p className="text-5xl text-center font-bold">Why Qolaq?</p>
                    <div className="py-5"/>
                    <div className="lg:flex flex-row justify-center self-center">
                        {/* Kiri */}
                        <div className="lg:flex flex-col lg:w-1/2">
                            <div>
                                <div className="flex flex-row items-center">
                                    <Image width={54} height={54} alt={"offer-1"} src={offer1}/>
                                    <div className="px-2"/>
                                    <p className="text-2xl font-bold">Definitely Cheaper</p>
                                </div>
                                <div className="py-3"/>
                                <p>Our “pay-when-needed” model is less costly to the Members, by removing the signficant cost structure — including commissions, distribution and underwriting — of insurance companies.</p>
                            </div>
                            <div className="py-5"/>
                            <div>
                                <div className="flex flex-row items-center">
                                    <Image width={54} height={54} alt={"offer-1"} src={offer4}/>
                                    <div className="px-2"/>
                                    <p className="text-2xl font-bold">For Everyone</p>
                                </div>
                                <div className="py-3"/>
                                <p>With conventional insurance, there are multiple underwriting rules and exclusions. But with QolaQ MAP, Members drive claim decisions, meaning everyone is included. QolaQ leverages the community’s goodwill and decides on a case-by-case basis. Everyone is welcome!</p>
                            </div>
                            
                        </div>
                        <div className="py-5 px-5"/>
                        {/* Kanan */}
                        <div className="lg:flex flex-col lg:w-1/2">
                            <div>
                                <div className="flex flex-row items-center">
                                    <Image width={54} height={54} alt={"offer-1"} src={offer3}/>
                                    <div className="px-2"/>
                                    <p className="text-2xl font-bold">Decentralized Decision</p>
                                </div>
                                <div className="py-3"/>
                                <p>Our “pay-when-needed” model is less costly to the Members, by removing the signficant cost structure — including commissions, distribution and underwriting — of insurance companies.</p>
                            </div>
                            <div className="py-5"/>
                            <div>
                                <div className="flex flex-row items-center">
                                    <Image width={54} height={54} alt={"offer-1"} src={offer2}/>
                                    <div className="px-2"/>
                                    <p className="text-2xl font-bold">No Premiums Ever</p>
                                </div>
                                <div className="py-3"/>
                                <p>Our “pay-when-needed” model is less costly to the Members, by removing the signficant cost structure — including commissions, distribution and underwriting — of insurance companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of why-qolaq-section */}


            {/* blockchain section */}
            <div id="blockchain-section" className="w-full py-36 bg-slate-100">
                <div className="lg:container lg:mx-auto lg:flex flex-col lg:items-center px-10">
                    <div className="lg:w-3/4 flex flex-col items-center">
                        <p className="text-5xl text-center font-bold">... and blockchain-enabled QolaQ MAP is the best solution</p>
                    </div>

                    <div className="py-3"/>
                    <div className="border-t-4 border-blue-200 w-full"/>                   
                    <div className="py-3"/>
                    
                    <div>
                        <div className="flex flex-row overflow-x-auto whitespace-nowrap space-x-5 py-5">
                            <div>
                                <div className="h-24 w-full">
                                </div>
                                <div className="flex flex-column px-2 py-3 w-fit rounded-md text-sm">
                                    <p>Security/Privacy</p>
                                    <p>Inclusiveness</p>
                                    <p>Claim Process</p>
                                    <p>Risk Management</p>
                                    <p>Payment</p>
                                    <p>Affordabilty</p>
                                    <p>Geography</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col h-24 w-full justify-center">
                                    <p className="lg:text-2xl whitespace-normal text-center font-bold">Web2 Mutual (Non-blockchain)</p>
                                </div>  
                                <div className="flex flex-column px-2 py-3 w-full items-center text-center rounded-md bg-white text-sm">
                                    <p>Less Format Contract</p>
                                    <p>No Underwriting/Exclusions</p>
                                    <p>Decentralized</p>
                                    <p>Limited</p>
                                    <p>Transparent/Limited Automation</p>
                                    <p>Low`</p>
                                    <p>Limited</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col h-24 w-full justify-center">
                                    <p className="lg:text-2xl whitespace-normal text-center font-bold">Qolaq</p>
                                </div>
                                <div className="flex flex-column px-2 py-3 w-full items-center text-center rounded-md bg-white text-sm">
                                    <p>Smart Contract</p>
                                    <p>No Underwriting/Exclusions</p>
                                    <p>Decentralized</p>
                                    <p>Strong/Smart Contract</p>
                                    <p>Transparent/Automated</p>
                                    <p>Lowest Cost</p>
                                    <p>Inclusive/Global</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col h-24 w-full justify-center">
                                    <p className="lg:text-2xl whitespace-normal text-center font-bold">Digital Insurance</p>
                                </div>
                                <div className="flex flex-column px-2 py-3 w-full items-center text-center rounded-md bg-white text-sm">
                                    <p>Standard Contract</p>
                                    <p>Ridging Underwriting Strict Exclusions</p>
                                    <p>Centralized/Unilateral</p>
                                    <p>Rules and ops layers</p>
                                    <p>No transparent</p>
                                    <p>Less vs Conventional But Still Costly</p>
                                    <p>Restricted/Highly Regulated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of blockchain section */}


            {/* Qolaq contract section */}
            <div id="qolaq-contract-section" className="w-full py-36 bg-cyan-900">
                <div className="lg:container lg:mx-auto lg:flex flex-col lg:items-center px-10 space-y-10">
                    <div className="lg:w-3/4 flex flex-col text-white items-center">
                        <p className="text-5xl text-center font-bold">QolaQ Smart Contract MAP Program</p>
                    </div>

                    <div className="grid lg:grid-cols-2 text-white gap-20">
                        <div className="h-full">
                            <div className="w-full flex justify-center">
                                <Image className="max-w-full" src={landingContent1} alt={"landingContent1"} />
                            </div>
                            <p className="text-2xl font-bold">Simple Critical Illness Coverage</p>
                            <p>Our “pay-when-needed” model is less costly to the Members, by removing the signficant cost structure — including commissions, distribution and underwriting — of insurance companies.</p>
                            <a href="#tnc" className="text-2xl font-bold text-cyan-200">
                                Terms & Conditions
                            </a>
                        </div>

                        <div className="h-full">
                            <div className="w-full flex justify-center">
                                <Image className="max-w-full" src={landingContent3} alt={"landingContent1"} />
                            </div>
                            <p className="text-2xl font-bold">Life Coverage</p>
                            <p>Provides a lump sum payout after a claim is approved by the Members in the event of death.</p>
                            <a href="#tnc" className="text-2xl font-bold text-cyan-200">
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of qolaq contract section */}

            {/* How does it work section */}
            <div id="how-section" className="w-full py-36">
                <div className="lg:container lg:mx-auto lg:flex flex-col lg:items-center px-10 space-y-10">
                    <div className="lg:w-3/4 flex flex-col items-center">
                        <p className="text-5xl text-center font-bold">How does it work?</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="space-y-5 space-x-5">
                            <div className="w-full flex justify-center">
                                <Image className="max-w-full" src={how1} alt={"landingContent1"} />
                            </div>
                            <div className="text-xl font-bold">
                                Member
                            </div>
                            <p>Complete QolaQ’s registration process to become a Member and hold QLQ Tokens</p>
                            
                        </div>
                        <div className="space-y-5 space-x-5">
                            <div className="w-full flex justify-center">
                                <Image className="max-w-full" src={how2} alt={"landingContent1"} />
                            </div>
                             <div className="text-xl font-bold">
                                Voters
                            </div>
                            <p>Members can vote to approve or deny submitted claims, also for additional investigation from the Claim Scorer(s)</p>
                        </div>
                        <div className="space-y-5 space-x-5">
                            <div className="w-full flex justify-center">
                                <Image className="max-w-full" src={how3} alt={"landingContent1"} />
                            </div>
                            <div className="text-xl font-bold">
                                Foundation
                            </div>
                            <p>Administers the QolaQ MAP and its related activities, including the Programs and QLQ Tokens</p>
                        </div>
                        <div className="space-y-5 space-x-5">
                            <div className="w-full flex justify-center">
                                <Image className="max-w-full" src={how4} alt={"landingContent1"} />
                            </div>
                            <div className="text-xl font-bold">
                                Claim Scorer(s)
                            </div>
                            <p>Review submitted claims and provide suggestions, including Claim Scores and opinion from the reviews, to be shared with Members before voting</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                            <p className="text-3xl font-bold">Get Aid</p>
                            <div className="text-xl font-bold">
                                1. Register
                            </div>
                            <p>Register as a Member by providing information on identity, entry age, and domicile</p>
                            <div className="text-xl font-bold">
                                2. Earn
                            </div>
                            <p>Members link their digital wallet and acquire QLQ Tokens to participate in MAP</p>
                            <div className="text-xl font-bold">
                                3. Select
                            </div>
                            <p>Select which MAP Program(s) to join and be assigned a payout</p>
                            <div className="text-xl font-bold">
                                4. Submit
                            </div>
                            <p>To make a claim, Members submit required documentation (e.g., for Simple Critical Illness Cover, a specialist's diagnosis, test results)</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold">Give Aid</p>
                            <div className="text-xl font-bold">
                                5. Review
                            </div>
                            <p>Members review each claim case (along with the scores and reviews) and vote if the claim will be paid, denied, or require additional investigation</p>
                            <div className="text-xl font-bold">
                                6. Vote
                            </div>
                            <p>Members cast their vote to approve/deny the claim based on: Claim's believability and normality of other factors (such as any pre-existing conditions). Members can also vote to request an additional investigation.</p>
                            <div className="text-xl font-bold">
                                7. Aid
                            </div>
                            <p>Total approved claim payout + costs (admin and direct) contributed equally by all Members and automatically deducted from Members’ digital wallets</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-5xl text-center font-bold">Voting Process</p>
                        <p className="text-center">A simple majority vote, in which each Member is eligible to submit one vote</p>

                        <div className="hidden lg:grid gap-10 grid-cols-3 auto-cols-min text-white font-bold">
                            <div className="bg-[#008FCF] rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    1
                                </div>
                                <div className="px-2"/>
                                Claim cases with claim scores
                            </div>
                            <div className="bg-[#008FCF] rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    2
                                </div>
                                <div className="px-2"/>
                                Rank based on criticality
                            </div>
                            <div className="bg-[#008FCF] rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    3
                                </div>
                                <div className="px-2"/>
                                Voting round robin
                            </div>
                               
                            
                            <div className="bg-cyan-700 rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    4
                                </div>
                                <div className="px-2"/>
                                Voters are notified to vote on cases
                            </div>
                            <div className="bg-cyan-900 rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    5
                                </div>
                                <div className="px-2"/>
                                Vote is cast
                            </div>
                        </div>

                        <div className="lg:hidden grid gap-10 grid-rows-5 text-white font-bold">
                            <div className="bg-[#008FCF] rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    1
                                </div>
                                <div className="px-2"/>
                                Claim cases with claim scores
                            </div>
                            <div className="bg-[#008FCF] rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    2
                                </div>
                                <div className="px-2"/>
                                Rank based on criticality
                            </div>
                            <div className="bg-[#008FCF] rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    3
                                </div>
                                <div className="px-2"/>
                                Voting round robin
                            </div>
                               
                            
                            <div className="bg-cyan-700 rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    4
                                </div>
                                <div className="px-2"/>
                                Voters are notified to vote on cases
                            </div>
                            <div className="bg-cyan-900 rounded-2xl p-4 flex flex-row items-center">
                                <div className="rounded-full bg-white text-black px-3 py-2">
                                    5
                                </div>
                                <div className="px-2"/>
                                Vote is cast
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* End of how does it work section */}
        </div>
        <Footer/>
    </div>
    )
}