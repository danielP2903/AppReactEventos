import { Events } from "../events-data"

export const getEventsByType = (typeEvent:string) => {
    return Events.filter((eventBusiness) => eventBusiness.type === typeEvent);
}


export const getEventsById = (id:number) => {
    return Events.filter((eventBusiness) => eventBusiness.id === id);
}

export const getEventsByName = (query: string) => {
    if (query === '' || query === null) return [];
    const normalizedQuery = query.trim().toLowerCase();
    const matchingEvents = Events.filter((eventBusiness) =>
      eventBusiness.name.trim().toLowerCase().includes(normalizedQuery)
    );
    return matchingEvents;
  };