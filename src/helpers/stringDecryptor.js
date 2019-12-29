import CryptoJS from 'crypto-js'

export function stringDecryptor (encryptedString) {
  console.log(CryptoJS.AES.decrypt(encryptedString, 'test'))

  return encryptedString;
}
