import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  mobileMenuOpen = false;  title = 'Smash'; 
  constructor(private r: Router) 
  {
    r.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => 
      {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.mobileMenuOpen = false;
    });
  }

  navigateTo = (path: string) => 
    {
    this.r.navigateByUrl(path).then(() => this.mobileMenuOpen = false);
  }

  toggleMobileMenu = () => this.mobileMenuOpen = !this.mobileMenuOpen;
}
