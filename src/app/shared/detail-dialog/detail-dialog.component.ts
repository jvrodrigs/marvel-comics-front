import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { ComicsData } from '../comics.model';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  public comicReadyById: any;

  constructor(
    public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ComicsData,
    private marvel: MarvelApiService
  ) { }

  ngOnInit(): void {
    this.marvel.readByIdComicsMarvel(this.data.id).subscribe(res =>{
      this.comicReadyById = res.data.results[0];
      console.log(this.comicReadyById);
    })
  }
}
