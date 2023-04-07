import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick, onGiveImg }) => {
  const { webformatURL, tags } = images;
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onClick();
          onGiveImg(images);
        }}
      />
    </GalleryItem>
  );
};
