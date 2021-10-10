import React from "react";

import VerticalNav4 from "../components/header/Header";
import Contact2 from "../components/contacts/Contact2";
import Footer3 from "../components/footers/Footer3";

export default function Contact() {
  return (
    <React.Fragment>
      <VerticalNav4
        content={null}
        bucketMain={[<Contact2 content={null} />, <Footer3 content={null} />]}
      />
    </React.Fragment>
  );
}
