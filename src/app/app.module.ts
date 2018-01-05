import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Button } from 'app/button';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Button,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/all', pathMatch: 'full' },
    //   { path: 'main',  component: MainComponent },
    //   { path: 'base', component: BaseComponent },
    //   { path: 'all', component: AppComponent },
      
    // ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
