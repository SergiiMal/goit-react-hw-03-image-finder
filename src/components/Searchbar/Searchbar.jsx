import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import {
  ConteinerBar,
  Button,
  LabelBtn,
  Input,
  FormsSt,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ text }, actions) => {
    if (text.trim() === '') {
      return toast.warn('Please enter a request!');
    }

    onSubmit(text);
    actions.setSubmitting(false);
  };

  return (
    <ConteinerBar>
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormsSt>
            <Button type="submit" disabled={isSubmitting}>
              <LabelBtn>Search</LabelBtn>
            </Button>

            <Input
              name="text"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormsSt>
        )}
      </Formik>
    </ConteinerBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
