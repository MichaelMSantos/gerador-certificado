import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado-service';
import { v4 as uuidv4 } from 'uuid'
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService, private route: Router) { }
  @ViewChild('form') form!: NgForm

  certificado: ICertificado = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
  }
  atividade: string = ''

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionarAtividade() {
    if (this.atividade.length == 0) {
      return
    }

    this.certificado.atividades.push(this.atividade)
    this.atividade = ''
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1)
  }

  submit() {
    if (!this.formValido()) {
      return
    }
    this.certificado.dataEmissao = this.currentDate()
    this.certificado.id = uuidv4()
    this.certificadoService.adicionarCertificado(this.certificado)


    this.route.navigate(['certificados',this.certificado.id])

    // this.certificado = this.initialState()
    // this.form.resetForm()
  }

  currentDate() {
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = currentDate.getFullYear()

    const dateFormat = `${day}/${month}/${year}`
    return dateFormat
  }

  initialState() {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: ''
    }
  }
}
