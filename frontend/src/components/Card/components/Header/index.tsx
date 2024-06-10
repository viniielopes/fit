import { HeaderProps } from './types'

export const Header = ({ imgSrc }: HeaderProps) => {
  return (
    <header className="flex justify-center bg-gray-200 p-1">
      <img src={imgSrc} className="h-44 w-64 object-contain" />
    </header>
  )
}
