
import { Container, Skeleton, SkeletonCircle, VStack, Flex, Box, Text } from '@chakra-ui/react'
import FeedPost from "./FeedPost";
import useGetFeedPosts from '../../hooks/useGetFeedPosts';

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();


  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2, 3].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap="2" >
            <SkeletonCircle size="10" />
            <VStack gap={2} alignItems={"flex-start"} >
              <Skeleton height="10px" w={"200px"} />
              <Skeleton height="10px" w={"200px"} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500pz"}>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && posts.length > 0 && posts.map((post)=>
        <FeedPost key={post.id} post={post} />
      )}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"blue.400"}>
            Damm! Looks like you don&apos;t have any firends yet. Follow some people to see their posts here.
          </Text>
          <Text color={"blue.400"}>Stop coding and go make some!!</Text>
        </>
      )}
    </Container>
  )
}

export default FeedPosts;
