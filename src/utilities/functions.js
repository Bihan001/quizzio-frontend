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
