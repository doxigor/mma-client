export const apiRoutes = {
    eventsPage: 'http://localhost:3000/events',
    eventPage: (id: string) => {
        return `http://localhost:3000/events/${id}`
    }
}