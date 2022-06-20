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
export default function Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon(
  props
) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      alignItems="center"
      position="relative"
      padding="4px 4px 4px 4px"
      {...rest}
      {...getOverrideProps(
        overrides,
        "Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon"
      )}
    >
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Explore"
        {...getOverrideProps(overrides, "Explore")}
      ></Text>
      <Atomsiconsdropdown
        display="flex"
        gap="10px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="16px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/icons/dropdown")}
      ></Atomsiconsdropdown>
    </Flex>
  );
}
