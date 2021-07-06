import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTabsModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatExpansionModule, MatRadioModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JobQueryBuilderComponent } from './job-query-builder/job-query-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { QueryFormComponent } from './query-form/query-form.component';
import { RulesetBuilderComponent } from './ruleset-builder/ruleset-builder.component';

@NgModule({
  imports:      [ BrowserModule, 
  NoopAnimationsModule, 
  FormsModule, 
  MatFormFieldModule, 
  MatSelectModule, 
  MatInputModule,
  MatTabsModule, 
  MatButtonModule, 
  MatExpansionModule,
  MatRadioModule,
  ReactiveFormsModule
  ],
  declarations: [ AppComponent, JobQueryBuilderComponent, QueryFormComponent, RulesetBuilderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
