// Dynamic import of all images from the assets/images directory
const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,gif}', { eager: true, query: '?url', import: 'default' });
export const allImages: string[] = Object.values(imageModules) as string[];

export const getImage = (index: number) => {
  if (allImages.length === 0) return '';
  return allImages[index % allImages.length];
};
