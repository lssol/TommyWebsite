import { NgModule } from '@angular/core';
import {CanDeactivate, RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {AboutComponent} from './about/about.component';
import {ProjectComponent} from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/Gallery/illustration', pathMatch: 'full' },
  { path: 'Gallery/:category', component: GalleryComponent },
  { path: 'Project/:id', component: ProjectComponent },
  { path: 'Contact', component: AboutComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
