import { FadeDirective } from './directives/fade.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GitSearchService } from './git-search.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepoComponent } from './repo/repo.component';
//import { NgProgressModule } from '@ngx-progressbar/core';
//import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { JoinDateCountPipe } from './join-date-count.pipe';



@NgModule({
  declarations: [
    AppComponent, NavbarComponent,
    FadeDirective,
    ProfileComponent,
    HomeComponent,
    PageNotFoundComponent,
    RepoComponent,
    JoinDateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    //NgProgressModule.forRoot(),
    //NgProgressHttpModule,

  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
