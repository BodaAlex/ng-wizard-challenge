import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardContainerComponent } from './wizard-container/wizard-container.component';
import { TextContainerComponent } from './text-container/text-container.component';
import { WizardButtonComponent } from './wizard-button/wizard-button.component';
import { WizardPageComponent } from './wizard-page/wizard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardContainerComponent,
    TextContainerComponent,
    WizardButtonComponent,
    WizardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
