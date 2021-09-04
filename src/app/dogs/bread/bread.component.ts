import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DogsService } from 'src/app/dogs.service';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {

  singleBreadDogsImages:any;
  currentBreadName:any;
  currentSubBreadName:any;
  dogsBread:any; 

  dogsSubBread:any ;
  dogsSubBread1:any ;
  dogsSubBreadTure:boolean= false;

  subBreadExists:boolean=false;

  subBreadImages:any;
  
  constructor(private dogsService:DogsService) { }

  @ViewChild('selectDogBread', {static: true}) selectDogBread:ElementRef;
   
  ngOnInit(): void {
    this.allDogBreadArray();
    this.singleBreadDogs();
     
  }

  /*  
  singleBreadDogs() function is consumming dogsService.dogsByBread() to get the Array(all images url) of single Bread
  */

singleBreadDogs(){
  this.dogsService.dogsByBread().subscribe((data) => {
    let singleBreadDogsImages:any = data;
    // console.log(singleBreadDogsImages.message);
    this.singleBreadDogsImages = singleBreadDogsImages.message;
    this.currentBreadName = this.dogsService.singleDogBread;
    // this.selectDogBread.nativeElement.value= this.dogsService.singleDogBread;
    this.selectDogBread.nativeElement.value= this.dogsBread.indexOf(this.currentBreadName);
    
  })
}

// singleBreadDogsChoose(event:any){
//   this.dogsService.singleDogBread = event.target.value;
// // console.log(event.target.id); // this.singleBreadDogsAllImages();
// this.singleBreadDogs();
// }

allDogBreadArray() {
  this.dogsService.allDogBread().subscribe(
    (data) => {
      let dogsBread:any; 
      dogsBread =data; 
      this.dogsBread = Object.keys(dogsBread.message);
      this.dogsSubBread = Object.values(dogsBread.message);
    })
}


changeDogBread(event:any){

  const newVal = event.target.value;
    
  this.dogsSubBread1 = this.dogsSubBread[newVal];
  this.dogsService.singleDogBread = this.dogsBread[newVal];
  // console.log(this.dogsService.singleDogBread);
  if(this.dogsSubBread1.length > 0) {
    this.dogsSubBreadTure = !this.dogsSubBreadTure;
    this.singleBreadDogsImages = [];
    this.subBreadExists=true;
   }
   else {  this.dogsSubBreadTure = false;  this.singleBreadDogs(); this.subBreadExists=false;}

}

changeDogSubBread(event:any){
  const newVal = event.target.value;

  // console.log(this.dogsService.singleDogBread);
  // console.log(newVal);

  this.dogsService.singleSubBread = newVal;
  this.dogsService.dogsBySubBread().subscribe((data) => {
    let subBreadImages = data;
    this.singleBreadDogsImages = subBreadImages;
    this.singleBreadDogsImages = this.singleBreadDogsImages.message
    // console.log(this.singleBreadDogsImages);
  } );
  this.subBreadExists=false;
  // this.currentBreadName = this.dogsService.singleDogBread;
  // this.currentSubBreadName = this.dogsService.singleSubBread;
}

}


