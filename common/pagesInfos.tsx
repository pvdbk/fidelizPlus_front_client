import { ComponentType } from './types';
import ToImplement from '../components/common/ToImplement';

const pages: { title: string, name: string, component: ComponentType }[] = [
    { title: 'Mon compte', name: 'compte', component: ToImplement },
    { title: 'Mes offres', name: 'offres', component: ToImplement },
    { title: 'Mes achats', name: 'achats', component: ToImplement },
    { title: 'Sondages', name: 'sondages', component: ToImplement },
    { title: 'Historique', name: 'historique', component: ToImplement },
    { title: 'Mes avis', name: 'avis', component: ToImplement },
];

export default pages;