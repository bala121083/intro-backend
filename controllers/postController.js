const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPosts = async (req, res) => {
  try {
    const posts = await prisma.posts.findMany({
      include: {
        users: {
          select: { username: true },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    const formattedPosts = posts.map((post) => ({
      id: post.id.toString(),
      username: post.users.username,
      imageUrl: post.media_url,
      caption: post.caption,
      createdAt: post.created_at,
    }));

    res.json(formattedPosts);
  } catch (error) {
    console.error("🔥 Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
