import { useEffect, useRef } from 'react'
import { SubMenu } from '../typescript/types/submenu'

export const useCloseDrop = (
  setOpenSubNav: (value: React.SetStateAction<SubMenu>) => void
) => {
  const closeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeRef.current &&
        !closeRef.current.contains(event.target as Node)
      ) {
        setOpenSubNav(null)
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpenSubNav])

  return { closeRef }
}
