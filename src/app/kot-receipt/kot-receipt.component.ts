import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-kot-receipt',
  standalone:true,
  imports: [ CommonModule],
  templateUrl: './kot-receipt.component.html',
  styleUrl: './kot-receipt.component.css'
})
export class KotReceiptComponent {
  companyName = 'Demo Restaurant';
  companyAddress = '123, Food Street, Cityville';
  companyPhone = '(123) 456-7890';
  
  // Get the current date and time
  currentDate = new Date();
  date = this.currentDate.toLocaleDateString();
  time = this.currentDate.toLocaleTimeString();

  kotDetails = {
    orderNumber: 'ORD1234',
    items: [
      { name: 'Burger', quantity: 2, price: 5.99 },
      { name: 'Fries', quantity: 1, price: 2.49 },
      { name: 'Soda', quantity: 3, price: 1.99 }
    ],
    total: 5.99 * 2 + 2.49 + 1.99 * 3  // Calculated total
  };

  // Method to trigger printing
  printReceipt() {
    const printWindow = window.open('', '', 'width=800,height=600');
    const printContent = document.getElementById('kot-receipt-content')?.innerHTML;
    
    printWindow?.document.write('<html><head><title>Receipt</title>');
    
    // Add styles for paper size to the print window
    printWindow?.document.write(`
      <style>
        @media print {
          .kot-receipt {
            width: 80mm; /* Set the print width to 80mm */
            padding: 10px;
            margin: 0;
            font-size: 12px;
          }
          body {
            width: 80mm;
            margin: 0;
            padding: 0;
          }
          .kot-receipt table {
            width: 100%;
            border-collapse: collapse;
          }
          .kot-receipt th, .kot-receipt td {
            padding: 5px;
            text-align: left;
          }
        }
      </style>
    `);
    
    printWindow?.document.write('</head><body>');
    printWindow?.document.write(printContent || '');
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.print();
  }

  // Method to trigger downloading the receipt as PDF
  downloadReceipt() {
    const doc = new jsPDF({
      orientation: 'p', // portrait
      unit: 'mm',       // units in millimeters
      format: [80, 150] // page size 80mm x 150mm (height can be adjusted)
    });

    const receiptContent = document.getElementById('kot-receipt-content')?.innerHTML;

    // Add content to the PDF (you may need to tweak the positioning/formatting)
    doc.html(receiptContent || '', {
      callback: (doc) => {
        doc.save('kot-receipt.pdf');
      },
      margin: [10, 10, 10, 10],
      x: 10,
      y: 10
    });
  }

}
