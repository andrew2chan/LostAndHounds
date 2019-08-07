import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {MapService} from '../../services/map.service';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('infoFormContainer') formContainer: ElementRef;
  @ViewChild('infoFormContainerDisplay') formContainerDisplay: ElementRef;
  @ViewChild('infoForm') form: ElementRef;
  @ViewChild('validatePhoneMessage') validatePhoneMessage: ElementRef;
  @ViewChild('validateEmailMessage') validateEmailMessage: ElementRef;
  markers: marker[] = [];
  lat: number = 50; //default if user doesn't allow geo
  lng: number = 50;
  popNotSubmit: boolean = false; //used for toggling which markers should be shown

  //for making a new marker
  petName: String;
  name: String;
  phone: number;
  email: String;
  description: String;

  //for showing info from existing marker
  petNameDisplay: String;
  nameDisplay: String;
  phoneDisplay: number;
  emailDisplay: String;
  descriptionDisplay: String;

  constructor(private renderer: Renderer2, private mapservice: MapService, private validateService: ValidateService) { }

  ngAfterViewInit() {
    //Covers people jumping straight to this link
    (<HTMLElement>document.querySelectorAll("nav .nav-wrapper")[0]).style.backgroundColor = "black";
    this.validatePhoneMessage.nativeElement.style.display = "none";
    this.validateEmailMessage.nativeElement.style.display = "none";
    this.validatePhoneMessage.nativeElement.style.color = "red";
    this.validateEmailMessage.nativeElement.style.color = "red";

    //checks if geolocation supported
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this)); //binds this so that callback accesses component variable rather than callback variable
    }
    else {
      console.log("Geolocation not supported.");
    }

    //function used to get all markers and set the returned markers to the marker variable
    this.getMarkers();
  }

  // set center of map if user allows geolocation
  setPosition(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }

  //everytime map is clicked, add a marker
  placeMarker(e) {
    if(this.markers && this.popNotSubmit) {
      console.log(this.popNotSubmit)
      this.markers.pop();
    }

    this.markers.push({
      lat: e.coords.lat,
      lng: e.coords.lng,
      animate: 'DROP'
    });

    this.formContainer.nativeElement.style.display= "block"; //show container for form
    this.formContainerDisplay.nativeElement.style.display = "none"; //hide display form if showing
    this.form.nativeElement.reset(); //reset form
    this.popNotSubmit = true;
  }

  closeSide() {
    this.form.nativeElement.reset();
    this.formContainer.nativeElement.style.display = "none";
    if(this.popNotSubmit) {
      this.markers.pop();
    }
    this.popNotSubmit = false;
  }

  onInfoSubmit() {
    if(!this.validateService.validatePhone(this.phone)) {
      this.validatePhoneMessage.nativeElement.style.display = "block";
    }
    else {
      this.validatePhoneMessage.nativeElement.style.display = "none";
    }
    if(!this.validateService.validateEmail(this.email)) {
      this.validateEmailMessage.nativeElement.style.display = "block";
    }
    else {
      this.validateEmailMessage.nativeElement.style.display = "none";
    }
    if(!this.validateService.validateEmail(this.email) || !this.validateService.validatePhone(this.phone)) return;

    const newMarker = {
      petName: this.petName,
      fullName: this.name,
      phone: this.phone,
      email: this.email,
      description: this.description,
      lat: this.markers[this.markers.length-1].lat,
      lng: this.markers[this.markers.length-1].lng
    };

    this.mapservice.addMarkerToDB(newMarker).subscribe((data) => {
      if(data.success) {
        this.form.nativeElement.reset();
        this.formContainer.nativeElement.style.display = "none";
      }
      this.popNotSubmit = false;
    });
  }

  getMarkers() {
    this.mapservice.getAllMarkers().subscribe((data) => {
      if(data.success) {
        this.markers = data.markers;
        this.markers.forEach((m) => {
          m.animate = 'DROP';
        });
      }
    });
  }

  markerClicked(specificMarker) {
    const searchMarker = {
      ID: specificMarker._id
    };

    this.formContainerDisplay.nativeElement.style.display = "block";

    this.mapservice.getSpecificMarker(searchMarker).subscribe((data) => {
      if(data.success) {
        this.petNameDisplay = data.markers.petName;
        this.nameDisplay = data.markers.fullName;
        this.phoneDisplay = data.markers.phone;
        this.emailDisplay = data.markers.email;
        this.descriptionDisplay = data.markers.description;
      }
    });

    this.closeSide();
  }

  closeSideDisplay() {
    this.formContainerDisplay.nativeElement.style.display = "none";
  }
}

interface marker {
  lat: number;
  lng: number;
  animate: string;
}
