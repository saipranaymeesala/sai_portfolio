import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  downloadResume() {
    const resumeUrl = 'assets/Resume_.pdf'; // Place the path to your resume file here
    window.open(resumeUrl, '_blank'); // Opens the PDF in a new tab
}


}
