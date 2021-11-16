import {
  faFilm,
  faPencilAlt,
  faUserGraduate,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faBellOn } from '@fortawesome/pro-solid-svg-icons';

interface IFeaturesData {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
  isVideo: boolean;
}

export const FeaturesData: IFeaturesData[] = [
  {
    id: 1,
    title: 'Trusted mentors',
    description: 'Will guide you on your trading journey in-depth analysis and strategies',
    icon: faUserGraduate,
    isVideo: false,
  },
  {
    id: 2,
    title: 'Daily trading alerts',
    description: 'On signals, analysis, strategies and economic data and events',
    icon: faBellOn,
    isVideo: false,
  },
  {
    id: 3,
    title: 'Video library',
    description: 'Access to + 4,000 video recordings since 2007',
    icon: faFilm,
    isVideo: true,
  },
  {
    id: 4,
    title: 'Access to our new Trading Studio',
    description: 'A functional dashboard with all Premium exclusive tools',
    icon: faPencilAlt,
    isVideo: false,
  },
];
