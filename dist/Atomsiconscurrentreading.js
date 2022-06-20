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
export default function Atomsiconscurrentreading(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    alignItems: "flex-start",
    position: "relative",
    padding: "8px 8px 8px 8px"
  }, rest, getOverrideProps(overrides, "Atomsiconscurrentreading")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "24px",
    height: "24px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 24,
      height: 24
    },
    paths: [{
      d: "M12 6.85714C13.8937 6.85714 15.4286 5.32225 15.4286 3.42857C15.4286 1.5349 13.8937 0 12 0C10.1063 0 8.57143 1.5349 8.57143 3.42857C8.57143 5.32225 10.1063 6.85714 12 6.85714ZM24 12L24 13.7143C24 14.6611 23.2326 15.4286 22.2857 15.4286L22.2857 10.2857C23.2326 10.2857 24 11.0532 24 12ZM0 13.7143L0 12C0 11.0532 0.767449 10.2857 1.71429 10.2857L1.71429 15.4286C0.767449 15.4286 0 14.6611 0 13.7143ZM22.2857 15.4286L22.2857 20.5714C15.4286 20.5714 12 24 12 24C12 24 8.57143 20.5714 1.71429 20.5714L1.71429 15.4286C2.65922 15.4286 3.42857 14.6611 3.42857 13.7143C3.42857 12.7693 2.66112 12 1.71429 11.9931L1.71429 6.85714C8.57143 6.85714 12 10.2857 12 10.2857C12 10.2857 15.4286 6.85714 22.2857 6.85714L22.2857 12C21.3408 12 20.5714 12.7674 20.5714 13.7143C20.5714 14.6592 21.3389 15.4286 22.2857 15.4286Z",
      fill: "rgba(137,137,137,1)",
      fillRule: "evenodd"
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Vector"))));
}