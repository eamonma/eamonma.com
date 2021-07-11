import { motion } from "framer-motion"
import styled from "styled-components"

export const Elaboration = styled(motion.div)`
    width: 40rem;
    max-width: 100vw;
    padding: 1rem;
    /* 
    @media (max-width: 550px) {
        padding: 0 1rem;
    } */
`

export const Image = styled.img`
    margin: 2rem 0;
    width: 1200px;
    max-width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: 3px 3px 12px -6px rgba(0, 0, 0, 0.4);
` as any
