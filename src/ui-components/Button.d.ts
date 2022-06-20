/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    isDisabled?: "false" | "true";
    size?: "default" | "large" | "small";
    variation?: "default" | "link" | "primary";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Button(props: ButtonProps): React.ReactElement;
