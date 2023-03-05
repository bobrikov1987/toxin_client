export const router = {
  getUrl: () => window.location.hash.trim().slice(1),
  redirect: (hash = '') => window.location.hash = `#${hash}`,
}
