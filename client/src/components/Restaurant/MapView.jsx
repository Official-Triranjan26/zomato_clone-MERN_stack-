import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = (props) => {
  return (
    <>

      <div>
        <h4 className="text-xl font-normal">Call</h4>
        <h5 className="text-zomato-400 font-medium">{props.phno}</h5>
      </div>
      <div>
        <h4 className="text-xl font-normal">Direction</h4>
        <div className="w-full h-48">
          <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false} className="h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.mapLocation}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
          <MdContentCopy /> Copy
        </button>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${props.mapLocation}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg"
        >
          <span className="text-zomato-400">
            <FaDirections />
          </span>{" "}
          Direction
        </a>
      </div>
    </>
  );
};

export default MapView;
