import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent {

  nom : any = "Nour";
  prenom : any = "Boumaiza";
  job : any = "Developper";
  profileImage : any = "assets/images/rotating_card_profile.png";
  coverImage : any = "assets/images/rotating_card_thumb2.png";
  quote : any = "It takes courage to grow up and become who you really are";
  description : any = "Je métrise les technologies du Web et mobile";
  keywords : any = "HTML CSS JS Angular React Vue";

}
