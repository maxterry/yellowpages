import React from "react";

import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet";
import L from "leaflet";

// import { Company } from "./types";

import logo from "../../assets/logo.svg";

import { LocationData } from "../LocationData";

import "./style.css";

type Company = {
  slug: string;
  name: string;
  description?: string;
  tags?: string[];
  logo?: string;
  screenshot?: string;
  locations?: string[];
  domain?: string;
  founder?: string;
  phone?: string;
  founded?: string;
};

type CompanyLocationsProps = {
  company: Company;
};

function CompanyLocations({ company }: CompanyLocationsProps) {
  const customIcon = L.icon({
    iconUrl: location.icon || company.logo || logo,
    iconSize: [40, 40], // Adjust the size as needed
  });

  const companyLocations = LocationData.filter(
    (location) => location.company === company.slug,
  );

  if (!companyLocations.length) {
    return null;
  }

  const geographicCenterOfLower48 = [39.833333, -98.583333];

  return (
    <div className="company-map">
      <MapContainer
        zoom={2}
        scrollWheelZoom={false}
        center={geographicCenterOfLower48}
        style={{ height: "100%", minHeight: "100%" }}
      >
        {companyLocations.map((location, index) => (
          <Marker
            key={index}
            position={[Number(location.latitude), Number(location.longitude)]}
            icon={customIcon}
          >
            <Popup>
              {location.name && <b>{location.name}</b>}
              <br />
              {location.address || company.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default CompanyLocations;
