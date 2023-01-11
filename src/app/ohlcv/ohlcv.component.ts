import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CryptoDataProviderService } from '../crypto-data-provider.service';
import { Ohlcvmodel } from '../ohlcvmodel';

@Component({
  selector: 'app-ohlcv',
  templateUrl: './ohlcv.component.html',
  styleUrls: ['./ohlcv.component.css']
})
export class OhlcvComponent {
  displayedColumns: string[] = ['time', 'high','low','open','volumefrom','volumeto','close','conversionType'];
  response: any;
  isReady: boolean =false;
  isFormReady=false
  list=[
    { name: 'USD',value: 'USD' },
    { name: 'JPY',value: 'JPY'  },
    { name: 'EUR',value: 'EUR' },
    { name: 'BTC',value: 'BTC' }
  ];

  ohlcvData:Ohlcvmodel[]=[]

  public userForm = new FormGroup({
    fysm: new FormControl('', Validators.required),
    days : new FormControl("1", [Validators.required,Validators.min(1),  Validators.max(100)]),
  })

  onSave(){
    console.log(this.userForm.value);
    this.isFormReady=true;
    if(this.userForm.value.fysm != null && this.userForm.value.fysm != undefined
      && this.userForm.value.days!=null && this.userForm.value.days!=undefined){
    this.cryptoSrv.getOhlcvData(this.userForm.value.fysm,'BTC',parseInt(this.userForm.value.days)).subscribe(
      {
        next : (response) => {  
            console.log(response)
          
            this.ohlcvData = response
        },
        complete : () => {this.isReady = true}

      }
    )
    }
    
  }
  constructor(private cryptoSrv : CryptoDataProviderService){}
}
