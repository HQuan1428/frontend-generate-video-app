'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

const SeparatorWithText = ({ text = 'Or', className , ...props }: { text?: string; className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2 w-full', className)}>
      <Separator className="flex-1" />
      <span className="text-sm text-muted-foreground mx-2">{text}</span>
      <Separator className="flex-1" />
    </div>
  )
}

SeparatorWithText.displayName = 'SeparatorWithText'

export { Separator , SeparatorWithText}
