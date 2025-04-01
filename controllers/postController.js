exports.getPosts = (req, res) => {
  const posts = [
    {
      id: 1,
      username: "bala_dev",
      imageUrl: "https://picsum.photos/id/1011/600/400",
      caption: "Just launched my new app! 🚀",
      createdAt: "2025-03-28T10:00:00Z",
    },
    {
      id: 2,
      username: "akshitha.codes",
      imageUrl: "https://picsum.photos/id/1025/600/400",
      caption: "Sunset coding session 🌇",
      createdAt: "2025-03-27T18:30:00Z",
    },
    {
      id: 3,
      username: "ria_dev",
      imageUrl: "https://picsum.photos/id/1035/600/400",
      caption: "Weekend hackathon prep ☕💻",
      createdAt: "2025-03-26T09:45:00Z",
    },
    {
      id: 4,
      username: "dev_lifestyle",
      imageUrl: "https://picsum.photos/id/1050/600/400",
      caption: "Designing UI in the zone 🎨",
      createdAt: "2025-03-25T14:20:00Z",
    },
    {
      id: 5,
      username: "codewithme",
      imageUrl: "https://picsum.photos/id/1062/600/400",
      caption: "Push to Git ✅",
      createdAt: "2025-03-24T16:00:00Z",
    },
  ];

  res.json(posts);
};
