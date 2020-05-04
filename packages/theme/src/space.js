const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map((v) => {
  const s = `${(100 * v) / 1920}vw`;
  return s;
});

export default space;
