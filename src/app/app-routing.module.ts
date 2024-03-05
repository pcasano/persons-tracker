import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { FormularComponent } from './formular/formular.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: '', component: AppComponent }
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
