import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  generarDocumento(): void {
    let document: jsPDF = new jsPDF();
    document.setFontSize(22);
    document.text("Mi documento de martes", 20, 20);
    document.setFontSize(16);
    const headers = [["Nombre", "Email", "Edad"]];
    const data = [
      ["Juan", "juan@example.com", "30"],
      ["María", "maria@example.com", 25],
      ["Pedro", "pedro@example.com", 35],
      ["Ana", "ana@example.com", 28],
    ];

    autoTable(document, {
      head: headers,
      body: data,
      startY: 30,
    });
    document.save("personas.pdf");
  }
}
