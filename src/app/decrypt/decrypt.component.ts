import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrl: './decrypt.component.scss'
})
export class DecryptComponent {
cipherText :string='';
decryptedText:string='';
decryptText(){
  const bytes=CryptoJS.AES.decrypt(this.cipherText,'secret-key');
  this.decryptedText=bytes.toString(CryptoJS.enc.Utf8);
  console.log("Decrypt value:",this.decryptedText);

}
}
