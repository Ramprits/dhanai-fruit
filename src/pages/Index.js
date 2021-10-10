import React from "react";

import VerticalNav from "../components/header/Header";
import Header from "../components/home/Header";
import Team from "../components/team/Team";
import Testimonials from "../components/testimonials/Testimonials";
import Footer3 from "../components/footers/Footer3";

export default function Index() {
    return (
        <React.Fragment>
            <VerticalNav
                content={null}
                bucketMain={[
                    <Header content={null}/>,
                    <Team content={null}/>,
                    <Testimonials content={null}/>,
                    <Footer3 content={null}/>,
                ]}
            />
        </React.Fragment>
    );
}
