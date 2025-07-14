import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { Router, RouterLink } from '@angular/router';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { CertificadoService } from '../../_services/certificado-service';
import { ICertificado } from '../../interfaces/certificado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, RouterLink, ItemCertificado, CommonModule],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {

  certificados: ICertificado[] = []

  constructor(
    private certificadoService: CertificadoService
  ){}

  ngOnInit(): void {
      this.certificados = this.certificadoService.certificados
  }
}
   