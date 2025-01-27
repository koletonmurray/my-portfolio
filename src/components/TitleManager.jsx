import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TitleManager () {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "Koleton Murray",
      "/about": "About - Koleton Murray",
      "/projects": "Projects - Koleton Murray",
    };

    document.title = routeTitles[location.pathname] || "Koleton Murray";
  }, [location]);

  return null;
};