"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { styled } from "@repo/styled/jsx";

import { Button } from "./button";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = styled(
  TooltipPrimitive.Content,
  {
    base: {
      zIndex: "50",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      bgColor: "background",
      paddingX: 3,
      paddingY: 1.5,
      textStyle: "sm",
      shadow: "md",
      userSelect: "none",
      willChange: "transform, opacity",

      fadeInOut: 0,
      zoomInOut: 0.95,
      "&[data-state=delayed-open]": {
        animation: "enter",
        "&[data-side=top]": { slideInY: "2" },
        "&[data-side=bottom]": { slideInY: "-2" },
        "&[data-side=left]": { slideInX: "2" },
        "&[data-side=right]": { slideInX: "-2" },
      },
      _closed: { animation: "exit" },
    },
  },
  {
    defaultProps: {
      sideOffset: 4,
    },
  }
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
