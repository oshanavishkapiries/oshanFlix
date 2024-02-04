import * as pages from "../pages";

const Routers = [
    {
        path: "*",
        name: "Error",
        component: pages.ErrorPage
    },
    {
        path: "/",
        name: "Home",
        component: pages.HomePage
    },
    {
        path: "/list",
        name: "List",
        component: pages.ListPage
    },
    {
        path: "/watch/:type/:id",
        name: "Watch",
        component: pages.WatchPage
    },
    {
        path: "/player/:type/:id/:season/:episode",
        name: "Player",
        component: pages.Player
    },
]

export default Routers