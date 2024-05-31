import themes from "daisyui/src/theming/themes.js";

const config = {
  appName: "STHLM AID",
  appDescription:
    "Secure your tickets to STHLM AID (Stockholm Aid) charity concert at Trädgården, Stockholm on May 30th now. Enjoy live performances while supporting a great cause. All proceeds go to the World Food Programme and Plan International.",
  domainName: "sthlmaid.se",

  artists: [
    "Alba August",
    "Amena Alsameai",
    "Daniel Adams-Ray",
    "Elliphant",
    "Eric Saade",
    "Erik Lundin",
    "Jacqline",
    "Jacco",
    "Janice",
    "Jocke Åhlund",
    "Kalam Podcast",
    "Kurt.",
    "Marcus Price och Carli",
    "Marit Bergman",
    "Maskinen",
    "Medina",
    "Michel Dida",
    "Miriam Bryant",
    "Nicole Saboune",
    "Petter ft. Dj Sleepy & Eye N' I",
    "Silvana Imam",
    "Singers In Solidarity with Palestine",
    "Siw Malmkvist",
    "SUNNAN",
    "Stefan Sundström",
    "Steph K",
    "Stor",
    "Titiyo",
    "Thomas Stenström",
  ],
  colors: {
    theme: "light",
    main: themes[`[data-theme=light]`]["primary"],
  },
};

export default config;
