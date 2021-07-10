import React from "react"
import logo from "./logo.svg"
import "./App.css"
import styled from "styled-components"

const AppComponent = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Name = styled.h1`
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

const SectionHeading = styled.h2`
    font-family: agenda, sans-serif;
    font-variant: small-caps;
    letter-spacing: 0.08rem;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 auto;
    margin-bottom: 0.4rem;
    color: #333;
`

const Section = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 100vw;
    padding: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    position: relative;
`

const Juice = styled.div`
    display: flex;
    width: 100%;
    @media (min-width: 550px) {
        align-items: baseline;
    }
    @media (max-width: 550px) {
        /* align-items: center; */
        flex-direction: column;
        margin-bottom: 0.7rem;
    }
`

const ContactJuice = styled.div`
    display: flex;
    width: 100%;
`

const JuiceHeading = styled.h3`
    font-size: 1.8rem;
    margin: 0;
    @media (min-width: 550px) {
        margin-right: 0.5rem;
    }
`

const JuiceDescription = styled.div`
    color: #444;
    font-size: 1.5rem;
`

const ContactLink = styled.a`
    font-size: 1.4rem;
    color: #4f72b7;
    transition: color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-decoration: none;

    padding-left: 0.35rem;
    padding-right: 0.35rem;

    @media (hover: hover) {
        &:hover {
            color: #314772;
        }
    }
`

function App() {
    return (
        <AppComponent>
            <Name>Eamon Ma</Name>
            {/* Director at Starlide */}
            <Section>
                <SectionHeading>projects</SectionHeading>
                <Juice>
                    <JuiceHeading>Wikigraph</JuiceHeading>
                    <JuiceDescription>
                        Representing Wikipedia with a graph
                    </JuiceDescription>
                </Juice>
                <Juice>
                    <JuiceHeading>Notepool</JuiceHeading>
                    <JuiceDescription>Sharing notes</JuiceDescription>
                </Juice>
                <Juice>
                    <JuiceHeading>Hermes</JuiceHeading>
                    <JuiceDescription>
                        Delivering projects to clients
                    </JuiceDescription>
                </Juice>
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
                    <ContactLink href="mailto:m@eamonma.com">Email</ContactLink>
                    <ContactLink href="https://linkedin.com/in/eamonma">
                        LinkedIn
                    </ContactLink>
                </ContactJuice>
            </Section>
        </AppComponent>
    )
}

export default App
