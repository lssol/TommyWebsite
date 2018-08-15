import {AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Image, Project} from '../gallery.model';
import {GalleryService} from '../gallery.service';
import {GameInstance} from '../game.instance';

declare var UnityLoader;
declare var UnityProgress;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  selectedProject: string = undefined;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private game: GameInstance
  ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.selectedProject = p.get('id'));
    this.galleryService.getProject(this.selectedProject)
      .subscribe(p => {
        this.project = p;
        if (this.project.game)
          this.loadGame();
      });
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(() => this.galleryService.getProject(this.selectedProject))
    ).subscribe(p => {
        this.project = p;
      });
  }

  loadGame() {
    var gameInstance;
    if (!gameInstance)
    {
      let $this = this;
      window.setTimeout(function() {
        gameInstance = UnityLoader.instantiate("gameContainer", "assets/portfolio/Branding/popland/Build/web6.json",
          {onProgress: UnityProgress});
        $this.game.gameInstance = gameInstance;
      }, 3000);
    }
  }
}
