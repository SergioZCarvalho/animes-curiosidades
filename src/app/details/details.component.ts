import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

anime: any;
animeName !: string;


  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeName = this.route.snapshot.params['id'];
    this.getAnime();
  }
async getAnime(){
  this.anime = await this.animeService.getAnime(this.animeName).toPromise();
}
}
