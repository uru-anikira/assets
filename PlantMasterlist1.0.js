const plants = [
{
    id: "aghada",
    name: "Aghada Leaf",
    scientific: "Achyranthens Aspera",
    foundIn: [],
    description: "Grows in shade of trees, inverted cone with pale yellow bristled flower.",
    seasons: ["Spring", "Summer"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Flower"],
    poisonous: [],
              
    medicinal: ["Ingestion"],
    treats: ["Respiratory Issues","Fever","Pain"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "agrimony",
    name: "Agrimony",
    scientific: "Agrimonia Eupatoria",
    foundIn: [],
    description: "Grows at the base of trees and in shaded areas, clustered plant with five petal yellow flowers.",
    seasons: ["Spring", "Summer"],
    skill: ["3"],
    potency: ["1"],
    beneficial: ["Flower"],
    poisonous: [],
              
    medicinal: ["Topical"],
    treats: ["Pain","Wound Healing"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "aloevera",
    name: "Aloe Vera",
    scientific: "Aloe Vera",
    foundIn: [],
    description: "A succulent with thick, fleshy green leaves filled with cooling gel, thriving in hot, dry environments.",
    seasons: ["Spring", "Summer", "Fall", "Winter"],
    skill: ["3"],
    potency: ["1"],
    beneficial: ["Leaves"],
    poisonous: ["Leaves"],

    medicinal: ["Topical"],
    treats: ["Burns","Wound Healing","Inflammation"],

    toxic: ["Ingestion"],
    complications: ["Early Contractions"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "angelica",
    name: "Angelica",
    scientific: "Angelica Archangelica",
    foundIn: [],
    description: "Grows in open, sunny areas and is frequently found in large clusters of prickly white flowers.",
    seasons: ["Spring", "Summer"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Flower"],
    poisonous: ["Flower"],
              
    medicinal: ["Ingestion","Inhalation"],
    treats: ["Digestive Issues","Sedative"],
  
    toxic: ["Ingestion"],
    complications: ["Addiction"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "bamboo",
    name: "Bamboo",
    scientific: "Bambusa Vulgaris",
    foundIn: [],
    description: "Grows in damp areas in dense clusters and is most easily broken when stalks are younger.",
    seasons: ["Spring", "Summer", "Fall", "Winter"],
    skill: ["1"],
    potency: ["1"],
    beneficial: ["Stalk"],
    poisonous: ["Stalk"],
              
    medicinal: ["External","Ingestion"],
    treats: ["Broken Bones","Purging"],
  
    toxic: ["Ingestion"],
    complications: ["Dehydration","Vomiting"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "benthi",
    name: "Benthi",
    scientific: "Nicotiana Benthamianaaa",
    foundIn: [],
    description: "Grows in warm regions in full sunlight. Typically found as a single plant with wide, rounded green leaves.",
    seasons: ["Spring", "Summer", "Fall"],
    skill: ["1"],
    potency: ["1"],
    beneficial: ["Leaves"],
    poisonous: ["Leaves"],
              
    medicinal: ["Ingestion","Inhalation"],
    treats: ["Fatigue"],
  
    toxic: ["Ingestion"],
    complications: ["Addiction"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "birchbark",
    name: "Birch Bark",
    scientific: "Betula Pendula",
    foundIn: [],
    description: "Pale, lean trees with shedding bark that can be found in most regions except the hottest deserts.",
    seasons: ["Spring", "Summer", "Fall", "Winter"],
    skill: ["1"],
    potency: ["1"],
    beneficial: ["Bark"],
    poisonous: [],
              
    medicinal: ["Ingestion","Inhalation"],
    treats: ["Digestive Issues","Fever"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "bluelobelia",
    name: "Blue Lobelia",
    scientific: "Lobelia Siphilitica",
    foundIn: [],
    description: "Tall, purple flowers grow in groups with narrow, pointed leaves at the base of the stalk.",
    seasons: ["Spring", "Summer"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Flower"],
    poisonous: ["Leaves"],
              
    medicinal: ["Ingestion","Topical"],
    treats: ["Respiratory Issues","Inflammation"],
  
    toxic: ["Ingestion"],
    complications: ["Diarrhea","Vomiting","Nausea"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "burdock",
    name: "Burdock",
    scientific: "Arctium Tomentosum",
    foundIn: [],
    description: "Grows near water and has jagged, triangular leaves. The plant grows magenta thistle-like blooms in the spring.",
    seasons: ["Spring", "Summer"],
    skill: ["3"],
    potency: ["2"],
    beneficial: ["Flowers"],
    poisonous: [],
              
    medicinal: ["Topical"],
    treats: ["Wound Healing"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "catnip",
    name: "Catnip",
    scientific: "Nepeta Cataria",
    foundIn: [],
    description: "Grows in virtually all climates except the desert and tundra. Plant is bushy with rounded, wide triangular leaves with crimped edges.",
    seasons: ["Spring", "Summer","Fall"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Leaves"],
    poisonous: ["Leaves"],
              
    medicinal: ["Ingestion"],
    treats: ["Fever","Inflammation"],
  
    toxic: ["Ingestion"],
    complications: ["Anxiety"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "coneflower",
    name: "Coneflower",
    scientific: "Echinacea Purpurea",
    foundIn: [],
    description: "Grows in full sun clearings. Plant has bold pink/purple flowers with short, cone-shaped centers.",
    seasons: ["Summer","Fall"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Leaves"],
    poisonous: ["Flowers"],
              
    medicinal: ["Topical"],
    treats: ["Infection","Pain"],
  
    toxic: ["Ingestion"],
    complications: ["Vomiting","Dizziness"],

    native: ["No"],
    uniqueuse: []
},

{
    id: "dragonfruit",
    name: "Dragonfruit",
    scientific: "Selenicereus Undatus",
    foundIn: [],
    description: "A climbing cactus producing bright scaled fruit, commonly found in warm regions among dense vegetation.",
    seasons: ["Summer"],
    skill: ["3"],
    potency: ["2"],
    beneficial: ["Fruit"],
    poisonous: [],
              
    medicinal: ["Topical"],
    treats: ["Infection","Inflammation"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "ginger",
    name: "Ginger",
    scientific: "Zingiber Officinale",
    foundIn: [],
    description: "A fragrant root plant with long green stalks, commonly found in humid tropical regions and shaded forest floors.",
    seasons: ["Spring", "Summer"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Root"],
    poisonous: [],
              
    medicinal: ["Ingestion"],
    treats: ["Digestive Issues","Respiratory Issues"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "ivy",
    name: "Ivy",
    scientific: "Hedera Helix",
    foundIn: [],
    description: "A creeping vine with dark green pointed leaves that spreads aggressively across trees, cliffs, and ruins.",
    seasons: ["Spring", "Summer", "Fall"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Leaf"],
    poisonous: ["Leaf"],
              
    medicinal: ["Ingestion","Topical"],
    treats: ["Mood Stabilization","Pain"],
  
    toxic: ["Ingestion"],
    complications: ["Addiction"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "licoriceroot",
    name: "Licorice Root",
    scientific: "Glycyrrhiza Glabra",
    foundIn: [],
    description: "A flowering herb with long roots and pale purple blossoms, often found in temperate regions beneath partial tree cover.",
    seasons: ["Spring", "Summer"],
    skill: ["5"],
    potency: ["3"],
    beneficial: ["Root","Flower"],
    poisonous: ["Leaf"],
              
    medicinal: ["Ingestion"],
    treats: ["Wound Healing","Reduce Toxicity"],
  
    toxic: ["Ingestion"],
    complications: ["Death"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "pricklypear",
    name: "Prickly Pear Cactus",
    scientific: "Opuntia Basilaris",
    foundIn: [],
    description: "A flat-padded cactus with sharp spines and brightly colored fruit, thriving in hot arid deserts.",
    seasons: ["Summer"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Fruit"],
    poisonous: [],
              
    medicinal: ["Ingestion"],
    treats: ["Sedative"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "whitepoppy",
    name: "White Poppy",
    scientific: "Papaver Somniferum",
    foundIn: [],
    description: "A delicate pale flowering plant commonly found in open meadows and prairies among dense wildflowers.",
    seasons: ["Spring", "Summer"],
    skill: ["4"],
    potency: ["3"],
    beneficial: ["Flower","Stem"],
    poisonous: [],
              
    medicinal: ["Ingestion"],
    treats: ["Pain","Sedative"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "snowdrop",
    name: "Snowdrop",
    scientific: "Galanthus Nivalis",
    foundIn: ["Irengu Plains", "Rynack"],
    description: "A delicate white flowering plant that blooms in cold climates and often emerges through melting snow.",
    seasons: ["Winter", "Spring"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Full Plant"],
    poisonous: ["Full Plant"],
              
    medicinal: ["Topical"],
    treats: ["Pain","Respiratory Issues"],
  
    toxic: ["Ingestion"],
    complications: ["Nausea"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "bluespruce",
    name: "Blue Spruce",
    scientific: "Picea Pungens",
    foundIn: ["Rynack"],
    description: "A tall evergreen tree with blue-tinted needles and small medicinal cones and fruits.",
    seasons: ["Spring", "Summer", "Fall"],
    skill: ["3"],
    potency: ["2"],
    beneficial: ["Fruit"],
    poisonous: [],
              
    medicinal: ["Ingestion"],
    treats: ["Digestive Issues","Pain","Respiratory Issues"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "holly",
    name: "Holly",
    scientific: "Ilex Aquifolium",
    foundIn: ["Irengu Plains", "Rynack", "Kalas Mountains"],
    description: "A spiny-leafed evergreen shrub producing bright red berries commonly found in colder woodland regions.",
    seasons: ["Fall", "Winter"],
    skill: ["3"],
    potency: ["2"],
    beneficial: ["Fruit"],
    poisonous: ["Leaf"],
              
    medicinal: ["Ingestion"],
    treats: ["Respiratory Issues","Fever"],
  
    toxic: ["Ingestion"],
    complications: ["Nausea","Internal Damage"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "japaneseyew",
    name: "Japanese Yew",
    scientific: "Taxus Cuspidata",
    foundIn: [],
    description: "A dark evergreen tree with red fruits and highly toxic bark and needles.",
    seasons: ["Spring", "Summer", "Fall"],
    skill: ["5"],
    potency: ["3"],
    beneficial: ["Fruit","Needles","Bark"],
    poisonous: ["Needles","Bark","Seed"],
              
    medicinal: ["Ingestion","Topical"],
    treats: ["Fever","Pain","Inflammation"],
  
    toxic: ["Ingestion"],
    complications: ["Death"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "crocus",
    name: "Crocus",
    scientific: "Crocus Sativus",
    foundIn: ["Rynack"],
    description: "A small purple flowering plant known for its vivid stamens and anti-inflammatory properties.",
    seasons: ["Spring"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Flower"],
    poisonous: [],
              
    medicinal: ["Ingestion"],
    treats: ["Inflammation","Pain"],
  
    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "waterhemlock",
    name: "Water Hemlock",
    scientific: "Cicuta Maculata",
    foundIn: [],
    description: "A tall wetland plant with umbrella-shaped clusters of small white flowers and hollow purple-streaked stems.",
    seasons: ["Spring", "Summer"],
    skill: ["7"],
    potency: ["4"],
    beneficial: [],
    poisonous: ["Root","Leaves","Stem"],

    medicinal: [],
    treats: [],

    toxic: ["Ingestion"],
    complications: ["Convulsions","Respiratory Failure","Death"],

    native: ["Yes"],
    uniqueuse: []
},
{
    id: "winterberry",
    name: "Winterberry",
    scientific: "Ilex Verticillata",
    foundIn: ["Rynack"],
    description: "A bright red berried shrub thriving in cold wetlands and snowy woodland regions.",
    seasons: ["Fall", "Winter"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Bark","Fruit"],
    poisonous: [],
              
    medicinal: ["Topical","Ingestion"],
    treats: ["Infection","Digestive Issues"],
  
    toxic: ["Ingestion"],
    complications: ["Addiction"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "rue",
    name: "Rue",
    scientific: "Ruta Graveolens",
    foundIn: [],
    description: "A shrubby herb with bluish-green leaves and clusters of small yellow flowers that release a strong aroma when crushed.",
    seasons: ["Spring","Summer"],
    skill: ["5"],
    potency: ["3"],
    beneficial: ["Leaves","Flower"],
    poisonous: ["Leaves"],

    medicinal: ["Topical","Ingestion"],
    treats: ["Inflammation","Digestive Issues"],

    toxic: ["Ingestion"],
    complications: ["Vomiting","Photosensitivity","Miscarriage"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "chamomile",
    name: "Chamomile",
    scientific: "Matricaria Chamomilla",
    foundIn: [],
    description: "Small white daisy-like flowers with bright yellow centers growing in open meadows and fields.",
    seasons: ["Spring","Summer"],
    skill: ["2"],
    potency: ["1"],
    beneficial: ["Flower"],
    poisonous: [],

    medicinal: ["Ingestion","Inhalation"],
    treats: ["Sedative","Digestive Issues","Inflammation"],

    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "feverfew",
    name: "Feverfew",
    scientific: "Tanacetum Parthenium",
    foundIn: [],
    description: "A bushy herb bearing clusters of small white flowers with yellow centers and fragrant, deeply divided leaves.",
    seasons: ["Spring","Summer"],
    skill: ["3"],
    potency: ["2"],
    beneficial: ["Flower","Leaves"],
    poisonous: [],

    medicinal: ["Ingestion"],
    treats: ["Fever","Pain","Inflammation"],

    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "goldenseal",
    name: "Goldenseal",
    scientific: "Hydrastis Canadensis",
    foundIn: [],
    description: "A woodland plant with broad wrinkled leaves and a single small greenish-white flower that develops into a red berry.",
    seasons: ["Spring","Summer"],
    skill: ["5"],
    potency: ["3"],
    beneficial: ["Root"],
    poisonous: [],

    medicinal: ["Ingestion","Topical"],
    treats: ["Infection","Digestive Issues"],

    toxic: [],
    complications: [],

    native: ["Yes"],
    uniqueuse: []
},
{
    id: "valerian",
    name: "Valerian",
    scientific: "Valeriana Officinalis",
    foundIn: [],
    description: "A tall flowering herb with clusters of fragrant pale pink blossoms and deeply divided leaves.",
    seasons: ["Spring","Summer"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Root"],
    poisonous: ["Root"],

    medicinal: ["Ingestion"],
    treats: ["Sedative","Anxiety"],

    toxic: ["Ingestion"],
    complications: ["Drowsiness"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "calendula",
    name: "Calendula",
    scientific: "Calendula Officinalis",
    foundIn: [],
    description: "Bright orange or yellow daisy-like flowers that bloom abundantly in sunny meadows and gardens.",
    seasons: ["Spring","Summer","Fall"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Flower"],
    poisonous: [],

    medicinal: ["Topical"],
    treats: ["Wound Healing","Inflammation"],

    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "thyme",
    name: "Thyme",
    scientific: "Thymus Vulgaris",
    foundIn: [],
    description: "A low-growing aromatic herb with tiny oval leaves and small purple flowers on woody stems.",
    seasons: ["Spring","Summer"],
    skill: ["1"],
    potency: ["1"],
    beneficial: ["Leaves"],
    poisonous: [],

    medicinal: ["Ingestion","Inhalation"],
    treats: ["Respiratory Issues","Infection"],

    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "turmeric",
    name: "Turmeric",
    scientific: "Curcuma Longa",
    foundIn: [],
    description: "A tropical plant with broad green leaves grown primarily for its vibrant orange underground rhizomes.",
    seasons: ["Spring","Summer"],
    skill: ["6"],
    potency: ["4"],
    beneficial: ["Root"],
    poisonous: [],

    medicinal: ["Ingestion","Topical"],
    treats: ["Inflammation","Pain"],

    toxic: [],
    complications: [],

    native: ["No"],
    uniqueuse: []
},
{
    id: "wormwood",
    name: "Wormwood",
    scientific: "Artemisia Absinthium",
    foundIn: [],
    description: "A silvery-green herb with feathery leaves and small yellow flower clusters, known for its bitter aroma.",
    seasons: ["Spring","Summer"],
    skill: ["8"],
    potency: ["5"],
    beneficial: ["Leaves"],
    poisonous: ["Leaves"],

    medicinal: ["Ingestion"],
    treats: ["Digestive Issues"],

    toxic: ["Ingestion"],
    complications: ["Hallucinations","Seizures"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "nightshade",
    name: "Nightshade",
    scientific: "Atropa Belladonna",
    foundIn: [],
    description: "A branching perennial with dull purple bell-shaped flowers and glossy black berries hidden beneath broad leaves.",
    seasons: ["Spring","Summer"],
    skill: ["10"],
    potency: ["5"],
    beneficial: ["Leaves"],
    poisonous: ["Leaves","Berries","Root"],

    medicinal: ["Topical"],
    treats: ["Pain"],

    toxic: ["Ingestion"],
    complications: ["Hallucinations","Paralysis","Death"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "baneberry",
    name: "Baneberry",
    scientific: "Actaea Pachypoda",
    foundIn: [],
    description: "A woodland plant producing clusters of white flowers followed by distinctive white berries with black dots.",
    seasons: ["Spring","Summer"],
    skill: ["9"],
    potency: ["5"],
    beneficial: [],
    poisonous: ["Berries","Root"],

    medicinal: [],
    treats: [],

    toxic: ["Ingestion"],
    complications: ["Cardiac Arrest","Vomiting"],

    native: ["Yes"],
    uniqueuse: []
},
{
    id: "deathcamas",
    name: "Death Camas",
    scientific: "Toxicoscordion Venenosum",
    foundIn: [],
    description: "A grass-like plant with narrow leaves and clusters of cream-colored star-shaped flowers growing from a bulb.",
    seasons: ["Spring"],
    skill: ["10"],
    potency: ["5"],
    beneficial: [],
    poisonous: ["Bulb","Leaves"],

    medicinal: [],
    treats: [],

    toxic: ["Ingestion"],
    complications: ["Respiratory Failure","Death"],

    native: ["Yes"],
    uniqueuse: []
},
{
    id: "firethorn",
    name: "Firethorn",
    scientific: "Pyracantha Coccinea",
    foundIn: [],
    description: "A thorny evergreen shrub bearing clusters of white flowers and bright orange-red berries.",
    seasons: ["Spring","Summer","Fall"],
    skill: ["6"],
    potency: ["3"],
    beneficial: ["Berries"],
    poisonous: ["Thorns"],

    medicinal: ["Ingestion"],
    treats: ["Fatigue"],

    toxic: ["External"],
    complications: ["Infection"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "stingingnettle",
    name: "Stinging Nettle",
    scientific: "Urtica Dioica",
    foundIn: [],
    description: "A tall leafy plant covered in fine stinging hairs that grows in dense patches near water and disturbed ground.",
    seasons: ["Spring","Summer"],
    skill: ["4"],
    potency: ["2"],
    beneficial: ["Leaves"],
    poisonous: ["Leaves"],

    medicinal: ["Ingestion","Topical"],
    treats: ["Inflammation","Pain"],

    toxic: ["Topical"],
    complications: ["Skin Irritation"],

    native: ["Yes"],
    uniqueuse: []
},
{
    id: "wolfbane",
    name: "Wolfbane",
    scientific: "Aconitum Napellus",
    foundIn: [],
    description: "A tall plant with deeply divided leaves and striking blue-purple hooded flowers.",
    seasons: ["Summer","Fall"],
    skill: ["10"],
    potency: ["5"],
    beneficial: [],
    poisonous: ["Root","Flower","Leaves"],

    medicinal: [],
    treats: [],

    toxic: ["Ingestion","Topic"],
    complications: ["Paralysis","Cardiac Arrest","Death"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "manchineel",
    name: "Manchineel",
    scientific: "Hippomane Mancinella",
    foundIn: [],
    description: "A coastal tree with glossy green leaves and small apple-like fruits, producing a highly caustic white sap.",
    seasons: ["Spring","Summer","Fall"],
    skill: ["10"],
    potency: ["5"],
    beneficial: [],
    poisonous: ["Sap","Fruit","Leaves","Bark"],

    medicinal: [],
    treats: [],

    toxic: ["External","Ingestion"],
    complications: ["Severe Burns","Blindness","Death"],

    native: ["No"],
    uniqueuse: []
},
{
    id: "deathweed",
    name: "Death Weed",
    scientific: "Oculi Mortis",
    foundIn: ["Selunari Expanse","Isdyn's Deep","Usstor","Craub","Caverns of Avee"],
    description: "A sickly, dark grey plant with rounded leaves that grows only deep in caverns in areas of extreme temperature. Consuming more than three times in a year will result in death. Must be properly instructed to identify.",
    seasons: ["Spring","Summer","Fall","Winter"],
    skill: ["15"],
    potency: ["5"],
    beneficial: [],
    poisonous: ["Leaves"],
              
    medicinal: [],
    treats: [],
  
    toxic: ["Ingestion"],
    complications: ["Hallucinations","Death"],

    native: ["Yes"],
    uniqueuse: ["Allows user to see ghosts within a single thread. Character must have at least 4 medicine skill to consume. Those with insufficient skill will experience hallucinations."]
},
{
    id: "suppressiongrass",
    name: "Suppression Grass",
    scientific: "Famem Minuere",
    foundIn: ["Olum Karst","Ghost Plains"],
    description: "Spiny, crunchy brown pointed grass sprouting from a single stalk growing in dry, arid regions. Only present in Ghost Plains during Fall. Must be properly instructed to identify.",
    seasons: ["Summer","Fall"],
    skill: ["12"],
    potency: ["5"],
    beneficial: [],
    poisonous: [],
              
    medicinal: [],
    treats: [],
  
    toxic: [],
    complications: [],

    native: ["Yes"],
    uniqueuse: ["When harvested, allots for food coverage for up to 3 wolves (not subject to the 50% hunting rule) in addition to the foraging coverage."]
},
{
    id: "proproot",
    name: "Propagation Root",
    scientific: "Maiores Probabilitates",
    foundIn: ["Dyndre's Swamp","Rixetun Plains","Uchai Lagoon","Ghost Plains"],
    description: "A deep purple root dug out of freshwater swamps and wetlands. Only present in Ghost Plains during Summer. Must be properly instructed to identify.",
    seasons: ["Spring","Summer","Fall"],
    skill: ["13"],
    potency: ["4"],
    beneficial: [],
    poisonous: ["Root"],
              
    medicinal: [],
    treats: [],
  
    toxic: ["Ingestion"],
    complications: ["Nausea","Vomiting"],

    native: ["Yes"],
    uniqueuse: ["Eliminates the effects of fertility issues in an adult, if no existing fertility issues allows one free conception re-roll (per parent that has been dosed). Persists for one heat cycle (females) or 6 months OOC (males). Consumer must have at least 8 skill, otherwise experiences complications."]
},
{
    id: "wintercap",
    name: "Winter Cap Mushroom",
    scientific: "Mutationes Congelatae",
    foundIn: ["Tia'deli Mountains","The Kinath","Carinne Hollow","Rynack"],
    description: "Dark blue mushroom caps found beneath trees in areas where the ground is consistently cold. Must be properly instructed to identify.",
    seasons: ["Spring","Summer","Fall","Winter"],
    skill: ["9"],
    potency: ["2"],
    beneficial: [],
    poisonous: [],
              
    medicinal: [],
    treats: [],
  
    toxic: [],
    complications: [],

    native: ["Yes"],
    uniqueuse: ["Doubles the chance of a random mutation (not birth defect) in the next litter conceived by the character. Can stack to a maximum of 1 in 4 chance if both parents consume."]
}
];
