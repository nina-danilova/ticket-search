export const calculateDestinateTime = (startTime: string, duration: number) => {
  const startHours = startTime.substr(11, 2);
  const startMinutes = startTime.substr(14, 2);
  let destinateHours = 0;
  let destinateMinutes = 0;

  destinateHours = Number(startHours) + Math.floor(duration / 60);
  destinateMinutes = Number(startMinutes) + (duration % 60);

  while (destinateMinutes >= 60) {
    destinateMinutes -= 60;
    destinateHours += 1;
  }

  while (destinateHours >= 24) {
    destinateHours -= 24;
  }

  return `${startHours}:${startMinutes} - ${destinateHours}:${destinateMinutes}`;
};

export const getEnding = (stopsCount: number) => {
  if (stopsCount === 0) {
    return 'ок';
  }
  if (stopsCount === 1) {
    return 'ка';
  }
  if (stopsCount > 1) {
    return 'ки';
  }
  return null;
};
