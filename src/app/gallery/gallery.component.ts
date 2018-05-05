import { Component, OnInit } from '@angular/core';
import {JsonConvert} from 'json2typescript';
import {Image, Project, Projects} from './gallery.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  projects: Project[];
  selectedGallery = 'illustration';
  selectedProject: string = undefined;

  constructor() { }

  ngOnInit() {
    const $this = this;
    $.getJSON('assets/portfolio/portfolio.json', function(data) {
      const jsonConvert: JsonConvert = new JsonConvert();
      $this.projects = jsonConvert.deserializeObject(data, Projects);
    });
  }
}
