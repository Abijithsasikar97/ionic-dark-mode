import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  darkMode: boolean = false;

  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = prefersColor.matches;
  
      prefersColor.addEventListener(
        'change',
        mediaQuery => {
          this.darkMode = mediaQuery.matches;
          this.updateDarkMode();
        }
      );
  }

  updateDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }

}
