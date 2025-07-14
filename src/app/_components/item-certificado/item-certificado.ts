import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() nomeAluno = ''
  @Input() dataEmissao = ''
  @Input() id: string = ''

  constructor(private router: Router){}

  redirectCertificate(){
    this.router.navigate(['/certificados', this.id])
  }
}
