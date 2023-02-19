import { nanoid} from "nanoid"
export const cardsData = [
    {
        id: nanoid(),
        title: "Blacklog",
        tasks: [
            {
            id: nanoid(),
            title: "Create a mini trello",
            createdAt: new Date()
            },
            {
            id: nanoid(),
            title: "Create an interative map",
            createdAt: new Date()
            },
            {
            id: nanoid(),
            title: "Create a funny landingpage",
            createdAt: new Date()
            },
        ]
    },
    {
        id: nanoid(),
        title: "In progress",
        tasks: [
            {
            id: nanoid(),
            title: "App web landingpage",
            createdAt: new Date()
            }
        ]
    },
    {
        id: nanoid(),
        title: "QA",
        tasks: [
            {
            id: nanoid(),
            title: "Newsletter notification",
            createdAt: new Date()
            },
            {
            id: nanoid(),
            title: "Import",
            createdAt: new Date()
            },
        ]
    },
]