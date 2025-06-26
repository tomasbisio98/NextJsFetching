const getTimeZone = async () => {
  const res = await fetch("http://worldclockapi.com/api/json/utc/now");
  const data = await res.json();
  return data;
};

const TimeZone = async () => {
  const { currentDateTime } = await getTimeZone();
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-3xl">{currentDateTime}</h1>
    </div>
  );
};