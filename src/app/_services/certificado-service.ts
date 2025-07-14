import { Injectable } from '@angular/core';
import { ICertificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: ICertificado[] = []
  constructor() { }

  adicionarCertificado(certificado: ICertificado) {
    this.certificados.push({ ...certificado })
  }
}
