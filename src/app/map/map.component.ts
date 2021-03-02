import { Component, AfterViewInit } from '@angular/core';
import * as l from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
map!: l.Map;


constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

    createMap() {
const tunisie ={
  lat:33.886917,
  lng : 9.537499,
};

const zoomlevel = 12;

this.map=l.map('map',{
  center:[tunisie.lat, tunisie.lng],
  zoom: zoomlevel
});

const mainLayer = l.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
 minZoom :5,
 maxZoom:17,
attribution : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
 });
 mainLayer.addTo(this.map);

  }
}

