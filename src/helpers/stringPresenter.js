import { stringDecryptor } from './stringDecryptor.js'
import { stringInterpolator } from './stringInterpolator.js'

export function stringPresenter(encryptedString, dictionary) {
   let decyptedString = stringDecryptor(encryptedString)

   return stringInterpolator(decyptedString, dictionary)
}
