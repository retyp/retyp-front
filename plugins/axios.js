export default function ({ $axios }) {
  $axios.setBaseURL(process.env.BASE_URL)

  // $axios.onError((error) => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
