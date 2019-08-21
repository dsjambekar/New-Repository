import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyRepoComponent } from './my-repo/my-repo.component';
import { AuthGuardService  as AuthGuard } from './shared/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'repo', component: MyRepoComponent, canActivate: [AuthGuard] },
  { path: 'user-details', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'question-papers', component: QuestionPaperComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
