import { IBoutonMenu, ComponentType } from './types';
import ToImplement from '../components/ToImplement';

const pages: (IBoutonMenu & { Comp: ComponentType })[] = [
    { title: 'Mon compte', imageSrc: 'compte.png', path: '/compte', Comp: ToImplement },
    { title: 'Mes offres', imageSrc: 'offres.png', path: '/offres', Comp: ToImplement },
    { title: 'Mes achats', imageSrc: 'achats.png', path: '/achats', Comp: ToImplement },
    { title: 'Sondages', imageSrc: 'sondages.png', path: '/sondages', Comp: ToImplement },
    { title: 'Historique', imageSrc: 'historique.png', path: '/historique', Comp: ToImplement },
    { title: 'Mes avis', imageSrc: 'avis.png', path: '/avis', Comp: ToImplement },
];

export default pages;