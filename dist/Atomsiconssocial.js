function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Atomsiconssocial(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    alignItems: "center",
    position: "relative",
    padding: "4px 6px 4px 6px"
  }, rest, getOverrideProps(overrides, "Atomsiconssocial")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    width: "12px",
    height: "16px",
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Group")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "12px",
    height: "16px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 12,
      height: 16
    },
    paths: [{
      d: "M1.6693 0.154141L3.10601 1.64107L2.74592 2.01426C1.63176 3.16817 1.01697 4.70598 1.01697 6.33908C1.01697 7.97155 1.63134 9.5079 2.74592 10.663C3.86049 11.8183 5.34281 12.455 6.918 12.455C8.49311 12.455 9.97529 11.8183 11.0901 10.663C11.2891 10.4569 11.6101 10.4569 11.8093 10.6634C12.008 10.8687 12.008 11.2021 11.8091 11.4082C10.5018 12.763 8.76529 13.509 6.91803 13.509L6.62535 13.509L6.62535 14.946L10.1228 14.946C10.4042 14.946 10.6313 15.1814 10.6313 15.473C10.6313 15.7646 10.4042 16 10.1228 16L2.11085 16C1.82945 16 1.60236 15.7646 1.60236 15.473C1.60236 15.1814 1.82945 14.946 2.11085 14.946L5.60827 14.946L5.60827 13.3789L5.38022 13.3255C4.10434 13.0265 2.95225 12.3687 2.02703 11.409C0.720102 10.0544 0 8.25387 0 6.33989C0 4.69717 0.528247 3.13479 1.51229 1.86394L1.6768 1.65155L1.49068 1.45926L0.950269 0.900776C0.751244 0.694641 0.751029 0.361496 0.949409 0.154813C1.14843 -0.0514367 1.46981 -0.0515481 1.66937 0.154143L1.6693 0.154141ZM6.9826 11.5235C4.21599 11.5235 1.9652 9.19076 1.9652 6.32322C1.9652 3.45582 4.21607 1.12327 6.9826 1.12327C9.74922 1.12327 12 3.45596 12 6.32322C12 9.19062 9.74914 11.5235 6.9826 11.5235Z",
      fill: "rgba(255,181,0,1)",
      fillRule: "evenodd"
    }],
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%"
  }, getOverrideProps(overrides, "Vector")))));
}