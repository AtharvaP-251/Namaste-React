import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="text-center my-4">
                <h1>This is about us</h1>
                <UserClass name="Atharva Patil" location="Pune" />
            </div>
        );
    }
}

export default About;
