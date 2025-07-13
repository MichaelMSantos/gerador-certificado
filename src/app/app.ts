import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { BaseUi } from "./_components/base-ui/base-ui";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";
import { Certificados } from "./certificados/certificados";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, BaseUi, ItemCertificado, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
