function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps, getOverridesFromVariants, mergeVariantsAndOverrides } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Moleculesheadernavwoicon(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [{
    overrides: {
      Home: {},
      Moleculesheadernavwoicon: {}
    },
    variantValues: {
      property1: "headernav",
      property2: "unselected"
    }
  }, {
    overrides: {
      Home: {
        fontWeight: "500"
      },
      Moleculesheadernavwoicon: {}
    },
    variantValues: {
      property1: "headernav",
      property2: "selected"
    }
  }];
  const overrides = mergeVariantsAndOverrides(getOverridesFromVariants(variants, props), overridesProp || {});
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    alignItems: "flex-start",
    position: "relative",
    padding: "4px 4px 4px 4px"
  }, rest, getOverrideProps(overrides, "Moleculesheadernavwoicon")), /*#__PURE__*/React.createElement(Text, _extends({
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
  }, getOverrideProps(overrides, "Home"))));
}