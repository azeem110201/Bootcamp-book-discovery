function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Organismscardtopics(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    direction: "column",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "Organismscardtopics")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "178px",
    height: "134px",
    shrink: "0",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rectangle 10"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "GEOGRAPHY"
  }, getOverrideProps(overrides, "GEOGRAPHY"))));
}