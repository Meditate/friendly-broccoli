import Index from "./components/index"
import Status from "./components/status"
import Cover from "./components/cover"

export default [
    { path: '/', name: 'index', component: Index },
    { path: '/status', name: 'status', component: Status },
    { path: '/cover', name: 'cover', component: Cover },
]

