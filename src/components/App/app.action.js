const REPLACE_LOCATION = 'REPLACE_LOCATION';

function replaceLocation(location) {
  return {
    type: REPLACE_LOCATION,
    location: location
  };
}
