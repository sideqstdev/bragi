import { useState } from "react";
import { BiHourglass } from "react-icons/bi";
import { usePostsQuery } from "../../lib/generated";
import { useTheme } from "../../theme/theme.provider";
import Button from "../Button";
import Emoji from "../Emoji";
import Input from "../Input";
import PostCard from "../PostCard";
import { Spinner } from "../Spinner";
import { Paragraph, SMParagraph } from "../Typography";

export interface postCardManagerProps {}

const PostCardManager: React.FC = () => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const [page, setPage] = useState(0);

  const { data, error, loading, refetch } = usePostsQuery({
    variables: {
      page: {
        take: 15,
        skip: 0,
      },
    },
    fetchPolicy: `cache-and-network`,
  });

  const posts = data?.posts;

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
    <div>
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
            Refresh Posts
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
                <div key={post?.id} className={`mb-4`}>
                  <PostCard
                    user={{
                      username: post?.user?.name,
                      gamertag: post?.user?.gamerTag,
                      avatar: post?.user?.profile?.avatarUrl,
                    }}
                    tags={post?.tags}
                    image={post?.imageUrl}
                    postDate={new Date()}
                    liked={false}
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
  );
};

export default PostCardManager;
