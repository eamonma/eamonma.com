import React from "react";
import { Elaboration } from "../components/project";
import Project from "../Project";
import { External } from "../components/section";
import styled from "styled-components";

const ParallelLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Crossy = (props: any) => {
  return (
    <Project heading="Crossy" desc="Solving crosswords collaboratively">
      {/* <Elaboration></Elaboration> */}
      <Elaboration>
        <ParallelLinks>
          {/* <External href="https://github.com/eamonma/crossy-bot"> */}
          {/*   See on GitHub */}
          {/* </External> */}
          <External href="https://crossy.me">
            See website (Work in progress)
          </External>
        </ParallelLinks>
      </Elaboration>
      {/* Set width and height to prevent reflow */}
    </Project>
  );
};

export default Crossy;
