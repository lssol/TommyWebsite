import { Component, OnInit } from '@angular/core';
import {JsonConvert} from "json2typescript";
import {Image, Project} from "./gallery.model";
import * as $ from "jquery"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  selectedGallery: string = "illustration";
  selectedProject: string = undefined;

  constructor() { }

  ngOnInit() {
     $.getJSON("portfolio/portfolio.json", function(data){
       console.log("hi :)");
        console.log(this);
        console.log(data);
     });
  }

}
