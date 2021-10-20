const GalleryElement = (image) => {
  return (
    <a href={image.src} key={image.id} className="text-center p-1">
      <img src={image.thumbnail} alt={image.description} />
    </a>
  );
};

export default GalleryElement;
