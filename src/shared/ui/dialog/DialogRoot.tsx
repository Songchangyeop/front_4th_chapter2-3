import * as DialogPrimitive from "@radix-ui/react-dialog"

import type { PropsWithChildren } from "react"

export const DialogPortal = DialogPrimitive.Portal

export const DialogRoot = ({ children, ...props }: PropsWithChildren<DialogPrimitive.DialogProps>) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPortal>
        {children}
        {/* DialogContent */}
      </DialogPortal>
    </DialogPrimitive.Root>
  )
}
