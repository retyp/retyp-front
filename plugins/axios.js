export default function ({ $axios, error }) {
  $axios.setBaseURL(process.env.BASE_URL)

  $axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    if (code === 404) {
      return error({ statusCode: 404 })
    }
  })
}
