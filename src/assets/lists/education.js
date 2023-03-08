import i18n from '../../utils/i18n';
import logoULL from '../../assets/logos/ull-circle.svg';
import logoUnizar from '../../assets/logos/unizar-blue.png';

const education = [
    {
        id: 'phd',
        logo: logoULL,
        title: i18n.t('experience.education.phd.title'),
        startDate: '2017',
        endDate: '2022',
        location: 'Universidad de La Laguna (ES)',
        notes: [i18n.t('experience.education.phd.description.1')],
    },
    {
        id: 'master',
        logo: logoULL,
        title: i18n.t('experience.education.master.title'),
        startDate: '2014',
        endDate: '2016',
        location: 'Universidad de La Laguna (ES)',
        notes: [
            i18n.t('experience.education.master.description.1'),
            i18n.t('experience.education.master.description.2'),
        ],
    },
    {
        id: 'degree',
        logo: logoUnizar,
        title: i18n.t('experience.education.degree.title'),
        startDate: '2017',
        endDate: '2022',
        location: 'Universidad de Zaragoza (ES)',
        notes: [i18n.t('experience.education.degree.description.1')],
    },
];

export default education;
