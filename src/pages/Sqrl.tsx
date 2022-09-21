import React from "react";
import { Elaboration } from "../components/project";
import Project from "../Project";
import { AnchorLink, External } from "../components/section";
import styled from "styled-components";

const ParallelLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Sqrl = (props: any) => {
  return (
    <Project heading="Sqrl" desc="A modern timetable planner for U of T">
      <Elaboration>
        With{" "}
        <AnchorLink href="https://github.com/GalacticGlum">
          Shon Verch
        </AnchorLink>{" "}
        and{" "}
        <AnchorLink href="https://github.com/sqrl-planner/sqrl-client/contributors">
          collaborators
        </AnchorLink>
        .
      </Elaboration>
      <Elaboration>
        {/* Sqrl is a modern timetable planner for the University of Toronto. The project started out of frustration from existing solutions. */}
Built with TypeScript, Next.js (React), Apollo GraphQL, Flask, and MongoDB for students to plan their courses; animate app UI with Framer Motion; implemented GitHub Actions CI/CD with Docker and pylint for the backend services, and Husky for the frontend.
      </Elaboration>
      <Elaboration>
        <ParallelLinks>
          <External href="https://github.com/eamonma/notepool">
            See on GitHub
          </External>
          <External href="https://sqrlplanner.com">
            Try Sqrl
          </External>
        </ParallelLinks>
      </Elaboration>
      {/* Set width and height to prevent reflow */}
    </Project>
  );
};

export default Sqrl;
