module.exports = {
  images: {
    domains: [
        'res.cloudinary.com',
        'cdn.hashnode.com',
        'avatars.githubusercontent.com',
    ],
},
    swcMinify: true,
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
