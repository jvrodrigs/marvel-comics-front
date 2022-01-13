import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: MarvelApiService
  ) { }

  ngOnInit(): void {
    // this.service.listComicsMarvel.subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // )
  }

}
