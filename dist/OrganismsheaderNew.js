function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import Atomsiconsnotification from "./Atomsiconsnotification";
import Atomsavatar from "./Atomsavatar";
import Atomslogonew from "./Atomslogonew";
export default function OrganismsheaderNew(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "1366px",
    height: "68px",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundImage: "linear-gradient(-90deg, rgba(140,82,198,1), rgba(104,55,153,1))"
  }, rest, getOverrideProps(overrides, "OrganismsheaderNew")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "19.1px",
    left: "300px",
    direction: "row",
    alignItems: "flex-start",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 33")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "30px",
    position: "relative",
    padding: "4px 8px 4px 8px"
  }, getOverrideProps(overrides, "molecules/headernav/wo icon")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Home"
  }, getOverrideProps(overrides, "Home")))), /*#__PURE__*/React.createElement(Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon, _extends({
    display: "flex",
    gap: "4px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "30px",
    position: "relative",
    borderRadius: "4px",
    padding: "4px 4px 4px 8px"
  }, getOverrideProps(overrides, "molecules/button/primary/molecules/headernav/wo icon/molecules/headernav/w icon8242836"))), /*#__PURE__*/React.createElement(Moleculesbuttonprimarymoleculesheadernavwoiconmoleculesheadernavwicon, _extends({
    display: "flex",
    gap: "4px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "30px",
    position: "relative",
    borderRadius: "4px",
    padding: "4px 4px 4px 8px"
  }, getOverrideProps(overrides, "molecules/button/primary/molecules/headernav/wo icon/molecules/headernav/w icon8242837")))), /*#__PURE__*/React.createElement(Moleculessearchnew1, _extends({
    display: "flex",
    gap: "4px",
    position: "absolute",
    top: "15px",
    left: "607px",
    right: "246px",
    direction: "row",
    width: "513px",
    alignItems: "center",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "3px 15px 3px 15px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "molecules/searchnew1"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    position: "absolute",
    top: "14px",
    right: "101px",
    direction: "row",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 32")), /*#__PURE__*/React.createElement(Atomsiconsnotification, _extends({
    width: "24px",
    height: "22.24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/notification"))), /*#__PURE__*/React.createElement(Atomsavatar, _extends({
    display: "flex",
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "40px",
    position: "relative",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "atoms/avatar")))), /*#__PURE__*/React.createElement(Atomslogonew, _extends({
    display: "flex",
    gap: "10px",
    position: "absolute",
    top: "19px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/logonew"))));
}