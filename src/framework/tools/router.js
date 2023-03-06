export const router = {
  getUrl: () => window.location.hash.trim().slice(1),

  navigate: (hash = '') => window.location.hash = `#${hash}`,
}
