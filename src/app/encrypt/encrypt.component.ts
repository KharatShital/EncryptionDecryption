import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrl: './encrypt.component.scss'
})
export class EncryptComponent {

  cipherText :string='';
  plainText:string='';
  ecryptText(){
  
  this.cipherText=CryptoJS.AES.encrypt(this.plainText,'secret-key').toString();
}
  
}
