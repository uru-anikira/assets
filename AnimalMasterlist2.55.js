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
    foundIn: ["Nal'Eny", "Rynack","Xayar Forest"],
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
    foundIn: ["Kalas Mountains", "Rynack", "Irengu Plains", "Nal'Eny","Xayar Forest"],
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
    foundIn: ["Chamoru Plains", "Xin Grotto", "Kalu's Point", "On-aldirr Crevice", "Tor's Marsh", "Desakin Crater", "Chamoru Plains", "Angel's Fangs"],
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
        foundIn: [],
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
        foundIn: [],
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
        foundIn: [],
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
        foundIn: [],
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
        foundIn: [],
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
    },
  {
    id: "cottontailrabbit",
    name: "Desert Cottontail",
    image: "",
    foundIn: [ "Is'bel Woods", "Tia'deli Mountains" ],
    weight: [ "2-4 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "plainsbison",
    name: "Plains Bison",
    image: "",
    foundIn: [ "Chamoru Plains", "Nyjoro Hills" ],
    weight: [ "800-2200 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "17" ],
    food: [ "14" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "12" ],
    foodjuvenile: [ "10" ]
  },
  {
    id: "barrengroundcaribou",
    name: "Barren-ground Caribou",
    image: "",
    foundIn: [ "Nyjoro Hills" ],
    weight: [ "200-350 pounds" ],
    size: [ "Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "12" ],
    food: [ "11" ],
    partysize: [ "2 (6+ mo. old)" ],

    skilljuvenile: [ "7" ],
    foodjuvenile: [ "6" ]
  },
  {
    id: "alaskanmoose",
    name: "Alaskan Moose",
    image: "",
    foundIn: [ "Nyjoro Hills" ],
    weight: [ "900-1600 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],

    skill: [ "17" ],
    food: [ "14" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "12" ],
    foodjuvenile: [ "10" ]
  },
  {
    id: "northamericanbeaver",
    name: "North American Beaver",
    image: "",
    foundIn: [ "Nytyte River" ],
    weight: [ "24-71 pounds" ],
    size: [ "Medium" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "7" ],
    food: [ "2" ],
    partysize: [ "1 (6+ mo. old)" ],

    skilljuvenile: [ "2" ],
    foodjuvenile: [ "1" ]
  },
  {
    id: "laketrout",
    name: "Lake Trout",
    image: "",
    foundIn: [ "Ahyrd's Atoll", "Aughgar River", "Craub", "Ia'gha Lake", "Nyspoli's Pool", "Ryren Beach", "Shores of Lye", "Veins of Koraff" ],
    weight: [ "5-40 pounds" ],
    size: [ "Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "4" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "beltedkingfisher",
    name: "Belted Kingfisher",
    image: "",
    foundIn: [ "Ryren Beach" ],
    weight: [ "0.25-0.4 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "pronghorn",
    name: "Pronghorn",
    image: "",
    foundIn: [ "Boryz Prairie" ],
    weight: [ "90-150 pounds" ],
    size: [ "Mid-Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "9" ],
    food: [ "5" ],
    partysize: [ "2 (6+ mo. old)" ],

    skilljuvenile: [ "4" ],
    foodjuvenile: [ "2" ]
  },
  {
    id: "blacktailedprairiedog",
    name: "Black-tailed Prairie Dog",
    image: "",
    foundIn: [ "Bel Veldt", "Boryz Prairie" ],
    weight: [ "1.5-3 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "prairierattlesnake",
    name: "Prairie Rattlesnake",
    image: "",
    foundIn: [ "Boryz Prairie" ],
    weight: [ "2-7 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Predator" ],
    companion: [ "true" ],
    companionsize: [ "Small Companion" ],
    skill: [ "11" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "nilecrocodile",
    name: "Nile Crocodile",
    image: "",
    foundIn: [ "Dyndre's Swamp", "Ryren Beach", "Tor's Marsh" ],
    weight: [ "500-1500 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Predator" ],

    companion: [],
    companionsize: [],

    skill: [ "23" ],
    food: [ "14" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "18" ],
    foodjuvenile: [ "10" ]
  },
  {
    id: "harborseal",
    name: "Harbor Seal",
    image: "",
    foundIn: [ "Shores of Lye" ],
    weight: [ "120-370 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],

    skill: [ "17" ],
    food: [ "10" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "12" ],
    foodjuvenile: [ "5" ]
  },
  {
    id: "californiasealion",
    name: "California Sea Lion",
    image: "",
    foundIn: [ "Shores of Lye" ],
    weight: [ "180-800 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Predator" ],

    companion: [],
    companionsize: [],

    skill: [ "23" ],
    food: [ "14" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "18" ],
    foodjuvenile: [ "10" ]
  },
  {
    id: "shorecrab",
    name: "Shore Crab",
    image: "",
    foundIn: [ "Shores of Lye" ],
    weight: [ "0.2-2 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "seaanemone",
    name: "Sea Anemone",
    image: "",
    foundIn: [ "Shores of Lye" ],
    weight: [ "0.1-5 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "purpleurchin",
    name: "Purple Sea Urchin",
    image: "",
    foundIn: [ "Shores of Lye" ],
    weight: [ "0.1-2 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],

    skill: [ "3" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "americanbadger",
    name: "American Badger",
    image: "",
    foundIn: [ "Sana Sarsys" ],
    weight: [ "15-26 pounds" ],
    size: [ "Small" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "6" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "raccoon",
    name: "Raccoon",
    image: "",
    foundIn: [ "Ryren Beach", "The Stone Forest" ],
    weight: [ "8-24 pounds" ],
    size: [ "Small" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "6" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "greeniguana",
    name: "Green Iguana",
    image: "",
    foundIn: [ "The Stone Forest" ],
    weight: [ "8-17 pounds" ],
    size: [ "Small" ],
    classification: [ "Prey" ],
    
    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "4" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "tigersalamander",
    name: "Tiger Salamander",
    image: "",
    foundIn: [ "Ryren Beach" ],
    weight: [ "0.05-0.3 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],
    skill: [ "1" ],
    food: [ "0" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "greathornedowl",
    name: "Great Horned Owl",
    image: "",
    foundIn: [ "Dyndre's Swamp", "Is'bel Woods", "Ryren Beach", "The Stone Forest", "Tor's Marsh" ],
    weight: [ "3-4 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "6" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "redtailedhawk",
    name: "Red-tailed Hawk",
    image: "",
    foundIn: [ "Sands of Rodorr" ],
    weight: [ "2-4 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "6" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "mallard",
    name: "Mallard",
    image: "",
    foundIn: [ "Tor's Marsh" ],
    weight: [ "2-3.5 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "indianpeafowl",
    name: "Indian Peafowl",
    image: "",
    foundIn: [ "Xorij Savannah" ],
    weight: [ "8-13 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],
    
    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "bullfrog",
    name: "American Bullfrog",
    image: "",
    foundIn: [ "Craub" ],
    weight: [ "0.5-1.5 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "dungbeetle",
    name: "Dung Beetle",
    image: "",
    foundIn: [ "Sands of Rodorr" ],
    weight: [ "0.01-0.1 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "1" ],
    food: [ "0" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "greaterprairiechicken",
    name: "Greater Prairie Chicken",
    image: "",
    foundIn: [ "Sana Sarsys" ],
    weight: [ "1.5-3 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "saiga",
    name: "Saiga Antelope",
    image: "",
    foundIn: [ "Lyrifu Lowlands" ],
    weight: [ "80-150 pounds" ],
    size: [ "Mid-Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "9" ],
    food: [ "5" ],
    partysize: [ "2 (6+ mo. old)" ],

    skilljuvenile: [ "4" ],
    foodjuvenile: [ "2" ]
  },
  {
    id: "feralhorse",
    name: "Feral Horse",
    image: "",
    foundIn: [ "Zysaul Valley" ],
    weight: [ "800-1200 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],

    skill: [ "18" ],
    food: [ "14" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "13" ],
    foodjuvenile: [ "10" ]
  },
  {
    id: "gartersnake",
    name: "Garter Snake",
    image: "",
    foundIn: [ "Sands of Rodorr" ],
    weight: [ "0.2-0.6 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "sharptailsnakeeel",
    name: "Sharp-tail Snake Eel",
    image: "",
    foundIn: [ "The Serpent's Tongue" ],
    weight: [ "2-20 pounds" ],
    size: [ "Small" ],
    classification: [ "Predator" ],

    companion: [],
    companionsize: [],

    skill: [ "7" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "bandedseakrait",
    name: "Banded Sea Krait",
    image: "",
    foundIn: [ "The Serpent's Tongue" ],
    weight: [ "1-4 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Small Companion" ],

    skill: [ "11" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "bluemussel",
    name: "Blue Mussel",
    image: "",
    foundIn: [ "Veins of Koraff" ],
    weight: [ "0.1-1 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],

    companion: [],
    companionsize: [],

    skill: [ "1" ],
    food: [ "0" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "mudcrab",
    name: "Mud Crab",
    image: "",
    foundIn: [ "Veins of Koraff" ],
    weight: [ "0.5-4 pounds" ],
    size: [ "Extra Small" ],
    classification: [ "Prey" ],
    companion: [ "true" ],
    companionsize: [ "Small Companion" ],
    skill: [ "2" ],
    food: [ "1" ],
    partysize: [ "No Minimum" ]
  },
  {
    id: "plainselk",
    name: "Plains Elk",
    image: "",
    foundIn: [ "Chamoru Plains" ],
    weight: [ "500-1100 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "19" ],
    food: [ "14" ],
    partysize: [ "3 (6+ mo. old)" ],

    skilljuvenile: [ "14" ],
    foodjuvenile: [ "10" ]
  },
  {
    id: "whitetaileddeer",
    name: "White-tailed Deer",
    image: "",
    foundIn: [ "Chamoru Plains" ],
    weight: [ "100-300 pounds" ],
    size: [ "Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "12" ],
    food: [ "8" ],
    partysize: [ "2 (6+ mo. old)" ],

    skilljuvenile: [ "7" ],
    foodjuvenile: [ "4" ]
  },
  {
    id: "mountaingoat",
    name: "Mountain Goat",
    image: "",
    foundIn: [ "The Stone Forest" ],
    weight: [ "100-300 pounds" ],
    size: [ "Large" ],
    classification: [ "Prey" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "14" ],
    food: [ "8" ],
    partysize: [ "2 (6+ mo. old)" ],

    skilljuvenile: [ "9" ],
    foodjuvenile: [ "4" ]
  },
  {
    id: "cheetah",
    name: "Cheetah",
    image: "",
    foundIn: [ "Xorij Savannah" ],
    weight: [ "75-140 pounds" ],
    size: [ "Mid-Large" ],
    classification: [ "Predator" ],

    companion: [ "true" ],
    companionsize: [ "Large Companion" ],

    skill: [ "15" ],
    food: [ "4" ],
    partysize: [ "2 (6+ mo. old)" ],

    skilljuvenile: [ "10" ],
    foodjuvenile: [ "2" ]
  },
  {
    id: "whiterhino",
    name: "White Rhinoceros",
    image: "",
    foundIn: [ "Xorij Savannah" ],
    weight: [ "3500-5100 pounds" ],
    size: [ "Extra Large" ],
    classification: [ "Predator" ],

    companion: [],
    companionsize: [],

    skill: [ "45" ],
    food: [ "30" ],
    partysize: [ "5 (6+ mo. old)" ],

    skilljuvenile: [ "22" ],
    foodjuvenile: [ "13" ]
  }
];



