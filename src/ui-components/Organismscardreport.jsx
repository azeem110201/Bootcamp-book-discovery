/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Atomsiconscurrentreading from "./Atomsiconscurrentreading";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Organismscardreport(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="273px"
      height="104px"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "Organismscardreport")}
    >
      <Atomsiconscurrentreading
        display="flex"
        gap="10px"
        position="absolute"
        top="32px"
        left="24px"
        direction="row"
        width="40px"
        alignItems="center"
        padding="8px 8px 8px 8px"
        {...getOverrideProps(overrides, "atoms/icons/currentreading")}
      ></Atomsiconscurrentreading>
      <Flex
        gap="4px"
        position="absolute"
        top="24px"
        left="105.5px"
        direction="column"
        width="118px"
        height="56px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 16")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CURRENTLY READING"
          {...getOverrideProps(overrides, "CURRENTLY READING")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(96,96,96,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="26"
          {...getOverrideProps(overrides, "26")}
        ></Text>
      </Flex>
    </View>
  );
}
