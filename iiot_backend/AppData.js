const fs = require("fs");

/**
 * App data holds the customizatble data about this website.
 */

const Original = {
  AboutPage: {
    SlideShowImg: {
      ImageName: "OutSide_JoyceBuilding.jpg",
      ImageDescription: "The Joyce Center, For Partnership & Innovation. ",
      alt: "image of dog tracker",
    },
    doc: [
      {
        heading: "Section 1",
        img: {
          ImageName: "img4.jpg",
          ImageDescription: "Software is cool.",
        },
        paragraphs: ["Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.", " Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo. "],
      },
      {
        heading: "Section 2",
        img: {
          ImageName: "goose.jpg",
          ImageDescription: "This is an image of a goose. ",
        },
        paragraphs: ["Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.", "Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo."],
      },
    ],
  },
  projects: [
    {
      route: "Project_1",
      title: "Road Weather Analyser ",
      Description: "Students created a system that knows the weather conditions on the road.",
      img: {
        ImageName: "cold-weather.jpg",
        ImageDescription: "A project that analysis the weather on the road. ",
        alt: "image of dog tracker",
      },
      doc: [
        {
          heading: "Project 1",
          img: {
            ImageName: "purple-sky.jpg",
            ImageDescription: "The sky with purple filter.",
          },
          paragraphs: [
            " Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.",
            " Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo. ",
          ],
        },
        {
          heading: "Project 2",
          img: {
            ImageName: "goose.jpg",
            ImageDescription: "This is an image of a goose. ",
          },
          paragraphs: [
            " Lorem ipsum dolor sit ame lamco labo Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo. ",
            " Lorem ipsum dolor sit ame lamco labo Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.",
          ],
        },
      ],
    },
    {
      route: "Project_1",
      title: "Project Dog Tracker",
      Description: "This project is all about tracking dogs at a farm.",
      img: {
        ImageName: "Dogs.jpg",
        ImageDescription: "These dogs are working on the project.",
        alt: "Image of four dogs.",
      },
      doc: [
        {
          heading: "Project 1",
          img: {
            ImageName: "img6.jpg",
            ImageDescription: "Technology is great. ",
          },
          paragraphs: [
            " Lorem ipsum dolor sit ame lamco labo Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.",
            " Lorem ipsum dolor sit ame lamco labo Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.",
          ],
        },
        {
          heading: "Project 2",
          img: {
            ImageName: "huskyHappy.jpg",
            ImageDescription: "A happy Husky. ",
          },
          paragraphs: [
            " Lorem ipsum dolor sit ame lamco labo Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.",
            " Lorem ipsum dolor sit ame lamco labo Duis vel odio nisl. Integer at sagittis velit. Integer venenatis molestie ex elementum semper. Cras a tellus sagittis turpis auctor euismod et eu nunc. Donec dolor turpis, ultricies at metus vel, tristique bibendum urna. Etiam rutrum imperdiet turpis at condimentum. Nullam in molestie elit. Nunc convallis, erat ac congue tincidunt, massa mauris ultrices mi, ac feugiat sapien magna in diam. Phasellus consectetur malesuada dictum. Integer ornare arcu accumsan pellentesque aliquet. Donec interdum orci convallis sem ultrices posuere. Suspendisse eu leo et diam vestibulum ultricies vel quis leo.",
          ],
        },
      ],
    },
  ],
  PeoplePage: {
    PeopleList: [
      {
        Name: "Norman Potts",
        Title: "Web Devoper & Programmer",
        ImportanceLevel: 1,
      },
      {
        Name: "Norman Potts",
        Title: "Web Devoper & Programmer",
        ImportanceLevel: 2,
      },
      { Name: "Norman Potts", Title: "Programmer", ImportanceLevel: 3 },
      { Name: "Norman Potts", Title: "Student", ImportanceLevel: 4 },
      { Name: "Norman Potts", Title: "Student", ImportanceLevel: 5 },
    ],
    SponsorsList: [
      { Name: "Candian Tire", ImportanceLevel: 1 },
      { Name: "IBM", ImportanceLevel: 1 },
    ],
  },
  EventList: [
    {
      title: "Summer School Sign Up ",
      date: "2023-10-27",
      st: "14:30:00",
      et: "10:00:00",
      description:
        "This would be the description. It is time to sign up for summer school.",
    },
    {
      title: "Pizza Day",
      date: "2023-10-29",
      st: "15:30:00",
      et: "09:00:00",
      description:
        "This would be the description. Lorem ipsum dolor. Lorem ipsum dolor.",
    },
  ],
};

function readADfile() {
  var AD = JSON.parse(fs.readFileSync("./AppData.json", "utf8"));
  return AD;
}

function saveAppData(aD, cb) {
  const jsonContent = JSON.stringify(aD);
  fs.writeFileSync("./AppData.json", jsonContent, "utf8");
  cb("GOOD");
}

function resetJsonFile() {
  console.log("resetJsonFile");
  saveAppData(Original, (v) => {
    console.log(v);
  });
}
resetJsonFile();

function RemoveAnImage(name) {
  try {
    var path = `./images/${name}`;
    fs.unlinkSync(path);
  } catch (e) {
    return;
  }
}

module.exports = {
  Default: Original,
  readADfile: readADfile,
  saveAppData: saveAppData,
  RemoveAnImage: RemoveAnImage,
};
