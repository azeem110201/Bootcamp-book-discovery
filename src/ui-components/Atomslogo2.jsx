/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Atomslogo2(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="12.5px 12.5px 12.5px 12.5px"
      {...rest}
      {...getOverrideProps(overrides, "Atomslogo2")}
    >
      <Image
        width="35px"
        height="35px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image 3")}
      ></Image>
    </Flex>
  );
}
