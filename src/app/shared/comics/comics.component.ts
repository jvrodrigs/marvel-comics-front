import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  private oldComics: any;
  public allComics: any;
  
  public newComics: any;

  public valueLoadMorePag: number = 0;

  constructor(
    private marvel: MarvelApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.marvel.listComicsMarvel().subscribe(
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

  //Verificacão de caso o quadrinho não tenha imagem no retorno da API;
  public getImage(val: Array<any>){
    if(val.length){
      return val[0].path + '/portrait_medium.jpg';
    }
    return '../../../assets/imgAvengers.jpg';
  }

  openDialog(value: string) {
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      width: '1200px',
      data: {id: value}
    });
  }

}
