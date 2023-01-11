import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CryptoDataProviderService } from '../crypto-data-provider.service';
import { Historicalmodel } from '../historicalmodel';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent {
  
  displayedColumns: string[] = ['time', 'volume'];
  currentYear:number = new Date().getFullYear()
  minDate :Date= new Date(this.currentYear - 50, 0, 1)
  maxDate:Date = new Date();
  isFormReady=false;
  isReady: boolean =false;
  HistoricalData:Historicalmodel[]=[]

 public userForm = new FormGroup({
   
   hours : new FormControl(1, [Validators.required,Validators.min(1),  Validators.max(24)]),
   picker:new FormControl()
   
 })

 onSave(){
   console.log(this.userForm.value);
   this.isFormReady=true;
   if(this.userForm.value.hours != null && this.userForm.value.hours != undefined
     && this.userForm.value.picker!=null && this.userForm.value.picker!=undefined){
       var milliseconds = this.userForm.value.picker.getTime();
       console.log(milliseconds);
       this.cryptoSrv.getHistoricalData(this.userForm.value.hours,milliseconds).subscribe(
         {
           next : (response) => {  
             this.HistoricalData=response
             

           },
           complete : () => {this.isReady = true}

         }
       )

   }else{
     console.log("date is null");
     
   }
   
 }



 constructor(private cryptoSrv : CryptoDataProviderService){
   this.isReady = false
 }

}
