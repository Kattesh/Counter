import React from 'react'
import s from './Button.module.css'

export const Button: React.FC<ButtonPropsType> = ({title, className, ...restProps}) => {
    return (
        <button className={ `${s.default_button} ${className}`} {...restProps}>{title}</button>
    )
}


type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    title: string
}