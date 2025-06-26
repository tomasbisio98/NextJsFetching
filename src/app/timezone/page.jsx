'use client';
import { useEffect, useState } from 'react';

export default function TimeZone() {
  const [datetime, setDatetime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      const res = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota');
      const data = await res.json();
      setDatetime(data.datetime);
    };
    fetchTime();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-3xl">{datetime || 'Cargando...'}</h1>
    </div>
  );
}