import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DoctorsComponent } from './components/matters/doctors/doctors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import 'chartjs-plugin-labels';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { PhysiotherapistsComponent } from './components/matters/physiotherapists/physiotherapists.component';
import { NutritionistsComponent } from './components/matters/nutritionists/nutritionists.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { CardSourceInformationsComponent } from './components/topics/card-source-informations/card-source-informations.component';
import { CardShareInformationComponent } from './components/topics/card-share-information/card-share-information.component';
import { CardTypeEventsComponent } from './components/topics/card-type-events/card-type-events.component';
import { CardDigitalEventComponent } from './components/topics/card-digital-event/card-digital-event.component';
import { CardELearningComponent } from './components/topics/card-e-learning/card-e-learning.component';
import { CardRelationshipCompaniesComponent } from './components/topics/card-relationship-companies/card-relationship-companies.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabComponent } from './components/tab/tab.component';
import { OverviewComponent } from './components/matters/overview/overview.component';
import { PharmacistsComponent } from './components/matters/pharmacists/pharmacists.component';
import { ClerksComponent } from './components/matters/clerks/clerks.component';
import { HeaderComponent } from './components/matters/clerks/header/header.component';
import { SectionContentComponent } from './components/matters/clerks/section-content/section-content.component';
import { SectionContentTabsComponent } from './components/matters/clerks/section-content-tabs/section-content-tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorsComponent,
    PhysiotherapistsComponent,
    NutritionistsComponent,
    OverviewComponent,
    CardItemComponent,
    CardSourceInformationsComponent,
    CardShareInformationComponent,
    CardTypeEventsComponent,
    CardDigitalEventComponent,
    CardELearningComponent,
    CardRelationshipCompaniesComponent,
    FooterComponent,
    TabComponent,
    PharmacistsComponent,
    ClerksComponent,
    HeaderComponent,
    SectionContentComponent,
    SectionContentTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    ChartModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
