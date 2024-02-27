import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsdToInrPipe } from './pipe1/usd-to-inr.pipe';
import { DateAndTimePipe } from './pipe2/date-and-time.pipe';
import { StudentsDataComponent } from './students-data/students-data.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentServiceService } from './service2/student-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UsdToInrPipe,
    DateAndTimePipe,
    StudentsDataComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    StudentServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
