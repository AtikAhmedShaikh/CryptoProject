import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoDashboardModel } from './crypto-dashboard-model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataProviderService {
  
  getCryptoData() : Observable<CryptoDashboardModel>{
    let uri = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"  
    return this.httpSrv.get<any>(uri).pipe( 
      map( 
        (dataObj)=> { return dataObj['Data']}
        )
    )
  }

  getOhlcvData(fsym:string,tsym:string,aggregate:number) : Observable<any> {
    let uri ="https://min-api.cryptocompare.com/data/v2/histoday?fsym="+fsym+"&tsym="+tsym+"&limit=10&aggregate="+aggregate+""  
    return this.httpSrv.get<any>(uri).pipe( 
      map( 
        (dataObj)=> { return dataObj['Data']['Data']}
        )
    )
  }

  getHistoricalData(aggregate:number,ts:number):Observable<any>{
    let uri="https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BTC&limit=10&aggregate="+aggregate+"&Ts="+ts+""
    return this.httpSrv.get<any>(uri).pipe(
      map(
        ( dataObj) => {return dataObj['Data']}
      )
    )
  }

  constructor(private httpSrv : HttpClient) { }
}
