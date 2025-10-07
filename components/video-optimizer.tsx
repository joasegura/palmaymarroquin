// components/video-optimizer.tsx
"use client";

import { useEffect } from "react";

export function VideoOptimizer() {
  useEffect(() => {
    const VIDEO_URL = "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/portada.mp4";
    const STORAGE_KEY = "video_cached";

    // Evitar múltiples cargas del mismo video
    if (document.querySelector(`link[rel="preload"][href="${VIDEO_URL}"]`)) {
      console.log("⚡ Video ya precargado, evitando duplicación");
      return;
    }

    // Si ya se cargó antes, asumimos que está cacheado
    const isCached = sessionStorage.getItem(STORAGE_KEY);
    if (isCached) {
      console.log("✅ Video ya cacheado en sesión");
      return;
    }

    console.log("🎯 Precargando video para próximas visitas...");

    // Preload con <link>
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = VIDEO_URL;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    // Preload con <video>
    const video = document.createElement("video");
    video.src = VIDEO_URL;
    video.preload = "auto";
    video.crossOrigin = "anonymous";
    video.load();

    video.oncanplaythrough = () => {
      console.log("✅ Video precargado y listo");
      sessionStorage.setItem(STORAGE_KEY, "true");
    };

    return () => {
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return null;
}
