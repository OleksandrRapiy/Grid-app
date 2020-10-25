import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  totalVideos = new BehaviorSubject(0);
  selectedVideos = new BehaviorSubject(0);
  
  constructor() { }
}
