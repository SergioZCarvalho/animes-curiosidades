import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
animes: any = []


  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.listAnimes();
  }

  async listAnimes(){
    try {
      const resp: any = this.animes = await this.animeService.getAnimes().toPromise();
      this.animes = resp.data
      console.log(this.animes);
    } catch (error) {
      console.log(error)
    }
  }

}
