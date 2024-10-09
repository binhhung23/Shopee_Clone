import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  register: UseFormRegister<any>
  className?: string
  name: string
  rules: RegisterOptions
  autoComplete?: string
}
export default function Input({
  type,
  errorMessage,
  placeholder,
  register,
  className,
  name,
  rules,
  autoComplete
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm forus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
