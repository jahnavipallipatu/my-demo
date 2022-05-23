import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookDetailsComponent } from './componets/book-details/book-details.component';
import { ComponetsComponent } from './componets/componets.component';
import { AddBookComponent } from './componets/add-book/add-book.component';
import { BookListComponent } from './componets/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookDetailsComponent,
    ComponetsComponent,
    AddBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
