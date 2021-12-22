type CharacterApiModel =  {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   LocationApiModel;
    location: LocationApiModel;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}
type LocationApiModel = {
    name: string;
    url:  string;
}

type Character =  {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

type Location = {
    id: string;
    name: string;
    url:  string;
}

export const mapCharacter = (model: CharacterApiModel) => ({
    ...model,
    origin: mapLocation(model.origin),
    location: mapLocation(model.location)
})

const mapLocation = (model: LocationApiModel) => ({
    ...model,
    id: model.url.replace('https://rickandmortyapi.com/api/location/', '')
})



export default Character;
