import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogImageUrl:any ;
  dogData:any;
  dogsBread:any ;
  dogsSubBread:any ;
  dogsSubBread1:any ;
  dogsSubBreadTure:boolean= false;

  // singleBreadDogsImages:any;
  // currentBreadName:any;

  constructor(private dogsService:DogsService, private router:Router) { }

  ngOnInit(): void { this.changeDogImage(); this.allDogBread(); }

  changeDogImage() {
    this.dogImageUrl = "";
    this.dogsService.getDogsRendom().subscribe((data) =>  { 
      this.dogData = data; 
      this.dogImageUrl = this.dogData.message; });
  }

  allDogBread() {
    this.dogsService.allDogBread().subscribe(
      (data) => {
        let dogsBread:any; 
        dogsBread =data; 
        // console.log(dogsBread);
        this.dogsBread = Object.keys(dogsBread.message);
        this.dogsSubBread = Object.values(dogsBread.message);
      })
  }

    /*  
  changeDogBread() function is for "SELECT DOM", by changing the select option it will show sub bread if any. 
  */
  changeDogBread(event:any){
    const newVal = event.target.value;
    
    this.dogsSubBread1 = this.dogsSubBread[newVal];
    if(this.dogsSubBread1.length > 0) {
      this.dogsSubBreadTure = !this.dogsSubBreadTure;
     }
  }

  /*  
  singleBreadDogs() is passing data(bread name) to "dog service" 
  */

  singleBreadDogs(event:any){
    this.dogsService.singleDogBread = event.target.id;
this.router.navigate(["/bread"]);
// console.log(event.target.id);
// this.singleBreadDogsAllImages();
  }
  
  /*  
  singleBreadDogsAllImages() function is consumming dogsService.dogsByBread() to get the Array(all images url) of single Bread
  */
  // singleBreadDogsAllImages(){
  //   this.dogsService.dogsByBread().subscribe((data) => {
  //     let singleBreadDogsImages:any = data;
  //     this.singleBreadDogsImages = singleBreadDogsImages.message;
  //     this.currentBreadName = this.dogsService.singleDogBread;
  //   })
  // }

}
