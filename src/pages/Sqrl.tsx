import React from "react"
import { Elaboration } from "../components/project"
import Project from "../Project"

const Sqrl = (props: any) => {
    return (
        <Project heading="Sqrl" desc="Coming soon">
            <Elaboration
                style={{
                    textAlign: "center",
                }}
            >
                When I said "coming soon", I meant "coming soon".
            </Elaboration>
            {/* <External href="https://github.com/eamonma/hermes">
                See on GitHub.
            </External> */}
            {/* Set width and height to prevent reflow */}
        </Project>
    )
}

export default Sqrl
