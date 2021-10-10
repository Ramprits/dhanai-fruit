import React from "react";

import StructureContainer from "../components/__structures/StructureContainer";
import SignIn2 from "../components/login/Login";

export default function Login() {
    return (
        <React.Fragment>
            <StructureContainer
                bucket1={[
                    <SignIn2
                        content={{
                            brand: {
                                text: "Dhanai Fruits Marts",
                                image: "mui-assets/img/logo-pied-piper-icon.png",
                                width: "40",
                            },
                            "02_header": "Welcome back!",
                            "02_primary-action": "Login",
                        }}
                    />,
                ]}
            />
        </React.Fragment>
    );
}
