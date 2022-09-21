import React from "react"
import { Elaboration } from "../components/project"
import { AnchorLink, External } from "../components/section"
import Project from "../Project"

const Wikigraph = (props: any) => {
    return (
        <Project heading="Wikigraph" desc="Representing Wikipedia with a graph">
            <Elaboration>
                With{" "}
                <AnchorLink href="https://hisbaan.com">
                    Hisbaan Noorani
                </AnchorLink>
                ,{" "}
                <AnchorLink href="https://github.com/Rachel-X">
                    Rachel Xie
                </AnchorLink>
                , and{" "}
                <AnchorLink href="https://github.com/PhiliDips">
                    Philip Harker
                </AnchorLink>
                .
            </Elaboration>
            <Elaboration>
                This project, initially started as an end-of-year project for{" "}
                <span
                    style={{
                        fontVariant: "small-caps",
                    }}
                >
                    csc
                </span>
                111 at UofT, is focused on finding gaps in the knowledge of
                Wikipedia. The information found on Wikipedia can be used as a
                microcosm for the greater collective human knowledge. Finding
                gaps or underdeveloped areas in this will give us directions
                that we should explore as a society. See the{" "}
                <AnchorLink href="https://github.com/eamonma/wikigraph/blob/master/report/report.pdf">
                    project report
                </AnchorLink>{" "}
                for more information.
            </Elaboration>
            <External href="https://github.com/eamonma/wikigraph">
                See on GitHub
            </External>
        </Project>
    )
}

export default Wikigraph
