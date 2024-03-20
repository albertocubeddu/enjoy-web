"use client";

import React, { useEffect, useState } from "react";
import { fetchSports } from "../../lib/data";

const Sports = () => {
  const [sport, setSport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportsData = await fetchSports();
        setSport(sportData);
      } catch (error) {
        console.error("Error fetching sports:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-3 gap-4">
        {sport.map((sport) => (
          <div key={sport.id} className="bg-gray-100 rounded-lg p-4">
            <img
              src={sport.image_url}
              alt={sport.name}
              className="w-full h-auto rounded-lg mb-2"
            />
            <div className="text-center">{sport.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
