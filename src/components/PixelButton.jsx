import React from "react";

const VARIANT_CLASS = {
  primary: "pixel-button pixel-button-primary",
  ghost: "pixel-button pixel-button-ghost",
};

export function PixelButton({
  as: Component = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary;
  return (
    <Component className={`${variantClass} ${className}`.trim()} {...props} />
  );
}
