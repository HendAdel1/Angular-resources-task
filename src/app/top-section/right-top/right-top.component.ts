import { Component } from '@angular/core';

@Component({
  selector: 'app-right-top',
  templateUrl: './right-top.component.html',
  styleUrls: ['./right-top.component.css']
})
export class RightTopComponent {

  imageUrl?: string | ArrayBuffer | null = null;
  imageFile: File | null = null;

  handleImageClick() {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput.click();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.imageFile = file;

    // Display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() {
    // Implement your image upload logic here
    if (this.imageFile) {
      // Perform the HTTP request to upload the image
      // You can use Angular's HttpClient or any other library of your choice
      console.log('Uploading image:', this.imageFile);
    }
  }
}
