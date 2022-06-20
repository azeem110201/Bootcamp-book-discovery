/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Moleculesheadernavwoicon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Home: {}, Moleculesheadernavwoicon: {} },
      variantValues: { property1: "headernav", property2: "unselected" },
    },
    {
      overrides: { Home: { fontWeight: "500" }, Moleculesheadernavwoicon: {} },
      variantValues: { property1: "headernav", property2: "selected" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="4px 4px 4px 4px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesheadernavwoicon")}
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
        children="Home"
        {...getOverrideProps(overrides, "Home")}
      ></Text>
    </Flex>
  );
}
