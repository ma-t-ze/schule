export const siteAuthEndpoint = () => import.meta.env.DEV
  ? '/site-auth/proxy.php'
  : `${import.meta.env.VITE_GET_PROXY}/proxy.php`
export async function checkSiteSession() {
  try {
    const response = await fetch(siteAuthEndpoint(), { credentials: 'include', cache: 'no-store' })
    return response.ok && (await response.json()).success === true
  } catch { return false }
}
