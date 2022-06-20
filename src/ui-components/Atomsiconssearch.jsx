/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Atomsiconssearch(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconssearch")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 28")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="0px"
          left="0px"
          direction="row"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/search")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
