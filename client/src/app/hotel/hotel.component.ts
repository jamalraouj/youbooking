import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Hotel} from "../../models/hotel.model";
import {HttpErrorResponse} from "@angular/common/http";
import {HotelService} from "../services/hotel/hotel.service";
import * as QueryString from "querystring";
import {ActivatedRoute} from "@angular/router";
import {Chamber} from "../../models/chamber.model";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {
  private queryParams: any;

  id!: number;
   hotel!: Hotel;

  constructor( private hotelService:HotelService , private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id']
    this.getHotel();
  }
  public getHotel(): void {
    this.hotelService.getThisHotel(this.id).subscribe(
      (response:Hotel) => {
        this.hotel = response;
        // this.chamberList = response.chamberList;
        console.log(this.hotel)
    });
    console.log()
    // this.hotelService.getThisHotel().subscribe(
    //   (response: Hotel) => {
    //      response;
    //     console.log(response);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }

}
