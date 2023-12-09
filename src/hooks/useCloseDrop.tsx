import { useEffect, useRef } from 'react'

export const useCloseDrop = (
  setOpenSubNav: (value: React.SetStateAction<string>) => void
) => {
  const closeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeRef.current &&
        !closeRef.current.contains(event.target as Node)
      ) {
        setOpenSubNav('')
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpenSubNav])

  return { closeRef }
}
