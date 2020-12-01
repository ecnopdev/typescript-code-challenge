import fs from 'fs';
import util from 'util';

const DATA_SOURCE = `./data/in/data.json`;
const OUTPUT_DESTINATION = `./data/out/data-transformed.json`;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export default {
    readData: async () => {
        return await readFile(DATA_SOURCE, 'utf8');
    },
    saveData: async (data: string) => {
        return await writeFile(OUTPUT_DESTINATION, data);
    }
}