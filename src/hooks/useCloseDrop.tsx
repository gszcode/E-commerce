import { useEffect, useRef } from 'react'
import { OpenSubNavState } from '../typescript/types/submenu'

export const useCloseDrop = (
  setOpenSubNav: React.Dispatch<React.SetStateAction<OpenSubNavState>>
) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSubNav({
          clothes: false,
          home: false
        })
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpenSubNav])

  return ref
}
