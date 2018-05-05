export const SAVE_FILE = 'SAVE_FILE';

export const saveFile = (file) => {
  return {
    type: SAVE_FILE,
    file,
  };
};