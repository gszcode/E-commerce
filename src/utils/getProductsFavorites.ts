export const storeFavorites = JSON.parse(
  localStorage.getItem('favorites') || '[]'
)
