import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

import { reducers } from "./state/reducers";
import { PostEffects } from "./state/effects/post.effects";

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavigationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([PostEffects]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
