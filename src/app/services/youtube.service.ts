import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';
import { map } from 'rxjs/operators'
import { Snippet } from '../models/snippet.model';
import { YouTubeResponse } from '../models/youtube-response.mode';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getVideoDatas() {
    return this.http.get<YouTubeResponse>(environment.youtubeApi).pipe(map((data: YouTubeResponse) => data.items));
  }
}
