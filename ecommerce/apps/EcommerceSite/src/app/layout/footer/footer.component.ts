import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faTwitter, faYoutube, faTruckFast);
  }
}
