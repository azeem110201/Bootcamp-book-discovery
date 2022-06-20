/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Atomsiconsvisibility(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconsvisibility")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "visibility_black_24dp 1")}
      >
        <Icon
          width="24px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector291144")}
        ></Icon>
        <Icon
          width="16px"
          height="12px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 12 }}
          paths={[
            {
              d: "M8 1.6C10.7564 1.6 13.2145 3.304 14.4145 6C13.2145 8.696 10.7564 10.4 8 10.4C5.24364 10.4 2.78545 8.696 1.58545 6C2.78545 3.304 5.24364 1.6 8 1.6ZM8 0C4.36364 0 1.25818 2.488 0 6C1.25818 9.512 4.36364 12 8 12C11.6364 12 14.7418 9.512 16 6C14.7418 2.488 11.6364 0 8 0ZM8 4C9.00364 4 9.81818 4.896 9.81818 6C9.81818 7.104 9.00364 8 8 8C6.99636 8 6.18182 7.104 6.18182 6C6.18182 4.896 6.99636 4 8 4ZM8 2.4C6.19636 2.4 4.72727 4.016 4.72727 6C4.72727 7.984 6.19636 9.6 8 9.6C9.80364 9.6 11.2727 7.984 11.2727 6C11.2727 4.016 9.80364 2.4 8 2.4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="25%"
          bottom="25%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector291145")}
        ></Icon>
      </View>
    </Flex>
  );
}
