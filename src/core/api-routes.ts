export const apiRoutes = {
    eventsPage: 'http://localhost:3000/events',
    eventPage: (id: number) => {
        return `http://localhost:3000/events/${id}`
    },
    fighterPage: (id: number) => {
        return `http://localhost:3000/fighters/${id}`
    }
}