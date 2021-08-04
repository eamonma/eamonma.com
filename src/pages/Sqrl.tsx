import React from "react"
import { Elaboration } from "../components/project"
import Project from "../Project"
import { AnchorLink } from "../components/section"

const Sqrl = (props: any) => {
    return (
        <Project heading="Sqrl" desc="Coming soon">
            <Elaboration>
                With{" "}
                <AnchorLink href="https://github.com/GalacticGlum">
                    Shon Verch
                </AnchorLink>
                .
            </Elaboration>
            <Elaboration>Coming &ldquo;soon&trade;&rdquo;.</Elaboration>
            {/* <External href="https://github.com/eamonma/hermes">
                See on GitHub.
            </External> */}
            {/* Set width and height to prevent reflow */}
        </Project>
    )
}

export default Sqrl
