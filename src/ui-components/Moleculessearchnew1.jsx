/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Atomsiconssearchnew1 from "./Atomsiconssearchnew1";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Moleculessearchnew1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      width="513px"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(227,227,227,1)"
      borderRadius="8px"
      padding="3px 15px 3px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculessearchnew1")}
    >
      <Flex
        gap="4px"
        direction="row"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="30px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 27")}
      >
        <Atomsiconssearchnew1
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/searchnew1")}
        ></Atomsiconssearchnew1>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="30px"
          position="relative"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "Frame 14")}
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Search here by book title, author or ISBN"
            {...getOverrideProps(
              overrides,
              "Search here by book title, author or ISBN"
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
