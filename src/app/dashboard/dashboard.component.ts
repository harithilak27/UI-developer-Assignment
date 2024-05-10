import { Component } from '@angular/core';
import { Observable, interval, map, startWith } from 'rxjs';
import {NgImageSliderModule} from 'ng-image-slider';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  images: string[] = [
    "../../assets/img-d1.PNG",
    '../../assets/img-d2.PNG',
    '../../assets/img-d3.png',
    // Add more image paths as needed
  ];

  currentIndex: number = 0;

  ngOnInit() {
    this.updateImages();
    setInterval(() => {
      this.updateImages();
    }, 1500); // Change the interval as needed (in milliseconds)

    this.showImage(this.currentImageIndex);
  }

  updateImages() {
    // Randomly shuffle the images
    this.images = this.shuffle(this.images);
    // Reset currentIndex to loop through images from the beginning
    this.currentIndex = 0;
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  imageObject = [
    {
      image: '../../assets/slider5.png',
      thumbImage: '../../assets/slider5.png',
      title: 'UI Developer'
  },{
    image: '../../assets/slider1.png',
    thumbImage: '../../assets/slider1.png',
    title: 'Project Management Basic-Course by Steven ',
    
}, {
    image: '../../assets/slider2.png',
    thumbImage: '../../assets/slider2.png',
    title: 'BM Data Science Professional Certificate'
}, {
    image: '../../assets/slider3.png',
    thumbImage: '../../assets/slider3.png',
    title: 'The Science Of well being'
},{
    image: '../../assets/slider4.png',
    thumbImage: '../../assets/slider4.png',
    title: 'Topic of fractal Geometry'
}
];

imageClickHandler(e: any) {
  console.log('image click', e);
}

  currentImageIndex = 0;

  showImage(index: number): void {
    const transformValue = `translateX(-${index * 100}%)`;
    document.documentElement.style.setProperty('--transform', transformValue);
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.showImage(this.currentImageIndex);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.showImage(this.currentImageIndex);
  }


}

