import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import { usaData } from "@/Usamap";
import { canadaMap } from "@/CanadaMap";
const Map = ({ territories, location }) => {
  if (location.countryId === 2) {
    usaData.layers.forEach((layer) => {
      const serviceLocation = territories.find((state) => {
        return (
          state.territoryCode === layer.id.toUpperCase() && state.isServing
        );
      });
      if (serviceLocation) {
        layer.fill = "#419FC4";
      }
    });
  } else if (location.countryId === 1) {
    canadaMap.layers.forEach((layer) => {
      const serviceLocation = territories.find((state) => {
        return state.territoryName === layer.name && state.isServing;
      });
      if (serviceLocation) {
        layer.fill = "#419FC4";
      }
    });
  }

  return <VectorMap {...(location.countryId === 2 ? usaData : canadaMap)} />;
};

export default Map;
