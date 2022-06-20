/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Moleculesbuttonprimarylarge(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="433px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(232,60,101,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesbuttonprimarylarge")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SIGN UP"
        {...getOverrideProps(overrides, "SIGN UP")}
      ></Text>
    </Flex>
  );
}
