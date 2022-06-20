/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function MoleculesCheckbox(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MoleculesCheckbox")}
    >
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Checkbox")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(227,227,227,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "checkbox\u2014bg")}
        ></View>
      </View>
    </Flex>
  );
}
