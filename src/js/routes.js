import HomePage from '../pages/home.f7.html';
import TranslatePage from '../pages/translate.f7.html';
import SocialPage from '../pages/social.f7.html';
import FlashcardPage from '../pages/flashcard.f7.html';
import VideoPage from '../pages/video.f7.html';
import SitePage from '../pages/site.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/translate/',
    component: TranslatePage,
  },
  {
    path: '/translate/:id/',
    component: TranslatePage,
  },
  {
    path: '/social/',
    component: SocialPage,
  },
  {
    path: '/flashcard/:id/',
    component: FlashcardPage,
  },
  {
    path: '/video/:id/',
    component: VideoPage,
  },
  {
    path: '/site/:id/',
    component: SitePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;