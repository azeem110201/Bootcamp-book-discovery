function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Atomsiconssearchnew1 from "./Atomsiconssearchnew1";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconsclose from "./Atomsiconsclose";
export default function Moleculessearchnew1closeicon(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "175px",
    direction: "row",
    width: "513px",
    alignItems: "center",
    position: "relative",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "3px 15px 3px 15px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "Moleculessearchnew1closeicon")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "30px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 26")), /*#__PURE__*/React.createElement(Atomsiconssearchnew1, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/searchnew1"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "30px",
    position: "relative",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "Frame 14")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(96,96,96,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Search here by book title, author or ISBN"
  }, getOverrideProps(overrides, "Search here by book title, author or ISBN"))))), /*#__PURE__*/React.createElement(Atomsiconsclose, _extends({
    display: "flex",
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/close"))));
}