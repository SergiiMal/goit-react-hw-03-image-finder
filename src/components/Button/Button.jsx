import { Button } from './Button.styled';
import { ThreeDots } from 'react-loader-spinner';

export const LoadMoreBtn = ({ onLoadMore, isLoadingSpin }) => {
  return (
    <>
      <Button type="button" onClick={onLoadMore}>
        {!isLoadingSpin ? (
          'Load More'
        ) : (
          <ThreeDots
            height="24"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        )}
      </Button>
    </>
  );
};
