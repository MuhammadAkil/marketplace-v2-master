// AlignUI TabMenuHorizontal v0.0.0

'use client'

import type { PolymorphicComponentProps } from '@/lib/utils/polymorphic'
import { Slottable } from '@radix-ui/react-slot'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import mergeRefs from 'merge-refs'

import * as React from 'react'
import { useTabObserver } from '@/hooks/common/use-tab-observer'
import { cn } from '@/lib/utils/cn'

const TabMenuHorizontalContent = TabsPrimitive.Content
TabMenuHorizontalContent.displayName = 'TabMenuHorizontalContent'

function TabMenuHorizontalRoot({
  ref: forwardedRef,
  className,
  ...rest
}: Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'orientation'
> & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.Root> | null>
}) {
  return (
    <TabsPrimitive.Root
      ref={forwardedRef}
      orientation="horizontal"
      className={cn('w-full', className)}
      {...rest}
    />
  )
}
TabMenuHorizontalRoot.displayName = 'TabMenuHorizontalRoot'

function TabMenuHorizontalList({
  ref: forwardedRef,
  children,
  className,
  wrapperClassName,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  wrapperClassName?: string
} & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.List> | null>
}) {
  const [lineStyle, setLineStyle] = React.useState({ width: 0, left: 0 })
  const listWrapperRef = React.useRef<HTMLDivElement>(null)

  const { mounted, listRef } = useTabObserver({
    onActiveTabChange: (_, activeTab) => {
      const { offsetWidth: width, offsetLeft: left } = activeTab
      setLineStyle({ width, left })

      const listWrapper = listWrapperRef.current
      if (listWrapper) {
        const containerWidth = listWrapper.clientWidth
        const scrollPosition = left - containerWidth / 2 + width / 2

        listWrapper.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        })
      }
    },
  })

  return (
    <div
      ref={listWrapperRef}
      className={cn(
        'relative grid overflow-x-auto overflow-y-hidden overscroll-contain',
        wrapperClassName,
      )}
    >
      <TabsPrimitive.List
        ref={mergeRefs(forwardedRef, listRef)}
        className={cn(
          'group/tab-list relative flex h-12 items-center gap-6 whitespace-nowrap border-y border-stroke-soft-200',
          className,
        )}
        {...rest}
      >
        <Slottable>{children}</Slottable>

        {/* Floating Bg */}
        <div
          className={cn(
            'absolute -bottom-px left-0 h-0.5 bg-primary-base opacity-0 transition-all duration-300 group-has-[[data-state=active]]/tab-list:opacity-100',
            {
              hidden: !mounted,
            },
          )}
          style={{
            transform: `translate3d(${lineStyle.left}px, 0, 0)`,
            width: `${lineStyle.width}px`,
            transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
          }}
          aria-hidden="true"
        />
      </TabsPrimitive.List>
    </div>
  )
}
TabMenuHorizontalList.displayName = 'TabMenuHorizontalList'

function TabMenuHorizontalTrigger({
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
        'group/tab-item h-12 py-3.5 text-label-sm text-text-sub-600 outline-none',
        'flex items-center justify-center gap-1.5',
        'transition duration-200 ease-out',
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
TabMenuHorizontalTrigger.displayName = 'TabMenuHorizontalTrigger'

function TabMenuHorizontalIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || 'div'

  return (
    <Component
      className={cn(
        // base
        'size-5 text-text-sub-600',
        'transition duration-200 ease-out',
        // active
        'group-data-[state=active]/tab-item:text-primary-base',
        className,
      )}
      {...rest}
    />
  )
}
TabMenuHorizontalIcon.displayName = 'TabsHorizontalIcon'

function TabMenuHorizontalArrowIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T, React.HTMLAttributes<HTMLDivElement>>) {
  const Component = as || 'div'

  return (
    <Component
      className={cn('size-5 text-text-sub-600', className)}
      {...rest}
    />
  )
}
TabMenuHorizontalArrowIcon.displayName = 'TabsHorizontalArrow'

export {
  TabMenuHorizontalArrowIcon as ArrowIcon,
  TabMenuHorizontalContent as Content,
  TabMenuHorizontalIcon as Icon,
  TabMenuHorizontalList as List,
  TabMenuHorizontalRoot as Root,
  TabMenuHorizontalTrigger as Trigger,
}
