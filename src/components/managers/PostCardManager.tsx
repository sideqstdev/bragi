import React, { useState } from "react";
import { BiHourglass } from "react-icons/bi";
import {
  usePostsQuery,
  useLikePostMutation,
  refetchPostsQuery,
  useDeletePostMutation,
} from "../../lib/generated";
import { useTheme } from "../../theme/theme.provider";
import Button from "../Button";
import Emoji from "../Emoji";
import ImageModal from "../ImageModal";
import Input from "../Input";
import PostCard from "../PostCard";
import { Spinner } from "../Spinner";
import { Paragraph, SMParagraph } from "../Typography";
import { isPostLikedByUser } from "../../lib/util/posts/util";
import { useLoggedInStore } from "../../stores/storeLogin";

export interface postCardManagerProps {}

const PostCardManager: React.FC = () => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const [page, setPage] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState(null);

  const openImage = (imageUrl: string, title: string) => {
    setImageOpen(true);
    setImageToDisplay({
      imageUrl,
      title,
    });
  };

  const closeImage = () => {
    setImageOpen(false);
    setImageToDisplay(null);
  };

  const { user } = useLoggedInStore();

  const { data, error, loading, refetch } = usePostsQuery({
    variables: {
      page: {
        take: 15,
        skip: 0,
      },
    },
    fetchPolicy: `cache-and-network`,
  });

  const [likePostMutation] = useLikePostMutation();

  const [deletePostMutation] = useDeletePostMutation({
    refetchQueries: [
      refetchPostsQuery({
        page: {
          take: 15,
          skip: 0,
        },
      }),
    ],
  });

  const posts = data?.posts;

  const handlePostLike = async (id) => {
    try {
      const response = await likePostMutation({
        variables: {
          id: id,
        },
      });
      return response.data.likePost;
    } catch (err) {
      return false;
    }
  };

  const handlePostDelete = async (id) => {
    try {
      const response = await deletePostMutation({
        variables: {
          id: id,
        },
      });
      return response.data.deletePost;
    } catch (err) {
      return false;
    }
  };

  if (error) {
    return (
      <div className={`p-4 flex justify-center items-center h-32`}>
        <Paragraph>
          An error occurred whilst fetching posts... {` `}
          <Emoji label={`sadface`} symbol={`😢`} />
        </Paragraph>
      </div>
    );
  }

  return (
    <>
      <div className={`flex flex-col w-full`}>
        <div
          className={`flex flex-row items-center justify-between pb-2 text-center`}
        >
          <Input scale={`small`} placeholder={`Search Posts`} />
          <div className={`items-center`}>
            <Button
              loading={loading}
              onClick={() => refetch()}
              iconLeft={<BiHourglass />}
              variant={`confirm`}
              size={`small`}
            >
              Refresh
            </Button>
          </div>
        </div>
        {loading && (
          <div className={`p-4 flex items-center justify-center h-32`}>
            <Spinner size={`6`} />
          </div>
        )}
        {posts && !loading && (
          <div className={`flex flex-col pt-4`}>
            {posts.length > 0 ? (
              posts.map((post, i) => {
                return (
                  <div key={post?.id} className={`pb-4`}>
                    <PostCard
                      onDelete={handlePostDelete}
                      onLike={handlePostLike}
                      onUnlike={handlePostLike}
                      id={post?.id}
                      user={{
                        username: post?.user?.name,
                        gamertag: post?.user?.gamerTag,
                        avatar: post?.user?.profile?.avatarUrl,
                      }}
                      onImageClick={openImage}
                      tags={post?.tags}
                      image={post?.imageUrl}
                      postDate={new Date()}
                      liked={isPostLikedByUser(post?.likedByIds, user?.id)}
                      title={post?.title}
                      content={post?.content}
                    />
                  </div>
                );
              })
            ) : (
              <div className={`p-4 flex items-center justify-center h-32`}>
                <Paragraph>
                  No Posts Yet... <Emoji label={`sleepFace`} symbol={`😴`} />
                </Paragraph>
              </div>
            )}
          </div>
        )}
      </div>
      <ImageModal
        isOpen={imageOpen}
        imageUrl={imageToDisplay?.imageUrl}
        onClose={closeImage}
        title={imageToDisplay?.title}
      />
    </>
  );
};

export default PostCardManager;
