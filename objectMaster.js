const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const idOf3s = pokémon.filter( checkId => checkId.id % 3 === 0 );
    //console.log(idOf3s);

    const fireTypes = pokémon.filter( checkTypes => checkTypes.types.includes("fire"));
    //console.log(fireTypes);

    const multiTypes = pokémon.filter(checkTypeAmt => checkTypeAmt.types.length > 1);
    //console.log(multiTypes);

    const names = pokémon.map(n => n.name);
    //console.log(names);

    const namesOver99 = pokémon.filter(id99 => id99.id > 99).map( n => n.name);
    //console.log(namesOver99);

    const namesPoisonPure = pokémon.filter( typeLen => typeLen.types.length < 2).filter(type => type.types[0] === "poison").map(n => n.name);
    //console.log(namesPoisonPure);

    const namesFlyingSecond = pokémon.filter(type => type.types[1] === "flying").map(n=> n.name);
    //console.log(namesFlyingSecond);

    const numNormals = pokémon.filter(isNorm => isNorm.types.includes("normal")).length;
    console.log(numNormals);