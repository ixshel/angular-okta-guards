import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Okta Oauth
import { OAuthModule } from 'angular-oauth2-oidc';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

// Services and Guards
import { SearchService, AuthGuard } from './shared';

// Forms
import { FormsModule } from '@angular/forms';

// Router
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    OAuthModule.forRoot()
  ],
  // Fix for "No provider"
  providers: [AuthGuard, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
