/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Atomsavatar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="4px 4px 4px 4px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsavatar")}
    >
      <Icon
        width="32px"
        height="32px"
        viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
        paths={[
          {
            d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 7")}
      ></Icon>
    </Flex>
  );
}
