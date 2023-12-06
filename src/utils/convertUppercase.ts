export const convertUppercase = (string: string) => {
  const firstLetter = string.slice(0, 1)
  const restLetters = string.slice(1).toLocaleLowerCase()

  return { firstLetter, restLetters }
}
