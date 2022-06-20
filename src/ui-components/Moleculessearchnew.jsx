/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Moleculessearchnew(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculessearchnew")}
    >
      <Flex
        gap="4px"
        direction="row"
        width="513px"
        alignItems="center"
        shrink="0"
        height="38px"
        position="relative"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="8px"
        padding="3px 15px 3px 15px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "molecules/searchnew")}
      ></Flex>
    </Flex>
  );
}
