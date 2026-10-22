/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let encryptMessage = '';
    let j = 0; // порядковый номер символа из key

    for (let i = 0; i < message.length; i++) {
      let codeLetterInMessage = message.toUpperCase().charCodeAt(i) - 65;  // A -> 0, Z -> 25
      let codeLetterInKey = key.toUpperCase().charCodeAt(j) - 65;

      if (codeLetterInMessage >= 0 && codeLetterInMessage <= 25) {
        let codeLetterInEncryptMessage = ((codeLetterInMessage + codeLetterInKey) % 26);
        encryptMessage += String.fromCharCode(codeLetterInEncryptMessage + 65);
        j += 1;
      } else {
        encryptMessage += message[i];
      }

      if (j === key.length) {
        j = 0;
      }
    }

    if (this.isDirect === false) {
      encryptMessage = encryptMessage.split('').reverse().join('');
    }

    return encryptMessage;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let message = '';
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let codeLetterInEncryptedMessage = encryptedMessage.toUpperCase().charCodeAt(i) - 65;  // A -> 0, Z -> 25
      let codeLetterInKey = key.toUpperCase().charCodeAt(j) - 65;

      if (codeLetterInEncryptedMessage >= 0 && codeLetterInEncryptedMessage <= 25) {
        let codeLetterInMessage = (codeLetterInEncryptedMessage - codeLetterInKey + 26) % 26;
        message += String.fromCharCode(codeLetterInMessage + 65);
        j += 1;
      } else {
        message += encryptedMessage[i];
      }

      if (j === key.length) {
        j = 0;
      }
    }

    if (this.isDirect === false) {
      message = message.split('').reverse().join('');
    }

    return message;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
