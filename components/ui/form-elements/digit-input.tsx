// AlignUI DigitInput v0.0.0

import type { OTPInputProps } from 'react-otp-input'
import * as React from 'react'
import OtpInput from 'react-otp-input'

import { cn } from '@/lib/utils/cn'

type OtpOptions = Omit<OTPInputProps, 'renderInput'>

type DigitInputProps = {
  className?: string
  disabled?: boolean
  hasError?: boolean
} & OtpOptions

function DigitInput({
  className,
  disabled,
  hasError,
  ...rest
}: DigitInputProps) {
  return (
    <OtpInput
      containerStyle={cn('flex w-full items-center gap-2.5', className)}
      skipDefaultStyles
      renderInput={inputProps => (
        <DigitInputSlot
          disabled={disabled}
          hasError={hasError}
          {...inputProps}
          ref={inputProps.ref as unknown as React.RefObject<HTMLInputElement>}
        />
      )}
      {...rest}
    />
  )
}
DigitInput.displayName = 'DigitInput'

function DigitInputSlot({ ref: forwardedRef, className, hasError, ...rest }: React.ComponentPropsWithoutRef<'input'> & {
  hasError?: boolean
} & { ref?: React.RefObject<React.ComponentRef<'input'> | null> }) {
  return (
    <input
      ref={forwardedRef}
      className={cn(
        'h-16 w-full min-w-0 rounded-10 bg-bg-white-0 text-center text-title-h5 text-text-strong-950 shadow-regular-xs outline-none ring-1 ring-inset ring-stroke-soft-200',
        'transition duration-200 ease-out',
        // hover
        'hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent',
        // focus
        'focus:shadow-button-important-focus focus:outline-none focus:ring-stroke-strong-950',
        // selection
        'selection:bg-none',
        // disabled
        'disabled:bg-bg-weak-50 disabled:text-text-disabled-300 disabled:shadow-none disabled:ring-transparent',
        {
          'ring-error-base hover:ring-error-base focus:ring-error-base focus:shadow-button-error-focus':
            hasError,
        },
        className,
      )}
      {...rest}
    />
  )
}
DigitInputSlot.displayName = 'DigitInputSlot'

export { DigitInput as Root }
