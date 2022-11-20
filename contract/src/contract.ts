// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view } from 'near-sdk-js';
import { Event, listedEvents } from './model';

@NearBindgen({})
class Solsa {
  events: Event[] = [];

  @view({}) // This method is read-only and can be called for free
  get_events(): Event[] {
    return this.events
  }

  @view({}) // This method get single event by ID
  get_event(id: string) {
    const convertedID = id.toString()

  }

  // Create event , this can only be done by the contract owners
  @call({ privateFunction: true })
  create_event(event: Event) {
    const attendee = near.predecessorAccountId();
    event.fee = near.attachedDeposit()
  }

  // this method let event attendee pay for an  ticket in near 
  // Buy ticket (id, fee) => increment the sold amount, pay for the ticket
  // 
  @call({ payableFunction: true })
  buy_ticket() {

  }
}