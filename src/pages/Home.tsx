import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {
    External,
    Juice,
    JuiceDescription,
    JuiceHeading,
    Section,
    SectionHeading,
} from "../components/section"

const AppComponent = styled(motion.div)`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Name = styled(motion.h1)`
    font-family: agenda, sans-serif;
    font-weight: 300;
    font-style: normal;
    margin: 0 auto;
    /* margin-bottom: 1.4rem; */
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
`

const Title = styled(motion.div)`
    margin: 0 auto;
    color: #444;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`

const ContactJuice = styled(motion.div)`
    display: flex;
    width: 100%;
`

const ContactLink = styled(External)`
    padding-left: 0.35rem;
    padding-right: 0.35rem;
    font-size: 1.4rem;
`

const Home = () => {
    const projects = [
        { title: "Hermes", desc: "Delivering projects to clients" },
        { title: "Wikigraph", desc: "Representing Wikipedia with a graph" },
        { title: "Notepool", desc: "Sharing notes with your class" },
    ]
    return (
        <div>
            <AppComponent initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Name>Eamon Ma</Name>
                <Title>React, Node, GraphQL</Title>
                <Section>
                    <SectionHeading>projects</SectionHeading>
                    {projects.map((project) => (
                        <Juice>
                            <JuiceHeading layoutId={project.title}>
                                <Link to={`/${project.title.toLowerCase()}`}>
                                    {project.title}
                                </Link>
                            </JuiceHeading>
                            <JuiceDescription layoutId={project.desc}>
                                <Link to={`/${project.title.toLowerCase()}`}>
                                    {project.desc}
                                </Link>
                            </JuiceDescription>
                        </Juice>
                    ))}
                </Section>
                <Section>
                    <SectionHeading>contact</SectionHeading>
                    <ContactJuice>
                        <ContactLink href="https://instagram.com/eam.on">
                            Instagram
                        </ContactLink>
                        <ContactLink href="https://github.com/eamonma">
                            GitHub
                        </ContactLink>
                        <ContactLink href="mailto:m@eamonma.com">
                            Email
                        </ContactLink>
                        <ContactLink href="https://linkedin.com/in/eamonma">
                            LinkedIn
                        </ContactLink>
                    </ContactJuice>
                </Section>
            </AppComponent>
        </div>
    )
}

export default Home
