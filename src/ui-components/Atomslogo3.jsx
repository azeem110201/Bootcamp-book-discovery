/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Atomslogo3(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      {...rest}
      {...getOverrideProps(overrides, "Atomslogo3")}
    >
      <Image
        width="40px"
        height="40px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image 4")}
      ></Image>
    </Flex>
  );
}
