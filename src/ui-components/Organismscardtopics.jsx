/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Organismscardtopics(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Organismscardtopics")}
    >
      <Image
        width="178px"
        height="134px"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 10")}
      ></Image>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="500"
        color="rgba(23,23,23,1)"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="GEOGRAPHY"
        {...getOverrideProps(overrides, "GEOGRAPHY")}
      ></Text>
    </Flex>
  );
}
