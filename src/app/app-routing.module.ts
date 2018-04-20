import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutModule} from './about/about.module';
import {ScrappingModule} from './scrapping/scrapping.module';
import {JournalModule} from './journal/journal.module';
import {LinksModule} from './links/links.module';
import {DownloadsModule} from './downloads/downloads.module';
import {CardMakingModule} from './card-making/card-making.module';
import {AlbumsModule} from './albums/albums.module';
import {PaintingModule} from './painting/painting.module';
import {DecoupageModule} from './decoupage/decoupage.module';
import {CrochetModule} from './crochet/crochet.module';
import {ArtyFactsModule} from './arty-facts/arty-facts.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', loadChildren: () => AboutModule},
  {path: 'journal', loadChildren: () => JournalModule},
  {path: 'links', loadChildren: () => LinksModule},
  {path: 'downloads', loadChildren: () => DownloadsModule},
  {path: 'scrapping', loadChildren: () => ScrappingModule},
  {path: 'card-making', loadChildren: () => CardMakingModule},
  {path: 'albums', loadChildren: () => AlbumsModule},
  {path: 'painting', loadChildren: () => PaintingModule},
  {path: 'decoupage', loadChildren: () => DecoupageModule},
  {path: 'crochet', loadChildren: () => CrochetModule},
  {path: 'arty-facts', loadChildren: () => ArtyFactsModule},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
