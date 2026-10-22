const endpoint = () => `${import.meta.env.VITE_GET_PROXY}/proxy.php`
export async function checkSiteSession() {
  try {
    const response = await fetch(endpoint(), { credentials: 'include', cache: 'no-store' })
    return response.ok && (await response.json()).success === true
  } catch { return false }
}
