import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <MagnifyingGlass
        visible={true}
        height="180"
        width="180"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{ margin: '0 auto', marginTop: '200px' }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#5c5c5c"
      />
    </>
  );
};
