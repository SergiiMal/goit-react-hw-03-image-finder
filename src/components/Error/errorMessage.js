import { Report } from 'notiflix/build/notiflix-report-aio';

export const errorMassage = text => {
  Report.failure(
    'Warning!!!',
    `The query ${text} did not find anything. <br/><br/> 
     Please try again!`,
    'Okay '
  );
};

Report.init({
  titleFontSize: '28px',
});
