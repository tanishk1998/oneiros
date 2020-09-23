var clubs = [
  {
    name: "Aperture",
    desc: "Photography Events",
    events: [
      {
        name: "FOCUS",
        price: "Free",
        type: "solo"
      },
      {
        name: "Shutter Up",
        price: 200,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "InstAperture",
        price: 100,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Showdown Of Societies",
        price: 500,
        min: 3,
        max: 5,
        type: "fixed"
      },
      {
        name: "Picture Perfect",
        price: 50,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Power Shoot",
        price: 100,
        min: 2,
        max: 2,
        type: "duet"
      }
    ]
  },
  {
    name: "The Music Club",
    desc: "Music Events",
    events: [
      {
        name: "Octaves",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Dhwani",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "BeatStreet",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Saptak",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Ensemble",
        price: 800,
        min: 7,
        max: 1000,
        type: "team"
      },
      {
        name: "Twice The Voice",
        price: 250,
        min: 2,
        max: 2,
        type: "duet"
      },
      {
        name: "Woodstock",
        price: 150,
        min: 1,
        max: 3,
        type: "team"
      }
    ]
  },
  {
    name: "Litmus",
    desc: "English Literature Events",
    events: [
      {
        name: "Bamboozled",
        price: 50,
        min: 2,
        max: 3,
        type: "team"
      },
      {
        name: "Ekphrasis",
        price: 100,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Just A Minute",
        price: 100,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "British Parliamentary Debate",
        price: 400,
        min: 2,
        max: 2,
        type: "duet"
      },
      {
        name: "Pictionary",
        price: 100,
        min: 2,
        max: 2,
        type: "duet"
      },
      {
        name: "Voice Over",
        price: 150,
        min: 1,
        max: 2,
        type: "fixed"
      }
    ]
  },
  {
    name: "Coreografia",
    desc: "Dance Events",
    events: [
      {
        name: "Nextar (Solo)",
        price: 200,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Nextar (Duet)",
        price: 400,
        min: 2,
        max: 2,
        type: "duet"
      },
      {
        name: "Showcase",
        price: 100,
        min: 1,
        max: 2,
        type: "team"
      },
      {
        name: "Ground Zero",
        price: 900,
        min: 4,
        max: 8,
        type: "fixed"
      },
      {
        name: "Steps Vs Beats",
        price: 100,
        min: 1,
        max: 1,
        type: "solo"
      }
    ]
  },
  {
    name: "Cinefilia",
    desc: "Dramatics Events",
    events: [
      {
        name: "AD-Mak",
        price: 100,
        min: 3,
        max: 5,
        type: "team"
      },
      {
        name: "Awaaz",
        price: 100,
        min: 8,
        max: 20,
        type: "team"
      },
      {
        name: "Humor-Us",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Mission Improvable",
        price: 100,
        min: 4,
        max: 5,
        type: "team"
      },
      {
        name: "Pandora's Box",
        price: 250,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Rangmanch",
        price: 100,
        min: 4,
        max: 18,
        type: "team"
      },
      {
        name: "Mono-Act",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Spoofy Do",
        price: 150,
        min: 1,
        max: 1,
        type: "solo"
      }
    ]
  },
  {
    name: "Scribbles",
    desc: "Art & Craft Events",
    events: [
      {
        name: "Fusionoid",
        price: 100,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Trippy Tiles",
        price: 200,
        min: 1,
        max: 2,
        type: "fixed"
      },
      {
        name: "Comicstan",
        price: 150,
        min: 1,
        max: 2,
        type: "fixed"
      },
      {
        name: "Junk-O-Mania",
        price: 150,
        min: 1,
        max: 2,
        type: "fixed"
      },
      {
        name: "Art Gallery",
        min: 0,
        max: 0,
        price: "Free"
      }
    ]
  },
  {
    name: "Shabd",
    desc: "Hindi Literature Events",
    events: [
      {
        name: "Izhar",
        price: 50,
        min: 1,
        max: 1,
        type: "solo"
      }
    ]
  },
  {
    name: "Qureka",
    desc: "Quizzing Events",
    events: [
      {
        name: "BizTech Quiz(Ignited Minds)",
        price: 100,
        min: 1,
        max: 2,
        type: "fixed"
      },
      {
        name: "General Quiz(Sadharan)",
        price: 100,
        min: 1,
        max: 2,
        type: "fixed"
      }
    ]
  },
  {
    name: "Sophia",
    desc: "Philosophy Events",
    events: [
      {
        name: "Let's Tweet",
        price: 200,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Talkathon",
        price: 200,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Picturation",
        price: 200,
        min: 1,
        max: 1,
        type: "solo"
      },
      {
        name: "Debate",
        price: 200,
        min: 1,
        max: 1,
        type: "solo"
      }
    ]
  },
  {
    name: "Collab Events",
    desc: "Two is better than one!",
    events: [
      {
        name: "Pop-A-Razzi(Litmus-Qureka)",
        price: 100,
        min: 1,
        max: 2,
        type: "fixed"
      },
      {
        name: "Chakravyuh(Cinefilia-Shabd)",
        price: 150,
        min: 2,
        max: 5,
        type: "fixed"
      },
      {
        name: "Song-Smith(TMC-Litmus)",
        price: 200,
        min: 2,
        max: 4,
        type: "fixed"
      }
    ]
  },
  {
    name: "Major Events",
    desc: "Wait for It!",
    events: [
      {
        name: "Requiem - War Of Bands",
        price: 1500,
        min: 3,
        max: 8,
        type: "fixed"
      },
      {
        name: "Destival - Group Dance Competition",
        price: 150,
        min: 12,
        max: 43,
        type: "team"
      },
      {
        name: "Kairos - Fashion Show",
        price: 200,
        min: 12,
        max: 22,
        type: "team"
      }
    ]
  }
];
