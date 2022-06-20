/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import Atomsiconsstar from "./Atomsiconsstar";
export default function Organismscardbyauthor(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="134px"
      position="relative"
      boxShadow="0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Organismscardbyauthor")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="91px"
        height="118px"
        position="absolute"
        top="8px"
        left="8px"
        {...getOverrideProps(overrides, "Group 47")}
      >
        <Image
          width="91px"
          height="118px"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="125px"
        height="90px"
        position="absolute"
        top="24px"
        left="107px"
        {...getOverrideProps(overrides, "Group 3789")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="26px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Catergory - Chemistry"
          {...getOverrideProps(overrides, "Catergory - Chemistry")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(23,23,23,1)"
          lineHeight="22px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Inorganic Chemistry"
          {...getOverrideProps(overrides, "Inorganic Chemistry")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="45px"
          height="24px"
          position="absolute"
          top="46px"
          left="0px"
          {...getOverrideProps(overrides, "Group 46")}
        >
          <Atomsiconsstar
            display="flex"
            gap="10px"
            position="absolute"
            top="0px"
            left="21px"
            direction="column"
            overflow="hidden"
            padding="6px 6px 6px 6px"
            {...getOverrideProps(overrides, "atoms/icons/star")}
          ></Atomsiconsstar>
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(137,137,137,1)"
            lineHeight="16px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="4px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4.5"
            {...getOverrideProps(overrides, "4.5")}
          ></Text>
        </View>
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="74px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="830 reviews"
          {...getOverrideProps(overrides, "830 reviews")}
        ></Text>
      </View>
      <Flex
        gap="3px"
        position="absolute"
        top="8px"
        left="216px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="7.5px 3.5px 7.5px 3.5px"
        {...getOverrideProps(overrides, "molecules/icons/more")}
      ></Flex>
    </View>
  );
}
