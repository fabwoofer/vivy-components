import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Topbar } from "../src/index";
import logo from "../public/images/logo.svg";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  .layout-body {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

storiesOf("Topbar", module).add(
  "default",
  withInfo("The raw topbar component")(() => (
    <LayoutStyles>
      <Topbar>
        <a
          className="link"
          href="https://www.vivy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={logo} alt="Vivy Logo" />
        </a>
      </Topbar>
    </LayoutStyles>
  ))
);