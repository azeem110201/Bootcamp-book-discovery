function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Atomsiconsdropdown(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    alignItems: "flex-start",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "Atomsiconsdropdown")), /*#__PURE__*/React.createElement(View, _extends({
    width: "16px",
    height: "16px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "arrow_drop_down_black_24dp (2) 1")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "16px",
    height: "16px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 16,
      height: 16
    },
    paths: [],
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%"
  }, getOverrideProps(overrides, "Vector64913"))), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "4.787109375px",
    height: "3.0616455078125px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 4.787109375,
      height: 3.0616455078125
    },
    paths: [{
      d: "M0.197651 1.14L1.92432 2.86667C2.18432 3.12667 2.60432 3.12667 2.86432 2.86667L4.59098 1.14C5.01098 0.72 4.71098 0 4.11765 0L0.664318 0C0.0709847 0 -0.222348 0.72 0.197651 1.14Z",
      fill: "rgba(255,255,255,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "41.67%",
    bottom: "39.2%",
    left: "35.06%",
    right: "35.02%"
  }, getOverrideProps(overrides, "Vector64914")))));
}