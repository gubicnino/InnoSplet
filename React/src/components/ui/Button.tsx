import { Loader2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  href?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  href,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]'

  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/20 border border-transparent',
    secondary:
      'bg-surface text-white border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800',
    outline:
      'bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500',
    ghost: 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-md gap-1.5',
    md: 'text-base px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-lg px-7 py-3.5 rounded-xl gap-2.5',
  }

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  )

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link to={href} className={combinedClassName}>
        {content}
      </Link>
    )
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  )
}
