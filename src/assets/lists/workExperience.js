import i18n from '../../utils/i18n';
import logoIAC from '../../assets/logos/iac.svg';
import logoON from '../../assets/logos/opportunitynetwork.svg';

const workExperience = [
    {
        id: 'opportunityNetwork',
        logo: logoON,
        title: i18n.t('experience.work.opportunityNetwork.title'),
        startDate: i18n.t('experience.work.opportunityNetwork.startDate'),
        location: 'Opportunity Network, Barcelona (ES)',
        description: i18n.t('experience.work.opportunityNetwork.description'),
        competences: ['vue', 'django'],
    },
    {
        id: 'IAC',
        logo: logoIAC,
        title: i18n.t('experience.work.IAC.title'),
        startDate: i18n.t('experience.work.IAC.startDate'),
        endDate: i18n.t('experience.work.IAC.endDate'),
        location: 'Instituto de Astrofísica de Canarias, Tenerife (ES)',
        description: i18n.t('experience.work.IAC.description'),
        competences: ['python', 'numpy', 'pandas'],
    },
];

export default workExperience;
