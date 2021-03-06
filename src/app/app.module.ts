import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewQuestionComponent } from './new-question/new-question.component';

import { QuillModule } from 'ngx-quill';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular-6-social-login';
import { SigninComponent } from './signin/signin.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './login-button/login-button.component';
import { MyRepoComponent } from './my-repo/my-repo.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { WindowRef } from './WindowRef';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuardService } from './shared/auth-guard.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

import {TimeAgoPipe} from 'time-ago-pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { NewQuestionPaperComponent } from './question-paper/new-question-paper/new-question-paper.component';
import { QuestionPaperListComponent } from './question-paper/question-paper-list/question-paper-list.component';
import { QuestionPaperDetailComponent } from './question-paper-detail/question-paper-detail.component';
import { QuestionPaperDialogComponent } from './question-paper/question-paper-dialog/question-paper-dialog.component';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('Your-Facebook-app-id')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(environment.googleLoginProviderId)
        }
      ]
  );
  return config;
}

const appRoutes: Routes = [
  {
    path: 'send-contact',
    component: ContactComponent,
    data: { title: 'Send contact form' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ContactComponent,
    NotFoundComponent,
    NewQuestionComponent,
    SigninComponent,
    LoginButtonComponent,
    MyRepoComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    TimeAgoPipe,
    UserProfileComponent,
    FilterBarComponent,
    QuestionPaperComponent,
    NewQuestionPaperComponent,
    QuestionPaperListComponent,
    QuestionPaperDetailComponent,
    QuestionPaperDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    QuillModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs,
  },
  { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
  WindowRef,
AuthGuardService ],
  bootstrap: [AppComponent],
  entryComponents: [
    SigninComponent,
    QuestionPaperDialogComponent
  ]
})
export class AppModule { }

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}
