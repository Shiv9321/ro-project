import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Options } from '@angular-slider/ngx-slider';

@Component
({
  selector: 'app-filter-budget',
  templateUrl: './filter-budget.component.html',
  styleUrls: ['./filter-budget.component.css']
})

export class FilterBudgetComponent {

  minValue: number = 1000;
  maxValue: number = 15000;
  sliderOptions!: Options;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser)
    {
      this.sliderOptions =
      {
        floor: 1000,
        ceil: 15000
      };
    }
  }

}

