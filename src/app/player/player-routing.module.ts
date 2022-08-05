import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerPage } from './player.page';
import { ContentslistComponent } from './components/contentslist/contentslist.component';
import { PdfComponent } from './components/pdf/pdf.component';

const routes: Routes = [

  {
    path: '',
    component: PlayerPage
  },
  {
    path: 'contentslist',
    component: ContentslistComponent
  },
  {
    path: 'pdf',
    component: PdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerPageRoutingModule {}
