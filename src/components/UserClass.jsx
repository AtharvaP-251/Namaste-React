import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        const { count } = this.state;
        const { name, location } = this.props;
        return (
            <div className="text-center">
                <h1>User Class</h1>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <p>Count : {count}</p>

                <button
                    className="shadow-sm rounded-lg bg-gray-200"
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    Increase Count
                </button>
            </div>
        );
    }
}

export default UserClass;
