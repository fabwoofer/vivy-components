import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { InputPassword } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;
storiesOf("InputPassword", module)
  .add(
    "show password false",
    withInfo()(() => (
      <PageLayout>
        <InputPassword
          showPassword={false}
          id="name"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ))
  )
  .add(
    "show password true",
    withInfo()(() => (
      <PageLayout>
        <InputPassword
          showPassword
          id="name"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ))
  )
  .add(
    "with errors",
    withInfo()(() => (
      <PageLayout>
        <InputPassword
          showPassword
          id="password"
          placeholder="Password"
          label="Password"
          errors={{
            password: [{ message: "look there is an error", field: "password" }]
          }}
        />
      </PageLayout>
    ))
  )
  .add(
    "with multiple errors",
    withInfo()(() => (
      <PageLayout>
        <InputPassword
          showPassword
          id="password"
          placeholder="Password"
          label="Password"
          errors={{
            password: [
              { message: "look there is an error", field: "password" },
              { message: "look there is another error", field: "password" }
            ]
          }}
        />
      </PageLayout>
    ))
  );