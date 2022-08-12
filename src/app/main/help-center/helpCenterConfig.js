import HelpCenterHome from './home/HelpCenterHome';
import HelpCenterFaqs from './faqs/HelpCenterFaqs';
import HelpCenterGuides from './guides/HelpCenterGuides';
import HelpCenterSupport from './support/HelpCenterSupport';
import HelpCenter from './HelpCenter';
import GuideCategory from './guides/GuideCategory';
import GuideCategories from './guides/GuideCategories';
import HelpCenterGuide from './guide/HelpCenterGuide';

const helpCenterConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'help-center',
      element: <HelpCenter />,
      children: [
        {
          path: '',
          element: <HelpCenterHome />,
        },
        {
          path: 'faqs',
          element: <HelpCenterFaqs />,
        },
        {
          path: 'guides',
          element: <HelpCenterGuides />,
          children: [
            {
              path: '',
              element: <GuideCategories />,
            },
            {
              path: ':categorySlug',
              element: <GuideCategory />,
            },
            {
              path: ':categorySlug/:guideSlug',
              element: <HelpCenterGuide />,
            },
          ],
        },
        {
          path: 'support',
          element: <HelpCenterSupport />,
        },
      ],
    },
  ],
};

export default helpCenterConfig;
