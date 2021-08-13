import Vonage from '@vonage/server-sdk'
const vonage = new Vonage({
  apiKey: '8d4dc6b3',
  apiSecret: 'ajPGt4pAhvlOFppg',
})

vonage.verify.check(
  {
    request_id: '4a3b097407bf4e728190c5193545ecec',
    code: 9758,
  },
  (err, result) => {
    if (err) {
      console.error(err)
    } else {
      console.log(result)
    }
  }
)
