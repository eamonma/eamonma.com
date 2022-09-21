import React from "react"
import Project from "../Project"
import { Elaboration, Image } from "../components/project"
import { External } from "../components/section"

import hermesImage from "../assets/hermes-1.jpg"
import hermesImage2 from "../assets/hermes-2.jpg"

const Hermes = (props: any) => {
    return (
        <Project heading="Hermes" desc="Delivering projects to clients">
            <Elaboration>
                Until now, there lacked a file delivery platform geared towards
                media production companies. Google Drive, Mega, Dropbox, and
                other cloud storage providers feel impersonal and amateur. Other
                video-centric platforms lack the simple ability to deliver image
                files and auxiliary files. <i>Hermes</i> seeks to rectify this
                with a focus on client experience. Built with TypeScript,
                GraphQL, Node.js, and React.
            </Elaboration>
            <External href="https://github.com/eamonma/hermes">
                See on GitHub
            </External>
            {/* Set width and height to prevent reflow */}
            <Image
                width="1920"
                height="1075"
                src={hermesImage}
                alt="Depicts the Hermes application"
            />
            <Image
                width="1920"
                height="1075"
                src={hermesImage2}
                alt="Depicts the Hermes application"
            />
        </Project>
    )
}

export default Hermes
