import React from "react"
import styled from "styled-components"
import { Elaboration } from "../components/project"
import { AnchorLink } from "../components/section"
import { External } from "../components/section"
import Project from "../Project"

const ParallelLinks = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

const Notepool = (props: any) => {
    return (
        <Project heading="Notepool" desc="Sharing notes with your class">
            <Elaboration>
                With{" "}
                <AnchorLink href="https://github.com/SimonChenWasTaken">
                    Simon Chen
                </AnchorLink>
                ,{" "}
                <AnchorLink href="https://github.com/zheniasigayev">
                    Zhenia Sigayev
                </AnchorLink>
                , and{" "}
                <AnchorLink href="https://github.com/Just-Call-Sal">
                    Salman Husainie
                </AnchorLink>
                .
            </Elaboration>
            <Elaboration>
                Notepool saves students the stress and headache of scouring for
                help by making the resources you need accessible. Our platform
                stores the course-specific files that students can upload to
                help students like themselves. These files are then sorted and
                stored by university, course, and keywords found within the
                files themselves. Any user can contribute and search through
                their class's notes frictionlessly.
            </Elaboration>
            <Elaboration>
                <ParallelLinks>
                    <External href="https://github.com/eamonma/notepool">
                        See on GitHub.
                    </External>
                    <External href="https://devpost.com/software/notepool">
                        See on Devpost.
                    </External>
                </ParallelLinks>
            </Elaboration>
        </Project>
    )
}

export default Notepool
