import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './Map.css'
import "leaflet/dist/leaflet.css"
import { Utils } from '../util';
import { AppConst } from '../constants';

function Map({ position, countries, caseType }) {
    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    return (
        <div className="map">
            <MapContainer center={position} zoom={AppConst.ZOOM_VALUE}>
                <ChangeView center={position} zoom={AppConst.ZOOM_VALUE} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    Utils.showDataOnMap(countries, caseType)
                }
            </MapContainer>
        </div>
    )
}

export default Map