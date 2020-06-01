import sum from 'hash-sum';

const BASE_L = 52; // hLs
const RANGE_L = 20;
const BASE_S = 63; // hlS
const RANGE_S = 25;

const HUE_STEP = 5;

function toHSL(h, s, l) {
  return `hsl(${h},${s}%,${l}%)`;
}

export default function(str, index = 0, opts) {
  const step = opts.hueStep || HUE_STEP;
  const l = opts.lightness || BASE_L;
  const s = opts.saturation || BASE_S;
  const direction = opts.reverse ? -1 : 1;

  const hashNum = parseInt(sum(str),16);
  const baseH = parseInt(hashNum % 359); // 359 is a prime
  const currentH = (baseH + (index * step * direction)) % 360;

  // const s = BASE_S + RANGE_S - (hashNum % RANGE_S);
  // const l = BASE_L + RANGE_L - ((hashNum + str.length) % RANGE_L);

  return toHSL(currentH, s, l);
};