import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SapceXdataComponent } from '../app/component/sapce-xdata/sapce-xdata.component'

const routes: Routes = [{
  path: '**',
  component: SapceXdataComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
