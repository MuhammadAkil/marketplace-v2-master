// AlignUI SegmentedControl v0.0.0

'use client'

import { Slottable } from '@radix-ui/react-slot'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import mergeRefs from 'merge-refs'
import * as React from 'react'

import { useTabObserver } from '@/hooks/common/use-tab-observer'
import { cn } from '@/lib/utils/cn'

const SegmentedControlRoot = TabsPrimitive.Root
SegmentedControlRoot.displayName = 'SegmentedControlRoot'

function SegmentedControlList({
  ref: forwardedRef,
  children,
  className,
  floatingBgClassName,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  floatingBgClassName?: string
} & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.List> | null>
}) {
  const [lineStyle, setLineStyle] = React.useState({ width: 0, left: 0 })

  const { mounted, listRef } = useTabObserver({
    onActiveTabChange: (_, activeTab) => {
      const { offsetWidth: width, offsetLeft: left } = activeTab
      setLineStyle({ width, left })
    },
  })

  return (
    <TabsPrimitive.List
      ref={mergeRefs(forwardedRef, listRef)}
      className={cn(
        'relative isolate grid w-full auto-cols-fr grid-flow-col gap-1 rounded-10 bg-bg-weak-50 p-1',
        className,
      )}
      {...rest}
    >
      <Slottable>{children}</Slottable>

      {/* floating bg */}
      <div
        className={cn(
          'absolute inset-y-1 left-0 -z-10 rounded-md bg-bg-white-0 shadow-toggle-switch transition-transform duration-300',
          {
            hidden: !mounted,
          },
          floatingBgClassName,
        )}
        style={{
          transform: `translate3d(${lineStyle.left}px, 0, 0)`,
          width: `${lineStyle.width}px`,
          transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
        }}
        aria-hidden="true"
      />
    </TabsPrimitive.List>
  )
}
SegmentedControlList.displayName = 'SegmentedControlList'

function SegmentedControlTrigger({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof TabsPrimitive.Trigger
  > | null>
}) {
  return (
    <TabsPrimitive.Trigger
      ref={forwardedRef}
      className={cn(
        // base
        'peer',
        'relative z-10 h-7 whitespace-nowrap rounded-md px-1 text-label-sm text-text-soft-400 outline-none',
        'flex items-center justify-center gap-1.5',
        'transition duration-300 ease-out',
        // focus
        'focus:outline-none',
        // active
        'data-[state=active]:text-text-strong-950',
        className,
      )}
      {...rest}
    />
  )
}
SegmentedControlTrigger.displayName = 'SegmentedControlTrigger'

function SegmentedControlContent({
  ref: forwardedRef,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof TabsPrimitive.Content
  > | null>
}) {
  return <TabsPrimitive.Content ref={forwardedRef} {...rest} />
}
SegmentedControlContent.displayName = 'SegmentedControlContent'

export {
  SegmentedControlContent as Content,
  SegmentedControlList as List,
  SegmentedControlRoot as Root,
  SegmentedControlTrigger as Trigger,
}
