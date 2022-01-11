
export const csvToJSON = (csv) => {
  let lines = csv.split('\n');
  let result = [];
  let headers = lines[0].split(',');
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    let obj = {};
    let currentline = lines[i].split(',');
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentline[j].trim();
    }
    result.push(obj);
  }
  return result;
};

export const getUnitsFromDuration = (duration) => {
  duration = duration / 1000;
  const days = Math.floor(duration / 86400);
  duration -= days * 86400;
  const hours = Math.floor(duration / 3600) % 24;
  duration -= hours * 3600;
  const minutes = Math.floor(duration / 60) % 60;
  duration -= minutes * 60;
  const seconds = Math.floor(duration % 60);
  return { days, hours, minutes, seconds };
};
