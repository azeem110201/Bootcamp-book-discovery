/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Atomsiconsvisibility from "./Atomsiconsvisibility";
export default function Moleculesinputfieldlabelwiconfocused(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesinputfieldlabelwiconfocused")}
    >
      <Flex
        gap="4px"
        direction="column"
        width="216px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(96,96,96,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Username"
          {...getOverrideProps(overrides, "Label7162861")}
        ></Text>
      </Flex>
      <View
        width="433px"
        height="48px"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(23,23,23,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="16px"
          left="12px"
          right="341px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Akshay Sunder"
          {...getOverrideProps(overrides, "Label7162863")}
        ></Text>
        <Atomsiconsvisibility
          display="flex"
          gap="10px"
          position="absolute"
          top="12px"
          left="397px"
          direction="row"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/visibility")}
        ></Atomsiconsvisibility>
      </View>
    </Flex>
  );
}
