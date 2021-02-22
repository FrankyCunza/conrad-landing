import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  public images = [];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        image: 'solution1',
        description: 'Imagen 1'
      },
      {
        image: 'solution2',
        description: 'Imagen 2'
      },
      {
        image: 'solution3',
        description: 'Imagen 3'
      },
      {
        image: 'solution4',
        description: 'Imagen 4'
      },
      {
        image: 'solution5',
        description: 'Imagen 5'
      }
    ]
  }

  sliderSolutions(index) {
    const thumbs = document.getElementsByClassName("solution__thumbs__item");
    for (var i=0; i<thumbs.length;i++) {
      if(i == index) {
        thumbs[i].classList.add("solution__thumbs__item--active")
      } else {
        thumbs[i].classList.remove("solution__thumbs__item--active")
      }
    }

    document.getElementById(`solution__slider__content`).style.transform = `translateX(-${index}00%)`;
  }

}
