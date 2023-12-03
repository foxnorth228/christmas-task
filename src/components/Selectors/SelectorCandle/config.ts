const config = {
  candle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  candlePath: [] as string[],
  path: './candles',
  ext: 'webp',
  selectCandle: 'Свечи',
};

config.candlePath = config.candle.map((el) => `url('${config.path}/${el}.webp')`);
export default config;
