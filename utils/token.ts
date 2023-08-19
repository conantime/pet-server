const request = require('request')

const AK = 'BV9eYrzSEukmZWaYA65BZgRT'
const SK = 'pzKRcwTqZCPNrsqZijMrH6LOGl1k8fk9'

export function getAccessToken() {

    let options = {
        'method': 'POST',
        'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
    }
    return new Promise((resolve, reject) => {
        request(options, (error: any, response: any) => {
            if (error) { reject(error) }
            else { resolve(JSON.parse(response.body).access_token) }
        })
    })
}