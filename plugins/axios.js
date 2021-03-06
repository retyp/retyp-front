export default function ({ app, $axios, error }) {
  $axios.setBaseURL(process.env.API_URL)

  $axios.onError((err) => {
    if (!err.response) {
      app.$toast.global.error({ message: "Couldn't reach the API... Is internet ok?" })
    }
  })
}
