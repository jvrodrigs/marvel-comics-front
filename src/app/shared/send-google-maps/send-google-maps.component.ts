import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { AdressApiService } from 'src/app/service/adress-api.service';
import { Address } from '../sendAddress.model';

@Component({
  selector: 'app-send-google-maps',
  templateUrl: './send-google-maps.component.html',
  styleUrls: ['./send-google-maps.component.css']
})
export class SendGoogleMapsComponent implements OnInit {

  address!: Address;
  
  title = 'teste'

  position = {
    lat: 0,
    lng: 0
  };

  label= {
    color: 'red',
    text: 'Marcador'
  };



  constructor(
    public dialogRef: MatDialogRef<SendGoogleMapsComponent>,
    public http: HttpClient,
    public addressApi: AdressApiService
  ) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.position.lat = pos.coords.latitude;
        this.position.lng = pos.coords.longitude;
        this.addressApi.getAddress(this.position.lat, this.position.lng).subscribe(res => {
         this.address = res.address
         console.log(this.address);
         
        })
      });
    }else {
      alert("Geolocation is not supported by this browser.");
    }
  }


  onSend(){
    alert('Os quadrinhos serão enviados ao enderenço fornecido!')
  }
   
}
