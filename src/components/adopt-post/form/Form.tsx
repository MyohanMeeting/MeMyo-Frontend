import { Answer, ApplyUser } from '@/types/Adopt';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, forwardRef, useState } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
))


type Option = {
  label: ReactNode
  value: string | number | string[],
  index:number
}

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] }

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value,index }) => (
        <option value={value} key={index}>{label}</option>
      ))}
    </select>
  )
)

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => ReactNode
}

const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>()
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} >{children(methods)}</form>
  )
}


export type FormValues = keyof ApplyUser;

export { Form, Input, Select };