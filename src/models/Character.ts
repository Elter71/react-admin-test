type Character = {
    id:      number;
    name:    string;
    status:  string;
    image: string;
};
type CharacterApiModel =  {
    id:      number;
    name:    string;
    status:  string;
    species: string;
    type:    string;
    gender:  string;
    origin:  Origin;
    image: string;
    episodes: string[]
    url: string;
    created: string;
}
type Origin = {
    name: string;
    url:  string;
}

export default Character;


export const mapCharacterApiModelToCharacter = (model: CharacterApiModel): Character => ({
    id: model.id,
    name: model.name,
    status: model.status,
    image: model.image
})
