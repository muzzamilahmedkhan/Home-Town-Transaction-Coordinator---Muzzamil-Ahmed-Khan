export interface Review {
  id: string;
  name: string;
  source: 'Google My Business' | 'Facebook';
  image: string;
  quote: string;
  rating: number;
  highlight?: string;
  brokerage?: string;
}

export const REAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Gaby Martinez',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWH3xZRFT5Ko1A_GOJcQsqaRzSf3goifTAAdXYeW2reMs9O3B5bOg=w72-h72-p-rp-mo-br100',
    quote: 'Michelle and Mary are absolutely amazing Transaction Coordinators! Their attention to detail, organization, and communication are truly unmatched. They keep every file on track and make the entire process smooth and stress-free. So grateful to have them on our team!',
    rating: 5,
    brokerage: 'Xtreme By LPT Realty'
  },
  {
    id: '2',
    name: 'Zuzel Gonzalez',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocK6Qs8mWgTN--8BMsdGhmLUzxCzkLFw3MGMsqU1dJE1HIV1gw=w72-h72-p-rp-mo-br100',
    quote: 'Michelle is my go to transaction coordinator for all of my real estate deals. She is always organized, professional, and on top of every detail from start to finish. I honestly couldn’t do my transactions without her support.',
    rating: 5,
    highlight: 'Essential Transaction Partner'
  },
  {
    id: 'heather',
    name: 'Heather Lefebvre',
    source: 'Facebook',
    image: 'https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/436311322_10161232462179512_7967249280473534613_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JQXHHnjxHK0Q7kNvwFQi2Ce&_nc_oc=Adp0vKArZJAPdpUbHAkGEbuVI5ml_uDCF-CmOqR3rOtxLrgCJ9UqmMqjcQO_X0a7ZxQ&_nc_zt=23&_nc_ht=scontent.fisb6-1.fna&_nc_gid=bKIe17I4mv6rL_ENygDUEQ&_nc_ss=7b2a8&oh=00_AQHJ3lczJetmRA1OzhHiehIExVvhaWUaNA8EeAWYqOhdGQ&oe=6A83D2F4',
    quote: 'Hometown is all over it. As soon as I get my contract and I handed over to Michele and she takes it to closing from every little detail and if there’s a problem she will let me know but for the most part she takes care of all those details. I took a bear off my back and freed up so much of my time to focus on what I do best, Sell Real Estate! People like her and that matters. Always happy and cheerful! Thanks so much! I have another coming over by the morning. Productivity is up for sure',
    rating: 5,
    highlight: 'Took a Bear Off My Back & Freed Up My Time'
  },
  {
    id: '6',
    name: 'Cindy Rios',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWdguXoyY1fUwmN1Eu4zcLq6rU1-jhRRaBS_NyrEfPnsSovnx8R=w72-h72-p-rp-mo-br100',
    quote: 'Michelle takes so much weight off my shoulders and keeps everything running smoothly at all times. Her understanding of real estate laws and compliance gives me complete peace of mind because I know nothing is being overlooked.',
    rating: 5,
    highlight: 'Complete Peace of Mind'
  },
  {
    id: '7',
    name: 'Jill Cox',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXgtaHo5mlNfHSLiqw5fMSp_ZmhbFvb13yQvK5P7KhHpb9G514SZg=w72-h72-p-rp-mo-ba12-br100',
    quote: 'Michelle and her powerhouse team at Hometown TC are a game-changer for real estate agents. Ultra-organized, super proactive, and an above-and-beyond approach to supporting busy real estate professionals. You’ll be endlessly thankful you did.',
    rating: 5,
    highlight: 'Game-Changer for Agents'
  },
  {
    id: '9',
    name: 'Rasheda L.',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKI5e2KGRmuh9q08zXuUg6XY3OK_zJb3RQMb7qyNr1rbRsSExI=w72-h72-p-rp-mo-br100',
    quote: 'Michelle and her entire Hometown TC Team provide excellent and professional service. The fact that they tailor their real estate business services to your needs is what I love the most.',
    rating: 5
  },
  {
    id: '10',
    name: 'Robert Rosenberg',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjW2-dRgL2Ka_MgvBfkhlhQJ8J81YkV_w9pXt2kT2H_Mc-8Rhr8=w72-h72-p-rp-mo-ba12-br100',
    quote: 'As a title agent we work with many realtors and their Title Coordinators. It is a joy and a privilege to work with Michelle. From start to finish she does an outstanding job.',
    rating: 5,
    highlight: 'Title Agent Recommended'
  },
  {
    id: '11',
    name: 'Karla Sucre',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXrj7QV57FfECpzA6RHFD6V5WBrHuz8DIPXkZkyP5uWcHmkFnZwgw=w72-h72-p-rp-mo-br100',
    quote: 'Michelle and her team have helped me improve my productivity and also provide my clients with luxury customer service no matter the price of the transaction, which has increased my referrals. Love HTC!',
    rating: 5,
    highlight: 'Increased Referrals & Efficiency'
  },
  {
    id: '12',
    name: 'Chris Wagner',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVg_l1u2ROHeEP4p-II8eetpJ37UeAYYXkBp5RisMZYSK_m7_GX=w72-h72-p-rp-mo-ba12-br100',
    quote: 'Working with Michelle and HTC has been great for my business. The experience, customer service and knowledge they have is 1st class. I would highly recommend HTC to any agent trying to grow.',
    rating: 5
  },
  {
    id: '16',
    name: 'Rachel Burfield',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKhEWjxPgWop1eQyIWh1K33F3G04BuJzOLD_XiyYt-DsPbqs2s=w72-h72-p-rp-mo-br100',
    quote: 'This was my first time using a transaction coordinator and it is a complete game changer for my real estate business. Hometown Transaction Coordinators made the process effortless and were so kind.',
    rating: 5,
    highlight: 'First-Time TC Game Changer'
  },
  {
    id: '17',
    name: 'Wendy Ivanov',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJmRBwwPD6DBkg2ola44KswUSSmXrrqqjV0WiEdigb5sOuJo6wN=w72-h72-p-rp-mo-ba12-br100',
    quote: 'Michelle is truly a systems and workflow expert, the kind of person who can look at a process, improve it, and implement it in a way that makes everyone’s job easier. She brings a calm, solutions-focused presence.',
    rating: 5,
    highlight: 'Workflow & Systems Expert'
  },
  {
    id: '18',
    name: 'Andrea Cerrada',
    source: 'Google My Business',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXdsMcwNaVSlrT77RFeGB6lzhTE3qKLOPS2JhFeuaTA5rGA3-9P=w72-h72-p-rp-mo-ba12-br100',
    quote: 'Working with Michelle and her team has been an absolute game-changer for my business. From the moment I send over a transaction, I know it’s in the best hands. Their level of service is unmatched.',
    rating: 5
  },
  {
    id: '21',
    name: 'Yolene Pierre',
    source: 'Facebook',
    image: 'https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/426830872_7261276100559915_2454182804386108926_n.jpg?stp=dst-jpg_tt6&cstp=mx240x240&ctp=s240x240&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=is20O0YpIrAQ7kNvwGzSWH-&_nc_oc=Adopa6Ithe9uMaThU4b3bxfCqWMteaSit_3D-wPA_J-Asvso2kVckkFPT9_iOCPa340&_nc_zt=23&_nc_ht=scontent.fisb6-2.fna&_nc_gid=Oog9HU8Ba3JCDxzLDfKRQw&_nc_ss=7b2a8&oh=00_AQFh8KKIwewjyRKazw9AIB4nskzFw4TyI0yRzf4PDThPdw&oe=6A827350',
    quote: 'HTC, we did it again! The buyer\'s agent and loan officer were very impressed with the quality work you have done throughout the transaction. Thank you, Michelle, and the HTC team. You guys rock!',
    rating: 5
  },
  {
    id: '22',
    name: 'Vienna Whorley Freeman',
    source: 'Facebook',
    image: 'https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/511199242_10235170968042723_201787370972751082_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0UBkDk2JMdAQ7kNvwHzK6BK&_nc_oc=Adoh23iPg5X98X-XdMDO-HkBAugKrJ3cisZNkt0L67TNgEIXeq4-jukygseO5c7cdy8&_nc_zt=23&_nc_ht=scontent.fisb5-2.fna&_nc_gid=-m0pcUJF_sZH18oOVXxWqQ&_nc_ss=7b2a8&oh=00_AQFk_KM-zCfJNQjU93QrqkwZd3mvAMtA_XXdcgL57ez4lQ&oe=6A82478C',
    quote: 'I was initially reluctant about using HTC because I felt I could handle my transactions alone... nonetheless I am glad I did. They are very professional, knowledgeable, and ensure a timely closing. I won’t close another transaction without them!',
    rating: 5
  },
  {
    id: '24',
    name: 'Karen Deveau',
    source: 'Facebook',
    image: 'https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/384096836_7359230424094260_4946360894655387248_n.jpg?stp=dst-jpg_tt6&cstp=mx1491x1738&ctp=s1491x1738&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xcP2A_6qdggQ7kNvwEtgzfK&_nc_oc=AdqGMUV1TX1d1kF-4mXj9jHPPXUpO7vORq2qeu57RWpTNKzK6jRpYzitMY3hAvbi4tg&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=-yXfr5OYTayTH4SIBYH6uA&_nc_ss=7b2a8&oh=00_AQH0fgwQsF6hNmKhV1-TgHM1U4lljypca3qz11intwsTpA&oe=6A827B8D',
    quote: 'We just finished our first transaction - Contract to Close - with Hometown and what a difference they made! Michelle is really on top of it and made sure things kept on track.',
    rating: 5
  },
  {
    id: '25',
    name: 'Sharon Johnson Arnett',
    source: 'Facebook',
    image: 'https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/474069610_10160252882831086_3879506860889637879_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_NPZjjQ2v5gQ7kNvwGS1YP5&_nc_oc=Adq9Hmkxt9Cgisp29esb4ZxPokAKktTiqbxoWUSRrBP-3i4Am1lK5DBMORfnVeni7Tg&_nc_zt=23&_nc_ht=scontent.fisb6-1.fna&_nc_gid=LZt3SPNUX16eFYOvZAWevw&_nc_ss=7b2a8&oh=00_AQHd0O_1YS0b2d90yU7j1HvN8rhp2Nqvju8LnDuD0IIpWA&oe=6A827E43',
    quote: 'Our team has been using Michelle at Hometown Transaction Coordinators for almost a year now. Her checklists and systems give our clients (and us!) great peace of mind from Contract to Closing.',
    rating: 5
  },
  {
    id: '28',
    name: 'Yolanda Shubert Graham',
    source: 'Facebook',
    image: 'https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/586384531_10231386124184022_7083040271621792416_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3wVZz9fF4SYQ7kNvwE6V5gH&_nc_oc=Adq_hshn1oFHok2WCIkgrlEjEscxPLct0Bsvrp4k_iOHO8E5tvqyUOtK5BRHoA7wPIg&_nc_zt=23&_nc_ht=scontent.fisb6-2.fna&_nc_gid=n9lPZYcoCeCx8uJioQIwWQ&_nc_ss=7b2a8&oh=00_AQFoMCdlnNvorup_1GICKYrT2k7FpdAGtfX3Alvlx2dZVA&oe=6A825812',
    quote: 'I have worked with Hometown for a few years now. I absolutely love the simplicity and ease of doing business with them. This service allows me to concentrate on new business while knowing my pending deals are handled professionally.',
    rating: 5
  }
];
