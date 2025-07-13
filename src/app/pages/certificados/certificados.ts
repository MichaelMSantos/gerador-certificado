import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { Router, RouterLink } from '@angular/router';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {
  constructor(
    private router: Router
  ){}
}
