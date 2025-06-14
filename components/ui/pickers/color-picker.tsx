'use client'

import type {
  ColorAreaProps as AriaColorAreaProps,
  ColorSliderProps as AriaColorSliderProps,
  ColorSwatchPickerItemProps as AriaColorSwatchPickerItemProps,
  ColorSwatchPickerProps as AriaColorSwatchPickerProps,
  ColorSwatchProps as AriaColorSwatchProps,
  ColorThumbProps as AriaColorThumbProps,
  SliderTrackProps as AriaSliderTrackProps,
} from 'react-aria-components'
import * as React from 'react'
import {
  ColorArea as AriaColorArea,
  ColorField as AriaColorField,
  ColorPicker as AriaColorPicker,
  ColorSlider as AriaColorSlider,
  ColorSwatch as AriaColorSwatch,
  ColorSwatchPicker as AriaColorSwatchPicker,
  ColorSwatchPickerItem as AriaColorSwatchPickerItem,
  ColorThumb as AriaColorThumb,
  SliderTrack as AriaSliderTrack,
  ColorPickerStateContext,
  composeRenderProps,
  parseColor,
} from 'react-aria-components'

import { cn } from '@/lib/utils/cn'

const ColorField = AriaColorField
const ColorPicker = AriaColorPicker

function ColorSlider({ className, ...props }: AriaColorSliderProps) {
  return (
    <AriaColorSlider
      className={composeRenderProps(className, className =>
        cn('py-1', className))}
      {...props}
    />
  )
}

function ColorArea({ className, ...props }: AriaColorAreaProps) {
  return (
    <AriaColorArea
      className={composeRenderProps(className, className =>
        cn('h-[232px] w-full rounded-lg', className))}
      {...props}
    />
  )
}

function SliderTrack({ className, style, ...props }: AriaSliderTrackProps) {
  return (
    <AriaSliderTrack
      className={composeRenderProps(className, className =>
        cn('h-2 w-full rounded-full', className))}
      style={({ defaultStyle }) => ({
        ...style,
        background: `${defaultStyle.background},
          repeating-conic-gradient(
            #fff 0 90deg,
            rgba(0,0,0,.3) 0 180deg) 
          0% -25%/6px 6px`,
      })}
      {...props}
    />
  )
}

function ColorThumb({ className, ...props }: AriaColorThumbProps) {
  return (
    <AriaColorThumb
      className={composeRenderProps(className, className =>
        cn('z-50 size-3 rounded-full ring-2 ring-stroke-white-0', className))}
      {...props}
    />
  )
}

function ColorSwatchPicker({
  className,
  ...props
}: AriaColorSwatchPickerProps) {
  return (
    <AriaColorSwatchPicker
      className={composeRenderProps(className, className =>
        cn('flex w-full flex-wrap gap-1', className))}
      {...props}
    />
  )
}

function ColorSwatchPickerItem({
  className,
  ...props
}: AriaColorSwatchPickerItemProps) {
  return (
    <AriaColorSwatchPickerItem
      className={composeRenderProps(className, className =>
        cn('group/swatch-item cursor-pointer p-1 focus:outline-none', className))}
      {...props}
    />
  )
}

function ColorSwatch({ className, style, ...props }: AriaColorSwatchProps) {
  return (
    <AriaColorSwatch
      className={composeRenderProps(className, className =>
        cn(
          'size-4 rounded-full border-stroke-white-0 group-data-[selected=true]/swatch-item:border-2 group-data-[selected=true]/swatch-item:ring-[1.5px]',
          className,
        ))}
      style={({ defaultStyle }) => ({
        ...style,
        background: `${defaultStyle.background},
        repeating-conic-gradient(
          #fff 0 90deg,
          rgba(0,0,0,.3) 0 180deg) 
        0% -25%/6px 6px`,
      })}
      {...props}
    />
  )
}

function EyeDropperButton({
  ref: forwardedRef,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>
}) {
  const state = React.use(ColorPickerStateContext)!

  // @ts-expect-error EyeDropper is not defined in some environments
  if (typeof EyeDropper === 'undefined') {
    return null
  }

  return (
    <button
      type="button"
      ref={forwardedRef}
      aria-label="Eye dropper"
      onClick={() => {
        // @ts-expect-error EyeDropper is not defined in some environments
        new EyeDropper()
          .open()
          .then((result: { sRGBHex: string }) =>
            state.setColor(parseColor(result.sRGBHex)),
          )
      }}
      {...rest}
    />
  )
}
EyeDropperButton.displayName = 'EyeDropperButton'

export {
  ColorArea as Area,
  EyeDropperButton,
  ColorField as Field,
  ColorPicker as Root,
  ColorSlider as Slider,
  SliderTrack,
  ColorSwatch as Swatch,
  ColorSwatchPicker as SwatchPicker,
  ColorSwatchPickerItem as SwatchPickerItem,
  ColorThumb as Thumb,
}
