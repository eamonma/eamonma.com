import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const SectionHeading = styled(motion.h2)`
    font-family: agenda, sans-serif;
    letter-spacing: 0.08rem;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 auto;
    margin-bottom: 0.4rem;
    color: #333;
`

export const Section = styled(motion.section)`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    padding: 0.4rem;
    margin: 0;
    margin-bottom: 0.8rem;
    position: relative;
`

export const Juice = styled(motion.div)`
    display: flex;
    /* width: 100%; */
    margin: 0.15rem 0;

    @media (min-width: 550px) {
        align-items: baseline;
        flex-direction: row;
    }
    @media (max-width: 550px) {
        /* align-items: center; */
        flex-direction: column;
        margin-bottom: 0.7rem;
    }

    &:first-of-type {
        margin-top: 0;
    }

    @media (hover: hover) {
        &:hover {
            h3,
            h3 a {
                color: hsl(0, 60%, 49.21568627450981%);
            }

            div,
            div a {
                color: #222;
            }
        }
    }
`

export const JuiceHeading = styled(motion.h3)`
    &,
    & a,
    /* & a:hover, */
    & a:visited {
        position: relative;
        transition: color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: ${({ theme }) => theme.red};
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0;
    }

    & a {
        &::after {
            position: relative;
            content: "°";
            font-size: 70%;
            top: -0.5em;
        }
        @media (min-width: 550px) {
            padding-right: 0.3rem;
        }
    }
`

export const JuiceDescription = styled(motion.div)`
    &,
    & a,
    /* & a:hover, */
    & a:visited {
        text-decoration: none;
        color: #444;
        font-size: 1.2rem;
    }
`

export const AnchorLink = styled(motion.a)`
    color: ${({ theme }) => theme.blue};
    transition: color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-decoration: none;

    @media (hover: hover) {
        &:hover {
            color: #314772;
        }
    }
`

export const External = styled(AnchorLink)`
    display: block;
`

export const MoreLink = styled(Link)`
    &,
    & a,
    & a:visited {
        text-decoration: none;
        color: ${({ theme }) => theme.blue};
        transition: color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
        text-decoration: none;
        padding-left: 0.6rem;

        @media (max-width: 550px) {
            padding-left: 0;
        }

        @media (hover: hover) {
            &:hover {
                color: #314772;
            }
        }
        font-size: 1.3rem;
    }
`
