import Vonage from '@vonage/server-sdk'
const vonage = new Vonage({
  apiKey: '8d4dc6b3',
  apiSecret: 'ajPGt4pAhvlOFppg',
})

vonage.verify.control(
  {
    request_id: '0a7ababcf6a74f0b90b56b3383db5aa9',
    cmd: 'cancel',
  },
  (err, result) => {
    if (err) {
      console.error(err)
    } else {
      console.log(result)
    }
  }
)
