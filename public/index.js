console.log('Welcome')

// eslint-disable-next-line no-undef
const form = document.querySelector('form')
// @ts-ignore
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  // @ts-ignore
  const formData = new FormData(form)
  const username = formData.get('username')
  const password = formData.get('password')
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  if (response.ok) {
    const user = await response.json()
    console.log('Logged in as', user.username)
  } else {
    const error = await response.json()
    console.error(error.message)
  }
})