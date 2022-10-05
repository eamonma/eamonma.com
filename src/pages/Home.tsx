import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {
  External,
  Juice,
  JuiceDescription,
  JuiceHeading,
  MoreLink,
  Section,
  SectionHeading,
} from "../components/section"

const AppComponent = styled(motion.div)`
    display: flex;
    width: 100%;
    max-width: 30rem;
    margin: auto;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem 1rem;
`

const Name = styled(motion.h1)`
    font-family: agenda, sans-serif;
    font-weight: 300;
    font-style: normal;
    margin: 0 auto;
    /* margin-bottom: 1.4rem; */
    color: #000;
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    position: relative;

    /* display: */


    /* .ipa { */
    /*   display: inline-flex; */
    /*   flex-direction: column; */

    /*   & span:first-child { */
    /*     font-family: "Times New Roman", serif; */
    /*     text-transform: none; */
    /*   } */
    /* } */
    ::before {
      content: "/ˈeɪ̯mən/";
      font-family: "Times New Roman", serif;
      text-transform: none;
      font-size: 1.2rem;
      letter-spacing: 0;
      position: absolute;
      top: -1rem;
      opacity: 0.5;
    }
`

const Title = styled(motion.div)`
    /* margin: 0 auto; */
    margin-right: auto;
    color: #444;
    /* @media (prefers-color-scheme: dark) {
        color: #aaa;
    } */
    font-size: 1.2rem;
    margin-bottom: 1rem;
`

const ContactJuice = styled(motion.div)`
    display: flex;
    width: 100%;
    /* justify-content: center; */
    /* flex: 1; */
    margin-left: -0.35rem;
`

const ContactLink = styled(External)`
    padding-left: 0.35rem;
    padding-right: 0.35rem;
    font-size: 1.2rem;
`
// const Component = React.forwardRef((props: any, ref: any) => <Link ref={ref} />)

// const Link = motion(Component)

const Home = () => {
  const projects = [
    { title: "Sqrl", desc: "A modern timetable planner for U of T" },
    { title: "Crossy", desc: "Solving crosswords collaboratively" },
    // { title: "", desc: "Solve crosswords collaboratively" },
    // { title: "BinoculaRSS", desc: "" },
    { title: "Hermes", desc: "Delivering projects to clients" },
    { title: "Wikigraph", desc: "Representing Wikipedia with a graph" },
    // { title: "Notepool", desc: "Sharing notes with your class" },
  ]
  return (
    <div>
      <AppComponent initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <div>
          <Name>Eamon Ma</Name>
          <Title>&ldquo;designer&rdquo;</Title>
        </div>
        <Section>
          <SectionHeading>projects</SectionHeading>
          {projects.map((project) => (
            <Juice layout>
              <JuiceHeading layout layoutId={project.title}>
                <Link to={`/${project.title.toLowerCase()}`}>
                  {project.title}
                </Link>
              </JuiceHeading>
              <JuiceDescription layout layoutId={project.desc}>
                <Link to={`/${project.title.toLowerCase()}`}>
                  {project.desc}.{" "}
                </Link>
              </JuiceDescription>
              {/* {!project.noMore && ( */}
              <MoreLink to={`/${project.title.toLowerCase()}`}>
                {/* More */}
                {/* <span */}
                {/*     style={{ */}
                {/*         fontSize: "1rem", */}
                {/*         position: "relative", */}
                {/*         display: "inline-block", */}
                {/*         bottom: "0.12rem", */}
                {/*         left: "0.2rem", */}
                {/*         fontWeight: 600, */}
                {/*     }} */}
                {/* > */}
                {/*     &#9002; */}
                {/* </span> */}
                →
              </MoreLink>
            </Juice>
          ))}
        </Section>
        <Section>
          <SectionHeading>contact</SectionHeading>
          <ContactJuice>
            <ContactLink href="https://github.com/eamonma">
              GitHub
            </ContactLink>
            <ContactLink href="mailto:m@eamonma.com">
              Email
            </ContactLink>
            <ContactLink href="https://instagram.com/eam.on">
              Instagram
            </ContactLink>
            <ContactLink href="https://linkedin.com/in/eamonma">
              LinkedIn
            </ContactLink>
          </ContactJuice>
        </Section>
        <Section>
          <SectionHeading>Blog</SectionHeading>
          <JuiceDescription>Coming soon&trade;</JuiceDescription>
        </Section>
      </AppComponent>
    </div>
  )
}

export default Home
