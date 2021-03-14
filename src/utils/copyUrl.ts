export const copyUrl = (path: string) => {
  const url = window.location.origin
  console.log(url, path)
  navigator.clipboard.writeText(`${url}/${path} `).then(
    () => {
      console.log('Async: Copying to clipboard was successful!')
    },
    err => {
      console.error('Async: Could not copy text: ', err)
    }
  )
}
