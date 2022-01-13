import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  private oldComics: any;
  public allComics: any;

  constructor(
    private marvel: MarvelApiService
  ) { }

  ngOnInit(): void {
    this.marvel.listComicsMarvel.subscribe(
      res => {
        this.allComics = res.data.results;
        this.oldComics = this.allComics;
      }
    )
  }

  public isSearchComics(val: String){
    const filter = this.oldComics.filter( (res: any) => {
       return res.title.toUpperCase().indexOf(val.toUpperCase()) >= 0;
    });
    
    this.allComics = filter;
  }

  public isModalShow(){
    alert('abriu')
  }

}
