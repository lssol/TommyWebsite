import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/Gallery/illustration', pathMatch: 'full' },
  { path: 'Gallery/:category', component: GalleryComponent },
  { path: 'Gallery/Project/:id', component: GalleryComponent },
  { path: 'Contact', component: AboutComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
