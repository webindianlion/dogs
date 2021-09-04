import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  singleDogBread:any = "affenpinscher";
  singleSubBread:any ="";

  constructor( private http:HttpClient) { }

  getDogsRendom() {
    return this.http.get("https://dog.ceo/api/breeds/image/random");
  }
  allDogBread(){
    return this.http.get("https://dog.ceo/api/breeds/list/all");
  }
  dogsByBread(){
    return this.http.get(`https://dog.ceo/api/breed/${this.singleDogBread}/images`);
  }

  dogsByBreadRendomLength(){
    return this.http.get("https://dog.ceo/api/breed/hound/images/random/3");
  }
  dogsBySubBread(){
    return this.http.get(`https://dog.ceo/api/breed/${this.singleDogBread}/${this.singleSubBread}/images`);
  }

}
