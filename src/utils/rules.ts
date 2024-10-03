import type { RegisterOptions } from 'react-hook-form'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

type Rules = {
  [key in keyof FormData]?: RegisterOptions<FormData, key>
}
export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+$/,
      message: 'Email phải đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài tự 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tự 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tự 6 - 160 ký tự'
    }
  }
}

rules.email
