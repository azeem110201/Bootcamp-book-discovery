/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon from "./Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon";
import Moleculessearchnew1 from "./Moleculessearchnew1";
import Atomsavatar from "./Atomsavatar";
import Atomsiconsnotification from "./Atomsiconsnotification";
import Atomslogonew from "./Atomslogonew";
export default function OrganismsheaderInactive3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1366px"
      height="68px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(140,82,198,1), rgba(104,55,153,1))"
      {...rest}
      {...getOverrideProps(overrides, "OrganismsheaderInactive3")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="28.08%"
        bottom="27.8%"
        left="21.96%"
        right="74.08%"
        direction="row"
        alignItems="center"
        padding="4px 8px 4px 8px"
        {...getOverrideProps(overrides, "molecules/headernav/wo icon")}
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
      <Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon
        display="flex"
        gap="4px"
        position="absolute"
        top="19.1px"
        left="366px"
        direction="row"
        alignItems="center"
        borderRadius="4px"
        padding="4px 4px 4px 8px"
        {...getOverrideProps(
          overrides,
          "molecules/button/primary/molecules/headernav/wo icon/molecules/headernav/w icon7763454"
        )}
      ></Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon>
      <Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon
        display="flex"
        gap="4px"
        position="absolute"
        top="19.1px"
        left="457px"
        direction="row"
        alignItems="center"
        borderRadius="4px"
        padding="4px 4px 4px 8px"
        {...getOverrideProps(
          overrides,
          "molecules/button/primary/molecules/headernav/wo icon/molecules/headernav/w icon7763455"
        )}
      ></Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon>
      <Moleculessearchnew1
        display="flex"
        gap="4px"
        position="absolute"
        top="15px"
        left="607px"
        direction="row"
        width="513px"
        alignItems="center"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="8px"
        padding="3px 15px 3px 15px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "molecules/searchnew1")}
      ></Moleculessearchnew1>
      <Atomsavatar
        display="flex"
        gap="10px"
        position="absolute"
        top="20.59%"
        bottom="20.59%"
        left="89.68%"
        right="7.39%"
        direction="row"
        alignItems="flex-start"
        padding="4px 4px 4px 4px"
        {...getOverrideProps(overrides, "atoms/avatar")}
      ></Atomsavatar>
      <Atomsiconsnotification
        position="absolute"
        top="33.64%"
        bottom="33.64%"
        left="86.16%"
        right="12.08%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/icons/notification")}
      ></Atomsiconsnotification>
      <Atomslogonew
        display="flex"
        gap="10px"
        position="absolute"
        top="19px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/logonew")}
      ></Atomslogonew>
    </View>
  );
}
