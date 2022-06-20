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
export default function Button(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [{
    overrides: {
      label: {
        fontSize: "20px",
        color: "rgba(255,255,255,1)",
        lineHeight: "30px",
        children: "Primary Button"
      },
      Button: {
        border: "1px SOLID rgba(0,0,0,0)",
        borderRadius: "4px",
        padding: "7px 15px 7px 15px",
        backgroundColor: "rgba(4,125,149,1)"
      }
    },
    variantValues: {
      size: "large",
      isDisabled: "false",
      variation: "primary"
    }
  }, {
    overrides: {
      label: {
        fontSize: "20px",
        color: "rgba(92,102,112,1)",
        lineHeight: "30px",
        children: "Primary Button"
      },
      Button: {
        borderRadius: "4px",
        backgroundColor: "rgba(239,240,240,1)"
      }
    },
    variantValues: {
      size: "large",
      isDisabled: "true",
      variation: "primary"
    }
  }, {
    overrides: {
      label: {
        color: "rgba(255,255,255,1)",
        children: "Primary Button"
      },
      Button: {
        border: "1px SOLID rgba(0,0,0,0)",
        borderRadius: "4px",
        padding: "7px 15px 7px 15px",
        backgroundColor: "rgba(4,125,149,1)"
      }
    },
    variantValues: {
      size: "default",
      isDisabled: "false",
      variation: "primary"
    }
  }, {
    overrides: {
      label: {
        color: "rgba(92,102,112,1)",
        children: "Primary Button"
      },
      Button: {
        borderRadius: "4px",
        backgroundColor: "rgba(239,240,240,1)"
      }
    },
    variantValues: {
      size: "default",
      isDisabled: "true",
      variation: "primary"
    }
  }, {
    overrides: {
      label: {
        fontSize: "14px",
        color: "rgba(255,255,255,1)",
        lineHeight: "21px",
        children: "Primary Button"
      },
      Button: {
        border: "1px SOLID rgba(0,0,0,0)",
        borderRadius: "4px",
        padding: "5px 11px 5px 11px",
        backgroundColor: "rgba(4,125,149,1)"
      }
    },
    variantValues: {
      size: "small",
      isDisabled: "false",
      variation: "primary"
    }
  }, {
    overrides: {
      label: {
        fontSize: "14px",
        color: "rgba(92,102,112,1)",
        lineHeight: "21px",
        children: "Primary Button"
      },
      Button: {
        borderRadius: "4px",
        padding: "6px 12px 6px 12px",
        backgroundColor: "rgba(239,240,240,1)"
      }
    },
    variantValues: {
      size: "small",
      isDisabled: "true",
      variation: "primary"
    }
  }, {
    overrides: {
      label: {
        fontSize: "20px",
        lineHeight: "30px"
      },
      Button: {}
    },
    variantValues: {
      size: "large",
      isDisabled: "false",
      variation: "default"
    }
  }, {
    overrides: {
      label: {
        fontSize: "20px",
        color: "rgba(92,102,112,1)",
        lineHeight: "30px"
      },
      Button: {
        border: "1px SOLID rgba(239,240,240,1)",
        borderRadius: "4px",
        padding: "7px 15px 7px 15px"
      }
    },
    variantValues: {
      size: "large",
      isDisabled: "true",
      variation: "default"
    }
  }, {
    overrides: {
      label: {},
      Button: {}
    },
    variantValues: {
      size: "default",
      isDisabled: "false",
      variation: "default"
    }
  }, {
    overrides: {
      label: {
        color: "rgba(92,102,112,1)"
      },
      Button: {
        border: "1px SOLID rgba(239,240,240,1)",
        borderRadius: "4px",
        padding: "7px 15px 7px 15px"
      }
    },
    variantValues: {
      size: "default",
      isDisabled: "true",
      variation: "default"
    }
  }, {
    overrides: {
      label: {
        fontSize: "14px",
        lineHeight: "21px"
      },
      Button: {
        padding: "6px 12px 6px 12px"
      }
    },
    variantValues: {
      size: "small",
      isDisabled: "false",
      variation: "default"
    }
  }, {
    overrides: {
      label: {
        fontSize: "14px",
        color: "rgba(92,102,112,1)",
        lineHeight: "21px"
      },
      Button: {
        border: "1px SOLID rgba(239,240,240,1)",
        borderRadius: "4px",
        padding: "5px 11px 5px 11px"
      }
    },
    variantValues: {
      size: "small",
      isDisabled: "true",
      variation: "default"
    }
  }, {
    overrides: {
      label: {
        fontSize: "20px",
        color: "rgba(4,125,149,1)",
        lineHeight: "30px",
        children: "Link Button"
      },
      Button: {
        gap: "10px",
        borderRadius: "4px"
      }
    },
    variantValues: {
      size: "large",
      isDisabled: "false",
      variation: "link"
    }
  }, {
    overrides: {
      label: {
        fontSize: "20px",
        color: "rgba(92,102,112,1)",
        lineHeight: "30px",
        children: "Link Button"
      },
      Button: {
        gap: "10px",
        borderRadius: "4px"
      }
    },
    variantValues: {
      size: "large",
      isDisabled: "true",
      variation: "link"
    }
  }, {
    overrides: {
      label: {
        color: "rgba(4,125,149,1)",
        children: "Link Button"
      },
      Button: {
        gap: "10px",
        borderRadius: "4px"
      }
    },
    variantValues: {
      size: "default",
      isDisabled: "false",
      variation: "link"
    }
  }, {
    overrides: {
      label: {
        color: "rgba(92,102,112,1)",
        children: "Link Button"
      },
      Button: {
        gap: "10px",
        borderRadius: "4px"
      }
    },
    variantValues: {
      size: "default",
      isDisabled: "true",
      variation: "link"
    }
  }, {
    overrides: {
      label: {
        fontSize: "14px",
        color: "rgba(4,125,149,1)",
        lineHeight: "21px",
        children: "Link Button"
      },
      Button: {
        borderRadius: "4px",
        padding: "6px 12px 6px 12px"
      }
    },
    variantValues: {
      size: "small",
      isDisabled: "false",
      variation: "link"
    }
  }, {
    overrides: {
      label: {
        fontSize: "14px",
        color: "rgba(92,102,112,1)",
        lineHeight: "21px",
        children: "Link Button"
      },
      Button: {
        borderRadius: "4px",
        padding: "6px 12px 6px 12px"
      }
    },
    variantValues: {
      size: "small",
      isDisabled: "true",
      variation: "link"
    }
  }];
  const overrides = mergeVariantsAndOverrides(getOverridesFromVariants(variants, props), overridesProp || {});
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    border: "1px SOLID rgba(174,179,183,1)",
    borderRadius: "5px",
    padding: "8px 16px 8px 16px"
  }, rest, getOverrideProps(overrides, "Button")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    color: "rgba(13,26,38,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Default Button"
  }, getOverrideProps(overrides, "label"))));
}