/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconsdropdown from "./Atomsiconsdropdown";
export default function Moleculesdropdown1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      position="relative"
      border="1px SOLID rgba(227,227,227,1)"
      borderRadius="8px"
      padding="9px 15px 9px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesdropdown1")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="96px"
        height="22px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 14")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(96,96,96,1)"
          lineHeight="22px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Categories"
          {...getOverrideProps(overrides, "Categories")}
        ></Text>
        <Atomsiconsdropdown
          display="flex"
          gap="10px"
          position="absolute"
          top="4px"
          left="80px"
          direction="row"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/dropdown")}
        ></Atomsiconsdropdown>
      </Flex>
    </Flex>
  );
}
