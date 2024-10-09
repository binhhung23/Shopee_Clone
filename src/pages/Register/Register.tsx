import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {},
    (data) => {
      const password = getValues('password')
    }
  )
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <Input
                type='email'
                errorMessage={errors.email?.message as string | undefined}
                register={register}
                name='email'
                className='mt-8'
                placeholder='Email'
                rules={rules.email}
              />
              <Input
                type='password'
                errorMessage={errors.password?.message as string | undefined}
                register={register}
                name='password'
                className='mt-2'
                placeholder='Password'
                rules={rules.password}
                autoComplete='on'
              />
              <Input
                type='password'
                errorMessage={errors.confirm_password?.message as string | undefined}
                register={register}
                name='confirm_password'
                className='mt-2'
                placeholder='Confirm Password'
                rules={rules.confirm_password}
                autoComplete='on'
              />

              <div className='mt-2'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng Ký
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Đã có tài khoản?</span>
                <Link to='/login' className='text-red-400 hover:text-red-500 ml-1'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
