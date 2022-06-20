/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Atomsiconspageleft(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="6px 6px 6px 6px"
      {...rest}
      {...getOverrideProps(overrides, "Atomsiconspageleft")}
    >
      <Icon
        width="3px"
        height="6px"
        viewBox={{ minX: 0, minY: 0, width: 3, height: 6 }}
        paths={[
          {
            d: "M2.64645 6.35355C2.84171 6.54882 3.15829 6.54882 3.35355 6.35355C3.54882 6.15829 3.54882 5.84171 3.35355 5.64645L2.64645 6.35355ZM0 3L-0.353553 2.64645C-0.548816 2.84171 -0.548816 3.15829 -0.353553 3.35355L0 3ZM3.35355 0.353553C3.54882 0.158291 3.54882 -0.158291 3.35355 -0.353553C3.15829 -0.548816 2.84171 -0.548816 2.64645 -0.353553L3.35355 0.353553ZM3.35355 5.64645L0.353553 2.64645L-0.353553 3.35355L2.64645 6.35355L3.35355 5.64645ZM0.353553 3.35355L3.35355 0.353553L2.64645 -0.353553L-0.353553 2.64645L0.353553 3.35355Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeLinejoin: "round",
            strokeWidth: 1,
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
