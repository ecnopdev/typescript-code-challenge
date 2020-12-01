
import storage from './storage'
import transformData from './transform'
import { RawEntry, TransformedData } from './definitions'

async function main() {
    const rawData = await storage.readData();
    const inputData: Array<RawEntry> = JSON.parse(rawData);
    const transformedData: TransformedData = transformData(inputData);
    const outputData: string = JSON.stringify(transformedData);
    const results = await storage.saveData(outputData);
    return results;
}

main()
    .then(() => {
        console.log("Data transformation successful. \nThe output file can be found at data/out/data-transformed.json\n\n");
    })
    .catch(e => {
        console.log(e);
    });

