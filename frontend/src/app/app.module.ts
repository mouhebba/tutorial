import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { EmployeeCreationService } from './employee-creation.service';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"", component:CreationComponent, pathMatch:"full"},
  {path:"create", component:CreationComponent},
  {path:"search", component:SearchDeleteComponent},
  {path:"update/:id", component:UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    SearchDeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    EmployeeCreationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
