const fishCollection = [
    {
        image: "https://www.liveaquaria.com/images/categories/large/lg_39323_Flame_Dwarf_Gourami.jpg",
        name: "Glame Dwarf Gourami",
        species: "Trichogaster Ialia",
        length: "2 inches",
        location: "India",
        food: "Algae"
    },

    {
        image: "https://www.liveaquaria.com/images/categories/large/lg_Koi_Angel_89611.jpg",
        name: "Koi Angelfish",
        species: "Pterophyllum scalare",
        length: "6 inches",
        location: "Brazil",
        food: "Algae"
    },

    {
        image: "https://www.liveaquaria.com/images/categories/large/lg_72329_Royal_Gramma_Basslet.jpg",
        name: "Gramma loreto",
        species: "Hypancistrus zebra",
        length: "3/4 inch - 2 1/2 inches",
        location: "Caribbean",
        food: "Brine Shrimp"
    },

    {
        image: "https://www.liveaquaria.com/images/categories/large/lg_90003_OrchidDottyback.jpg",
        name: "Orchid Dottyback",
        species: "Pseudochromis fridmani",
        length: "3/4 inch - 2 1/2inch",
        location: "Red Sea",
        food: "Small Mantis Shrimp"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishObject of fishCollection) {
        console.log(fishObject)
    } 

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}