function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Moleculesnotfound(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "column",
    position: "relative",
    boxShadow: "0px 0px 16px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "Moleculesnotfound")), /*#__PURE__*/React.createElement(View, _extends({
    width: "513px",
    height: "42px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 18")), /*#__PURE__*/React.createElement(View, _extends({
    padding: "0px 0px 0px 0px",
    width: "513px",
    height: "42px",
    position: "absolute",
    top: "0px",
    left: "0px"
  }, getOverrideProps(overrides, "Group 29")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    position: "absolute",
    top: "0px",
    left: "0px",
    direction: "row",
    width: "513px",
    alignItems: "center",
    borderRadius: "8px",
    padding: "6px 16px 6px 16px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "molecules/search"))))));
}