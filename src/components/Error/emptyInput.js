import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const errorEmptyInput = () => {
  return Notify.failure(
    'Oops. The search field must not be empty. Enter your request.'
  );
};

Notify.init({
  width: '450px',
  distance: '100px',
  position: 'center-top',
  timeout: 2000,
});
