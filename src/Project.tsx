import { motion } from "framer-motion"
import React, { useCallback, useEffect } from "react"
import { Link, LinkProps, useHistory } from "react-router-dom"
import styled from "styled-components"
import {
    Juice,
    Section,
    JuiceHeading,
    JuiceDescription,
} from "./components/section"

const Main = styled(motion.div)`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    justify-content: center;
`

const JuiceProject = styled(Juice)`
    /* flex-direction: column;
    align-items: center; */

    @media (hover: hover) {
        &:hover {
            h3,
            h3 a {
                color: #333;
            }

            div,
            div a {
                color: #666;
            }
        }
    }

    @media (min-width: 550px) {
        align-items: center;
        flex-direction: column;
    }
`

const SectionProject = styled(Section)`
    align-items: center;

    @media (max-width: 550px) {
        padding-left: 0.3rem;
        align-items: flex-start;
    }
`

const Info = styled(motion.main)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #333;
`

const CloseLink = motion<LinkProps>(Link)

const Close = styled(CloseLink)`
    position: fixed;
    display: block;
    height: 3rem;
    width: 3rem;
    font-size: 0;
    top: 2.5rem;
    right: 1.5rem;
    @media (max-width: 550px) {
        right: 1rem;
    }
    color: transparent;
    transform: translateY(-1rem);
    background: hsla(0, 0%, 98.0392156862745%, 0.95);
    backdrop-filter: blur(2px);
    padding: 0.6rem;
    border-radius: 100%;

    &::before,
    &::after {
        position: absolute;
        display: block;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: "";
        width: 50%;
        height: 0.15rem; /* cross thickness */
        background-color: #888;
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }

    @media (hover: hover) {
        &:hover::before,
        &:hover::after {
            transform: rotate(0deg);
        }
    }

    /* @media (prefers-color-scheme: dark) {
        & {
            background-color: #222;
        }
    } */
`

const JuiceHeadingProject = styled(JuiceHeading)`
    &,
    & a,
    & a:visited {
        color: #333;
        text-decoration: none;
        font-size: 2.8rem;
        line-height: 2.8rem;
        margin: 0;
        margin-top: 1rem;

        /* @media (prefers-color-scheme: dark) {
            color: #fafafa;
        } */
    }
`

const JuiceDescriptionProject = styled(JuiceDescription)`
    &,
    & a,
    & a:visited,
    & a:hover {
        text-decoration: none;
        color: #666;
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
    }
`

const Project = ({
    heading,
    desc,
    children,
}: {
    heading: string
    desc: string
    children: React.ReactNode
}) => {
    const history = useHistory()

    const escFunction = useCallback(
        (event) => {
            if (event.keyCode === 27) {
                history.push("/")
            }
        },
        [history]
    )

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)

        return () => {
            document.removeEventListener("keydown", escFunction, false)
        }
    }, [escFunction])

    return (
        <Main>
            <SectionProject>
                <JuiceProject>
                    <JuiceHeadingProject layoutId={heading}>
                        {heading}
                    </JuiceHeadingProject>
                    <JuiceDescriptionProject layoutId={desc}>
                        {desc}
                    </JuiceDescriptionProject>
                </JuiceProject>
            </SectionProject>
            <Info
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {children}
            </Info>
            <Close to="/">Close</Close>
        </Main>
    )
}

export default Project
