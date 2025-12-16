"use client";

import {
  FaCheckCircle,
  FaInfoCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className='toaster group'
      icons={{
        success: <FaCheckCircle className='size-4' />,
        info: <FaInfoCircle className='size-4' />,
        warning: <FaExclamationTriangle className='size-4' />,
        error: <FaTimesCircle className='size-4' />,
        loading: <ImSpinner2 className='size-4 animate-spin' />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
