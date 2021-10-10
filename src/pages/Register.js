import React from "react";

import StructureContainer from "../components/__structures/StructureContainer";
import SignIn1 from "../components/register/Register";

export default function Register() {
  return (
    <React.Fragment>
      <StructureContainer
        bucket1={[
          <SignIn1
            content={{
              "01_primary-action": "Register",
            }}
          />,
        ]}
      />
    </React.Fragment>
  );
}
