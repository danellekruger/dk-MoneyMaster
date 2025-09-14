import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import jsPDF from 'jspdf';
import Papa from 'papaparse';

interface Transaction {
  type: string;
  amount: number;
  category: string;
  date: Date;
  description: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  displayedColumns: string[] = ['type', 'amount', 'category', 'date', 'description'];
  dataSource: Transaction[] = [ // Mock data
    { type: 'expense', amount: 100, category: 'Food', date: new Date(), description: 'Groceries' },
    { type: 'income', amount: 500, category: 'Salary', date: new Date(), description: 'Monthly pay' }
  ];

  exportToPDF() {
    const doc = new jsPDF();
    doc.text('Finance Report', 10, 10);
    let y = 20;
    this.dataSource.forEach((tx, index) => {
      doc.text(`${index + 1}. ${tx.type}: $${tx.amount} - ${tx.category} on ${tx.date.toDateString()}`, 10, y);
      y += 10;
    });
    doc.save('report.pdf');
  }

  exportToCSV() {
    const csv = Papa.unparse(this.dataSource);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'report.csv';
    link.click();
  }
}
