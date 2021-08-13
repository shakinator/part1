import Vonage from '@vonage/server-sdk'
const vonage = new Vonage({
  apiKey: '8d4dc6b3',
  apiSecret: 'ajPGt4pAhvlOFppg',
})

vonage.verify.request(
  {
    number: '918447383454',
    brand: 'Edelie',
  },
  (err, result) => {
    if (err) {
      console.error(err)
    } else {
      const verifyRequestId = result.request_id
      console.log('request_id', verifyRequestId)
    }
  }
)
