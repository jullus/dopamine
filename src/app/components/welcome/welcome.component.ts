import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { Appearance } from '../../services/appearance/appearance';
import { Translator } from '../../services/translator/translator';
import { ContactInformation } from '../../core/contact-information';

@Component({
  selector: 'app-welcome',
  host: { 'style': 'display: block' },
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  constructor(public router: Router, public translator: Translator, public appearance: Appearance) { }

  public currentStep: number = 0;
  public totalSteps: number = 6;
  public donateUrl: string = ContactInformation.donateUrl;

  public get canGoBack(): boolean {
    return this.currentStep > 0 && this.currentStep < this.totalSteps - 1;
  }

  public get canGoForward(): boolean {
    return this.currentStep < this.totalSteps - 1;
  }

  public get canFinish(): boolean {
    return this.currentStep === this.totalSteps - 1;
  }

  public ngOnInit(): void {
  }

  public goBack(stepper: MatStepper): void {
    if (this.canGoBack) {
      stepper.previous();
      this.currentStep--;
    }
  }

  public goForward(stepper: MatStepper): void {
    if (this.canGoForward) {
      stepper.next();
      this.currentStep++;
    }
  }

  public finish(): void {
    this.router.navigate(['/main']);
  }
}
