export const isPostLikedByUser = (likedByIds: string[], userId: string) => {
  if (likedByIds.find((id) => id === userId)) return true;
  return false;
};
