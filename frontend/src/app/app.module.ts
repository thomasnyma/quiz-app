// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

// Services
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
