import { ComponentPropsWithoutRef } from 'react'
import layoutStyles from '../styles/Layout.module.css'

import ArrowIcon from '../public/images/arrow.svg'

export enum IconName {
  Arrow = 'Arrow',
}

const iconsByName: { [key in IconName]: any } = {
  [IconName.Arrow]: ArrowIcon
}

interface IconComponentProps extends ComponentPropsWithoutRef<any> {
  name: IconName
}

export default function IconComponent({ name, className, ...props }: IconComponentProps) {
  const Icon = iconsByName[name]
  return <Icon { ...props } className={ className ?? layoutStyles.icon} />
  }
