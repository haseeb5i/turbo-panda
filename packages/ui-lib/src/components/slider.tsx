"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { PropsWithCss } from "../lib/with-styles";
import { css, cx } from "@repo/styled/css";
import { slider } from "@repo/styled/recipes";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  PropsWithCss<typeof SliderPrimitive.Root>
>(({ className, css: cssProp, ...props }, ref) => {
  const styles = slider();
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cx(css(cssProp), styles.root, className)}
      {...props}
    >
      <SliderPrimitive.Track className={styles.track}>
        <SliderPrimitive.Range className={styles.range} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles.thumb} />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
