const fishCollection = [
    {
        image: "https://www.liveaquaria.com/images/categories/large/lg_39323_Flame_Dwarf_Gourami.jpg",
        name: "lame Dwarf Gourami",
        species: "Trichogaster Ialia",
        location: "India",
        length: "2 inches",
        food: "Algae"
    },

    {
        name: "Koi Angelfish",
        species: "Pterophyllum scalare",
        location: "Brazil",
        length: "6 inches",
        food: "Algae"
    },

    {
        name: "Gramma loreto",
        species: "Hypancistrus zebra",
        location: "Caribbean",
        length: "3/4 inch - 2 1/2 inches",
        food: "Brine Shrimp"
    },

    {
        name: "Orchid Dottyback",
        species: "Pseudochromis fridmani",
        location: "Red Sea",
        length: "3/4inch - 2-1/2inch",
        food: "Small Mantis Shrimp"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}