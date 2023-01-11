import { Component } from '@angular/core';
import { CryptoDashboardModel } from '../crypto-dashboard-model';
import { CryptoDataProviderService } from '../crypto-data-provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Data: CryptoDashboardModel[] = []
  isReady: boolean = false;
  //userName: string=""

  getData() {
    this.cryptSrv.getCryptoData().subscribe(      
      {
        next: (cryptoData: any) => {
          // cryptoData.forEach( (obj: any) => console.log(obj['RAW']['USD'])  )
          cryptoData.forEach((obj: any) => this.Data.push(obj['RAW']['USD']))
          console.log(this.Data);
        },
        complete: () => { this.isReady = true }
      }
    )
  }

  ngOnInit() {
    this.getData();
  }

  constructor(private cryptSrv: CryptoDataProviderService) { }
}
