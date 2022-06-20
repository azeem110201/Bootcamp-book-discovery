/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Atomsiconsbooklogo from "./Atomsiconsbooklogo";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Atomslogonew(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomslogonew")}
    >
      <Atomsiconsbooklogo
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/icons/booklogo")}
      ></Atomsiconsbooklogo>
      <Text
        fontFamily="Roboto Condensed"
        fontSize="20px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="BOOK - ISTA"
        {...getOverrideProps(overrides, "BOOK - ISTA")}
      ></Text>
    </Flex>
  );
}
