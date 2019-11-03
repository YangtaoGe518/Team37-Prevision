import HomePage from '../pages/home.f7.html';
import TranslatePage from '../pages/translate.f7.html';
import AccountPage from '../pages/account.f7.html';
import FlashcardPage from '../pages/flashcard.f7.html';
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
    path: '/account/',
    component: AccountPage,
  },
  {
    path: '/flashcard/:id/',
    component: FlashcardPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;