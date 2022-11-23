import { useEffect, useState } from "react"
import NavigationBar from "./navbar"
import { Button } from "react-bootstrap";

import qolaqlearn from "../assets/images/learn-content-1.png";
import Image from "next/image";



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
            <div className="w-full py-10">
                <div className="md:container md:mx-auto">
                    <div className="md:flex flex-row-reverse justify-center items-center px-10">
                        {/* Text and title */}
                        <Image width={490} height={480}  alt="qolaq-learn" src={qolaqlearn}/>
                        <div className="flex flex-col">
                            <p className="text-5xl text-violet-900 font-bold">QolaQ’s Decentralized Mutual Aid Platform</p>
                            <div className="py-2"/>
                            <p>A simpler, fairer and easier way to support you and the community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}