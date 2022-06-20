function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconsdropdown from "./Atomsiconsdropdown";
export default function Moleculesdropdown1(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "column",
    justifyContent: "center",
    position: "relative",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "9px 15px 9px 15px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "Moleculesdropdown1")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    width: "96px",
    height: "22px",
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Group 14")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(96,96,96,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    position: "absolute",
    top: "0px",
    left: "0px",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Categories"
  }, getOverrideProps(overrides, "Categories"))), /*#__PURE__*/React.createElement(Atomsiconsdropdown, _extends({
    display: "flex",
    gap: "10px",
    position: "absolute",
    top: "4px",
    left: "80px",
    direction: "row",
    alignItems: "flex-start",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/dropdown")))));
}