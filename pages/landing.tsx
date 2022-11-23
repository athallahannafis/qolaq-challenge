import { useEffect, useState } from "react"
import NavigationBar from "./navbar"
import { Button } from "react-bootstrap";




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
            <p>Landing page</p>
            <p>Value of toggle: {toggle ? "True" : "False"}</p>
        </div>
    </div>
    )
}