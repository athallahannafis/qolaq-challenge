import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Footer({}) {
    
    return (
        <div className="w-full py-36 bg-slate-200">
            <div className="lg:container lg:mx-auto lg:flex  flex-col  px-10 space-y-10">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <p>QolaQ is neither an insurer nor backed by an insurer.</p>
                        <p>QolaQ is an independent mutual aid platform via a blockchain smart contract. QolaQ Corporation is registered in the United States and provides its Web3 mutual aid platform via the Qolaq Foundation, a registered international foundation in the Cook Islands, Realm of New Zealand.</p>
                        <p>Before joining our network, please understand that you may need to familiarize yourself with blockchain applications for smart contracts and other related activites.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className="space-y-5">
                            <div className="text-xl font-bold ">
                                Company
                            </div>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="space-y-5">
                            <div className="text-xl font-bold ">
                                Audited by
                            </div>
                            <p>Beosin</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}