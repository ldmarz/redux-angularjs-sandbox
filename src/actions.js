const WRITE_NAME = 'INCREMENT_COUNTER';

function write_name(name) {
  return {
    type: WRITE_NAME,
    name
  };
}

export default {write_name, WRITE_NAME};