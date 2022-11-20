import { NearBindgen, UnorderedMap, Vector } from "near-sdk-js"


export class Event {
    id: string
    name: string
    description: String
    image: String
    location: String
    fee: bigint
    creator: string
    sold: number

    public incrementSoldTicket(): void {
        this.sold = this.sold + 1;
    }
}

export const listedEvents = new Vector<Event>("LISTED_EVENTS")

