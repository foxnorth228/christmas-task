//data from assets/bg
const config = {
  bg: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  bgPath: [] as string[],
  path: './bg',
  ext: 'webp',
  selectBg: 'Выберите фон',
};

config.bgPath = config.bg.map((el) => `url('${config.path}/${el}.${config.ext}')`);
export default config;
