import { config } from './_config.js';
import { deleteAsync } from 'del';

const clean = async done => {
  await deleteAsync(`${config.views.index.dest}*`);
  done();
};

export default clean;
