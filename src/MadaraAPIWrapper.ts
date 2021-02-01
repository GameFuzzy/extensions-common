import { Madara } from "./base";
import { APIWrapper } from "./APIWrapper";

export class MadaraAPIWrapper extends APIWrapper {
    async getMadaraNumericId(source: Madara, mangaId: string): Promise<string> {
        return source.getNumericId(mangaId)
    }
}