const animals = [
  {
    id: "moose",
    name: "Moose",
    image: "https://i.imgur.com/sr4mssV.png",
    foundIn: ["Irengu Plains", "Kalas Mountains", "Rynack", "Lerelm", "Tia'deli Mountains", "Xayar Forest", "Issimor Caverns"],
    weight: ["1200-1600 pounds"],
    size: ["Extra Large"],
    classification: ["Prey"],
          
    companion: [],
    companionsize: [],
  
    skilljuvenile: ["12"],
    foodjuvenile: ["10"],
  
    skill: ["17"],
    food: ["14"],
    partysize: ["3 (6+ mo. old)"]
  },
  {
    id: "africanpenguin",
    name: "African Penguin",
    image: "https://i.imgur.com/QzSFJGM.png",
    foundIn: ["Kalas Mountains", "Irengu Plains"],
    weight: ["5-8 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
          
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "snowhare",
    name: "Snow Hare",
    image: "https://i.imgur.com/ePp058J.png",
    foundIn: ["Nal'Eny", "Rynack"],
    weight: ["6-11 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "harpseal",
    name: "Harp Seal",
    image: "https://i.imgur.com/SFwU9aS.png",
    foundIn: ["Kalas Mountains", "Irengu Plains"],
    weight: ["254-309 pounds"],
    size: ["Large"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Large Companion"],
  
    skilljuvenile: ["8"],
    foodjuvenile: ["4"],
  
    skill: ["12"],
    food: ["10"],
    partysize: ["2 (6+ mo. old)"]
  },
  {
    id: "snowleopard",
    name: "Snow Leopard",
    image: "https://i.imgur.com/z7DI2iy.png",
    foundIn: ["Kalas Mountains", "Rynack"],
    weight: ["49-120 pounds"],
    size: ["Medium"],
              
    companion: ["true"],
    companionsize: ["Large Companion"],
  
    skilljuvenile: ["8"],
    foodjuvenile: ["2"],
  
    classification: ["Predator"],
    skill: ["14"],
    food: ["4"],
    partysize: ["1 (6+ mo. old)"]
  },
  {
    id: "polarbear",
    name: "Polar Bear",
    image: "https://i.imgur.com/1JFw020.png",
    foundIn: ["Kalas Mountains", "Rynack", "Irengu Plains", "Nal'Eny"],
    weight: ["660-1760 pounds"],
    size: ["Extra Large"],
    classification: ["Predator"],
              
    companion: ["true"],
    companionsize: ["Large Companion"],
  
    skilljuvenile: ["20"],
    foodjuvenile: ["8"],
  
    skill: ["28"],
    food: ["14"],
    partysize: ["3 (6+ mo. old)"]
  },
  {
    id: "roedeer",
    name: "Roe Deer",
    image: "https://i.imgur.com/r7Y98Dl.png",
    foundIn: [], // add locations if you have them
    weight: ["22-77 pounds"],
    size: ["Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],
  
    skilljuvenile: ["2"],
    foodjuvenile: ["1"],
  
    skill: ["4"],
    food: ["2"],
    partysize: ["No Minimum"]
  },
  {
    id: "warthog",
    name: "Warthog",
    image: "https://i.imgur.com/nvqrdZ5.png",
    foundIn: [], // add locations if you have them
    weight: ["110-330 pounds"],
    size: ["Mid-Large"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Large Companion"],
  
    skilljuvenile: ["6"],
    foodjuvenile: ["3"],
  
    skill: ["9"],
    food: ["6"],
    partysize: ["2 (6+ mo. old)"]
  },
  {
    id: "wildhare",
    name: "Wild Hare",
    image: "https://i.imgur.com/CmRQ3td.png",
    foundIn: [], // add locations if you have them
    weight: ["6-11 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "eastsquirrel",
    name: "Eastern Gray Squirrel",
    image: "https://i.imgur.com/htDmbHu.png",
    foundIn: [], // add locations if you have them
    weight: ["0.75-1.5 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "redfox",
    name: "Red Fox",
    image: "https://i.imgur.com/2rcyCMT.png",
    foundIn: [], // add locations if you have them
    weight: ["5-31 pounds"],
    size: ["Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],
  
    skilljuvenile: ["2"],
    foodjuvenile: ["1"],
  
    skill: ["4"],
    food: ["2"],
    partysize: ["No Minimum"]
  },
  {
    id: "arcticfox",
    name: "Arctic Fox",
    image: "https://i.imgur.com/edCxQoV.png",
    foundIn: ["Kalas Mountains", "Rynack", "Irengu Plains", "Nal'Eny"],
    weight: ["7-21 pounds"],
    size: ["Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],
  
    skilljuvenile: ["2"],
    foodjuvenile: ["1"],
  
    skill: ["4"],
    food: ["2"],
    partysize: ["No Minimum"]
  },
  {
    id: "gopher",
    name: "Gopher",
    image: "https://i.imgur.com/3moHZsQ.png",
    foundIn: [],
    weight: ["0.5-3 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "caribou",
    name: "Caribou",
    image: "https://i.imgur.com/PutBMcy.png",
    foundIn: ["Irengu Plains", "Rynack"],
    weight: ["225-350 pounds"],
    size: ["Large"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Large Companion"],
  
    skilljuvenile: ["9"],
    foodjuvenile: ["6"],
  
    skill: ["12"],
    food: ["10"],
    partysize: ["2 (6+ mo. old)"]
  },
  {
    id: "ringedseal",
    name: "Ringed Seal",
    image: "https://i.imgur.com/DTvnQM3.png",
    foundIn: ["Kalas Mountains", "Irengu Plains"],
    weight: ["110-150 pounds"],
    size: ["Mid-Large"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Large Companion"],
  
    skilljuvenile: ["6"],
    foodjuvenile: ["4"],
  
    skill: ["9"],
    food: ["6"],
    partysize: ["2 (6+ mo. old)"]
  },
  {
    id: "lesserflamingo",
    name: "Lesser Flamingo",
    image: "https://i.imgur.com/Vk6wxtX.png",
    foundIn: ["Pievunt-An"],
    weight: ["5-10 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "secretarybird",
    name: "Secretary Bird",
    image: "https://i.imgur.com/x2O0n5e.png",
    foundIn: ["Nytyte River", "Desmir's Tree", "The Shydar", "Niall Caverns", "Enackir Hot Springs", "Boryz Prairie", "Grove of Sari", "The Eye of Fenris", "Drarynough", "Lyrifu Lowlands", "Is'bel Woods", "Zysaul Valley"],
    weight: ["5-10 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],

    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "camel",
    name: "Camel",
    image: "https://i.imgur.com/fGggzQG.png",
    foundIn: ["Craub", "Aughgar River", "Sands of Rodorr", "Isdyn's Deep","Bay of Melyanna","Olum Karst","Andor Oasis","The South Rim","The North Rim","Dalv Glad","Eel's Tail River","Lod'nen Path","Adeli's Cove","SS Rilon","The Waste","Aisu Dunes","Layrun Trench","Angitu Desert","Orvor Rock","West Delia Basin","Aisu Dunes","North Delia Basin","The Chimera's Iris","Vorenal River"],
    weight: ["2000 pounds"],
    size: ["Extra Large"],
    classification: ["Prey"],
  
    skilljuvenile: ["13"],
    foodjuvenile: ["9"],
  
    skill: ["17"],
    food: ["14"],
    partysize: ["3 (6+ mo. old)"]
  },
  {
    id: "blackmamba",
    name: "Black Mamba",
    image: "https://i.imgur.com/S0wCJLj.png",
    foundIn: [],
    weight: ["5-10 pounds"],
    size: ["Extra Small"],
    classification: ["Prey"],
              
    companion: ["true"],
    companionsize: ["Small Companion"],
  
    skill: ["2"],
    food: ["1"],
    partysize: ["No Minimum"]
  },
  {
    id: "africanlion",
    name: "African Lion",
    image: "https://i.imgur.com/HwW7J5j.png",
    "foundIn": ["Chamoru Plains", "Xin Grotto", "Kalu's Point", "On-aldirr Crevice", "Tor's Marsh", "Desakin Crater", "Chamoru Plains", "Angel's Fangs"],
    weight: ["250-450 pounds"],
    size: ["Extra Large"],
    classification: ["Predator"],
              
    companion: [],
    companionsize: [],
  
    skilljuvenile: ["20"],
    foodjuvenile: ["8"],
  
    skill: ["28"],
    food: ["14"],
    partysize: ["3 (6+ mo. old)"]
    },
    {
        id: "barbarysheepm",
        name: "Barbary Sheep (Male)",
        image: "https://i.imgur.com/CU0BwLV.png",
        "foundIn": [],
        weight: ["223-319 pounds"],
        size: ["Large"],
        classification: ["Prey"],
                  
        companion: ["true"],
        companionsize: ["Large Companion"],
      
        skilljuvenile: ["9"],
        foodjuvenile: ["6"],
  
        skill: ["13"],
        food: ["12"],
        partysize: ["2 (6+ mo. old)"]
    },
    {
        id: "barbarysheepf",
        name: "Barbary Sheep (Female)",
        image: "https://i.imgur.com/qR5ProY.png",
        "foundIn": [],
        weight: ["66-100 pounds"],
        size: ["Medium"],
        classification: ["Prey"],
                          
        companion: ["true"],
        companionsize: ["Large Companion"],
      
        skilljuvenile: ["3"],
        foodjuvenile: ["2"],
  
        skill: ["6"],
        food: ["5"],
        partysize: ["1 (6+ mo. old)"]
    },
    {
        id: "africangoose",
        name: "African Goose",
        image: "https://i.imgur.com/UZ0bLrI.png",
        "foundIn": [],
        weight: ["18-22 pounds"],
        size: ["Small"],
        classification: ["Prey"],
                          
        companion: ["true"],
        companionsize: ["Small Companion"],
      
        skilljuvenile: ["2"],
        foodjuvenile: ["1"],
  
        skill: ["4"],
        food: ["2"],
        partysize: ["No Minimum"]
    },
    {
        id: "nutria",
        name: "Nutria",
        image: "https://i.imgur.com/mFI0fAi.png",
        "foundIn": [],
        weight: ["9-20 pounds"],
        size: ["Small"],
        classification: ["Prey"],
                          
        companion: ["true"],
        companionsize: ["Small Companion"],
      
        skilljuvenile: ["2"],
        foodjuvenile: ["1"],
  
        skill: ["4"],
        food: ["2"],
        partysize: ["No Minimum"]
    },
    {
        id: "capybara",
        name: "Capybara",
        image: "https://i.imgur.com/7sEs5ri.png",
        "foundIn": [],
        weight: ["77-146 pounds"],
        size: ["Mid-Large"],
        classification: ["Prey"],
                          
        companion: ["true"],
        companionsize: ["Large Companion"],
      
        skilljuvenile: ["5"],
        foodjuvenile: ["3"],
  
        skill: ["9"],
        food: ["6"],
        partysize: ["2 (6+ mo. old)"]
    }
];
