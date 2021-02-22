import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public images =[];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        image: 'gallery1',
        description: ''
      },
      {
        image: 'gallery2',
        description: ''
      },
      {
        image: 'gallery3',
        description: ''
      },
      {
        image: 'gallery4',
        description: ''
      },
      {
        image: 'gallery5',
        description: ''
      }
    ]
  }

  slider(index, group, e) {
    const thumbs = document.getElementsByClassName('gallery__thumbs__item');
    if(group == 'thumbs') {
      document.getElementById('gallery__items').style.transform = `translateX(-${index}00%)`;
      
      // Add border style in thumbs
      for(var i = 0; i < thumbs.length; i++) {
        if(i == index) {
          thumbs[i].classList.add('gallery__thumbs__item--active');
        } else {
          thumbs[i].classList.remove('gallery__thumbs__item--active');
        }
      }
    }
  }

}
