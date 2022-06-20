/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Atomsiconschevron(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="6px 9px 6px 9px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconschevron")}
    >
      <Icon
        width="6px"
        height="12px"
        viewBox={{ minX: 0, minY: 0, width: 6, height: 12 }}
        paths={[
          {
            d: "M-0.707107 11.2929C-1.09763 11.6834 -1.09763 12.3166 -0.707107 12.7071C-0.316583 13.0976 0.316583 13.0976 0.707107 12.7071L-0.707107 11.2929ZM6 6L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L6 6ZM0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM0.707107 12.7071L6.70711 6.70711L5.29289 5.29289L-0.707107 11.2929L0.707107 12.7071ZM6.70711 5.29289L0.707107 -0.707107L-0.707107 0.707107L5.29289 6.70711L6.70711 5.29289Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeLinejoin: "round",
            strokeWidth: 2,
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
