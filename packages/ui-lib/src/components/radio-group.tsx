"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { PropsWithCss, withStyles } from "../lib/with-styles";
import { cx, css } from "@repo/styled/css";

import { flex } from "@repo/styled/patterns";
import { Label } from "./label";

const RadioGroup = withStyles(RadioGroupPrimitive.Root, {
  display: "grid",
  gap: "2",
});

const itemsStyles = css.raw({
  aspectRatio: "square",
  size: "4",
  rounded: "full",
  borderWidth: "1px",
  borderColor: "primary",
  cursor: "pointer",
  color: "primary",
  _focusVisible: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    boxShadow: "outline",
  },
  _disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
});

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  PropsWithCss<typeof RadioGroupPrimitive.Item>
>(({ className, css: cssProp, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx(css(itemsStyles, cssProp), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className={css({ dflex: "center" })}>
        <Circle className={css({ size: "2.5", fill: "current" })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className={flex({ align: "center", spaceX: "2" })}>
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className={flex({ align: "center", spaceX: "2" })}>
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className={flex({ align: "center", spaceX: "2" })}>
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}
