import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'uriart-portfolio';
  observer: any;
  
  ngOnInit() {
    AOS.init()
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    let sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  intersectionObserver() {
    let options = {
      rootMargin: '0px',
      threshold: [0.6, 0.6]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionHandler(entry);
        }
      });
    }, options);
  }

  intersectionHandler(entry:any) {
    const id = entry.target.id;
    this.removeActiveClass();
    this.setActiveClass(id);
    this.menuOpacityHandler(id);
  }

  removeActiveClass() {
    const menuList = document.querySelectorAll("li");
    menuList.forEach((menuItem) => {
      menuItem?.classList.remove("text-green-600");
    });
  }

  setActiveClass(id:string) {
    const intersectioned = document.querySelector("li[data-ref=" + id + "]");
    null != intersectioned && intersectioned.classList.add("text-green-600");
  }

  menuOpacityHandler(id:string) {
    const navbar = document.querySelector("nav");
    if(id == 'home')
      navbar?.classList.remove('xl:bg-image-header');
    else
      navbar?.classList.add('xl:bg-image-header');
  }
}