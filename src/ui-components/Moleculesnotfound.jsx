/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Moleculesnotfound(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      boxShadow="0px 0px 16px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesnotfound")}
    >
      <View
        width="513px"
        height="42px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 18")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="513px"
          height="42px"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 29")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            direction="row"
            width="513px"
            alignItems="center"
            borderRadius="8px"
            padding="6px 16px 6px 16px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "molecules/search")}
          ></Flex>
        </View>
      </View>
    </Flex>
  );
}
