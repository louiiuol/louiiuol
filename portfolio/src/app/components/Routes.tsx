import { Home, Presentation, Works } from "./views";
import { Profil, Experiences, Skills } from "./views/presentation";
import { Videos, Graphism, Apps, Algos } from "./views/works";

export const Routes = {
    accueil: {name: 'Accueil', url: '/', exact: true, component: Home, routes: []},
    presentation: {
        name: 'Présentation', url: '/presentation', component: Presentation, exact: false, routes: [
            { name: 'Profil', url: 'profil', component: Profil, exact: false },
            { name: 'Expériences', url: 'experiences', component: Experiences, exact: false },
            { name: 'Compétences', url: 'competences', component: Skills, exact: false }
    ]},
    works: {
        name: 'Projets', url: '/projets', component: Works, exact: false, routes: [
            { name: 'Audiovisuel', img:'motion', url: 'audiovisuel', component: Videos, exact: false },
            { name: 'Graphisme', img:'graphic', url: 'graphisme', component: Graphism, exact: false },
            { name: 'Applications', img:'wireframe', url: 'apps', component: Apps, exact: false },
            { name: 'Algorithmie', img:'algos', url: 'algorithmie', component: Algos, exact: false },
    ]}
}