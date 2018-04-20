import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  {path: 'journal', loadChildren: 'app/journal/journal.module#JournalModule'},
  {path: 'links', loadChildren: 'app/links/links.module#LinksModule'},
  {path: 'downloads', loadChildren: 'app/downloads/downloads.module#DownloadsModule'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
