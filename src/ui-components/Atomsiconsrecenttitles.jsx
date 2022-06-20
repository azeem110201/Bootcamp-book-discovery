/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Atomsiconsrecenttitles(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconsrecenttitles")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "subtitles_black_24dp 1")}
      >
        <Icon
          width="20px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 16 }}
          paths={[
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM3 8L5 8C5.55 8 6 8.45 6 9C6 9.55 5.55 10 5 10L3 10C2.45 10 2 9.55 2 9C2 8.45 2.45 8 3 8ZM11 14L3 14C2.45 14 2 13.55 2 13C2 12.45 2.45 12 3 12L11 12C11.55 12 12 12.45 12 13C12 13.55 11.55 14 11 14ZM17 14L15 14C14.45 14 14 13.55 14 13C14 12.45 14.45 12 15 12L17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14ZM17 10L9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8L17 8C17.55 8 18 8.45 18 9C18 9.55 17.55 10 17 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </Flex>
  );
}
