type Route = {
  title: string,
  path: string,
  leavesWebsite?: boolean,
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "https://mitchel.hashnode.dev/",
    leavesWebsite:true,
  },
  {
    title: "Projects",
    path: "/projects",
  },
  
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Blog",
          link: "https://mitchel.hashnode.dev/",
          leavesWebsite: true,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/inaju",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/mitchelinaju/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
       
      
        {
          name: "Email",
          link: "mailto:mitchelinajuo@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  
};
