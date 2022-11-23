import { useEffect, useState } from "react"
import NavigationBar from "./navbar"
import { Button } from "react-bootstrap";
import Image from "next/image";


import qolaqlearn from "../assets/images/learn-content-1.png";
import offer1 from "../assets/images/offer-1.png";
import offer2 from "../assets/images/offer-2.png";
import offer3 from "../assets/images/offer-3.png";
import offer4 from "../assets/images/offer-4.png";


export default function Landing({}) {
    const [toggle, setToggle] = useState(false);


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
            <div className="w-full py-10">
                <div className="md:container md:mx-auto md:flex flex-row-reverse justify-center items-center px-10 ">
                    <Image width={490} height={480}  alt="qolaq-learn" src={qolaqlearn}/>
                    <div className="flex flex-col">
                        <p className="text-5xl font-bold">QolaQ’s Decentralized Mutual Aid Platform</p>
                        <div className="py-2"/>
                        <p className="text-xl" >A simpler, fairer and easier way to support you and the community.</p>
                    </div>
                </div>
            </div>
            {/* End of intro section */}

            <div className="py-5"/>

            {/* why-qolaq-section */}
            <div className="w-full py-10">
                <div className="md:container md:mx-auto md:flex flex-col items-center px-10 ">
                    <p className="text-5xl text-center font-bold">Why Qolaq?</p>
                    <div className="py-5"/>
                    <div className="md:flex flex-row justify-center self-center">
                        {/* Kiri */}
                        <div className="md:flex flex-col md:w-1/2">
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
                        <div className="md:flex flex-col md:w-1/2">
                            <div>
                                <div className="flex flex-row items-center">
                                    <Image width={54} height={54} alt={"offer-1"} src={offer3}/>
                                    <div className="px-2"/>
                                    <p className="text-2xl font-bold">Definitely Cheaper</p>
                                </div>
                                <div className="py-3"/>
                                <p>Our “pay-when-needed” model is less costly to the Members, by removing the signficant cost structure — including commissions, distribution and underwriting — of insurance companies.</p>
                            </div>
                            <div className="py-5"/>
                            <div>
                                <div className="flex flex-row items-center">
                                    <Image width={54} height={54} alt={"offer-1"} src={offer2}/>
                                    <div className="px-2"/>
                                    <p className="text-2xl font-bold">Definitely Cheaper</p>
                                </div>
                                <div className="py-3"/>
                                <p>Our “pay-when-needed” model is less costly to the Members, by removing the signficant cost structure — including commissions, distribution and underwriting — of insurance companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of why-qolaq-section */}

        </div>
    </div>
    )
}