"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { PropsWithCss } from "../lib/with-styles";
import { css, cx } from "@repo/styled/css";
import { popover } from "@repo/styled/recipes";

import { grid } from "@repo/styled/patterns";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PropsWithCss<typeof PopoverPrimitive.Content>
>(({ css: cssProp, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      {...props}
      className={cx(css(cssProp), popover(), props.className)}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "80" }}>
        <div className={css({ spaceY: "2", mb: "4" })}>
          <h4 className={css({ fontWeight: "medium", lineHeight: "none" })}>
            Dimensions
          </h4>
          <p className={css({ textStyle: "sm", color: "zinc.500" })}>
            Set the dimensions for the layer.
          </p>
        </div>
        <div className={grid({ gap: "2" })}>
          <PopoverInput id="width" label="Width" defaultValue="100%" />
          <PopoverInput id="maxWidth" label="Max. width" defaultValue="300px" />
          <PopoverInput id="height" label="Height" defaultValue="25px" />
          <PopoverInput
            id="maxHeight"
            label="Max. height"
            defaultValue="none"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

const PopoverInput = ({
  id,
  label,
  defaultValue,
}: {
  id: string;
  label: string;
  defaultValue: string;
}) => (
  <div className={grid({ columns: 3, gap: "4", alignItems: "center" })}>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      defaultValue={defaultValue}
      className={css({ h: "8", gridColumn: "2" })}
    />
  </div>
);
