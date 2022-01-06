import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getAnimes(){
    return this.http.get('https://anime-facts-rest-api.herokuapp.com/api/v1')
  }
    getAnime(animeName: string){
    return this.http.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`)
  }
}
