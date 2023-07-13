import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  menu: HTMLElement | null = null;
  navbar: HTMLElement | null = null;
  constructor() { }

  ngOnInit(): void {
    // Obtener elementos del DOM
    this.menu = document.querySelector('#menu-btn');
    this.navbar = document.querySelector('.header .navbar');

    // Asignar eventos
    this.menu?.addEventListener('click', () => {
      this.menu?.classList.toggle('fa-times');
      this.navbar?.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
      this.menu?.classList.remove('fa-times');
      this.navbar?.classList.remove('active');
    });

    // Inicializar los sliders de Swiper
    new Swiper(".home-slider", {
      spaceBetween: 20,
      effect: "fade",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".review-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        600:{
          slidesPerView:2,
        },
      },
    });

    new Swiper(".blogs-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        768:{
          slidesPerView:2,
        },
        991:{
          slidesPerView:3,
        },
      },
    });
  }
}