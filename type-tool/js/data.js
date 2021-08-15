var pokemonData = ["Bulbasaur,Grass,Poison",
"Ivysaur,Grass,Poison",
"Venusaur,Grass,Poison",
"Charmander,Fire",
"Charmeleon,Fire",
"Charizard,Fire,Flying",
"Squirtle,Water",
"Wartortle,Water",
"Blastoise,Water",
"Caterpie,Bug",
"Metapod,Bug",
"Butterfree,Bug,Flying",
"Weedle,Bug,Poison",
"Kakuna,Bug,Poison",
"Beedrill,Bug,Poison",
"Pidgey,Normal,Flying",
"Pidgeotto,Normal,Flying",
"Pidgeot,Normal,Flying",
"Rattata,Normal",
"Raticate,Normal",
"Spearow,Normal,Flying",
"Fearow,Normal,Flying",
"Ekans,Poison",
"Arbok,Poison",
"Pikachu,Electric",
"Raichu,Electric",
"Sandshrew,Ground",
"Sandslash,Ground",
"Nidoran♀,Poison",
"Nidorina,Poison",
"Nidoqueen,Poison,Ground",
"Nidoran♂,Poison",
"Nidorino,Poison",
"Nidoking,Poison,Ground",
"Clefairy,Fairy",
"Clefable,Fairy",
"Vulpix,Fire",
"Ninetales,Fire",
"Jigglypuff,Normal,Fairy",
"Wigglytuff,Normal,Fairy",
"Zubat,Poison,Flying",
"Golbat,Poison,Flying",
"Oddish,Grass,Poison",
"Gloom,Grass,Poison",
"Vileplume,Grass,Poison",
"Paras,Bug,Grass",
"Parasect,Bug,Grass",
"Venonat,Bug,Poison",
"Venomoth,Bug,Poison",
"Diglett,Ground",
"Dugtrio,Ground",
"Meowth,Normal",
"Persian,Normal",
"Psyduck,Water",
"Golduck,Water",
"Mankey,Fighting",
"Primeape,Fighting",
"Growlithe,Fire",
"Arcanine,Fire",
"Poliwag,Water",
"Poliwhirl,Water",
"Poliwrath,Water,Fighting",
"Abra,Psychic",
"Kadabra,Psychic",
"Alakazam,Psychic",
"Machop,Fighting",
"Machoke,Fighting",
"Machamp,Fighting",
"Bellsprout,Grass,Poison",
"Weepinbell,Grass,Poison",
"Victreebel,Grass,Poison",
"Tentacool,Water,Poison",
"Tentacruel,Water,Poison",
"Geodude,Rock,Ground",
"Graveler,Rock,Ground",
"Golem,Rock,Ground",
"Ponyta,Fire",
"Rapidash,Fire",
"Slowpoke,Water,Psychic",
"Slowbro,Water,Psychic",
"Magnemite,Electric,Steel",
"Magneton,Electric,Steel",
"Farfetch'd,Normal,Flying",
"Doduo,Normal,Flying",
"Dodrio,Normal,Flying",
"Seel,Water",
"Dewgong,Water,Ice",
"Grimer,Poison",
"Muk,Poison",
"Shellder,Water",
"Cloyster,Water,Ice",
"Gastly,Ghost,Poison",
"Haunter,Ghost,Poison",
"Gengar,Ghost,Poison",
"Onix,Rock,Ground",
"Drowzee,Psychic",
"Hypno,Psychic",
"Krabby,Water",
"Kingler,Water",
"Voltorb,Electric",
"Electrode,Electric",
"Exeggcute,Grass,Psychic",
"Exeggutor,Grass,Psychic",
"Cubone,Ground",
"Marowak,Ground",
"Hitmonlee,Fighting",
"Hitmonchan,Fighting",
"Lickitung,Normal",
"Koffing,Poison",
"Weezing,Poison",
"Rhyhorn,Ground,Rock",
"Rhydon,Ground,Rock",
"Chansey,Normal",
"Tangela,Grass",
"Kangaskhan,Normal",
"Horsea,Water",
"Seadra,Water",
"Goldeen,Water",
"Seaking,Water",
"Staryu,Water",
"Starmie,Water,Psychic",
"Mr. Mime,Psychic,Fairy",
"Scyther,Bug,Flying",
"Jynx,Ice,Psychic",
"Electabuzz,Electric",
"Magmar,Fire",
"Pinsir,Bug",
"Tauros,Normal",
"Magikarp,Water",
"Gyarados,Water,Flying",
"Lapras,Water,Ice",
"Ditto,Normal",
"Eevee,Normal",
"Vaporeon,Water",
"Jolteon,Electric",
"Flareon,Fire",
"Porygon,Normal",
"Omanyte,Rock,Water",
"Omastar,Rock,Water",
"Kabuto,Rock,Water",
"Kabutops,Rock,Water",
"Aerodactyl,Rock,Flying",
"Snorlax,Normal",
"Articuno,Ice,Flying",
"Zapdos,Electric,Flying",
"Moltres,Fire,Flying",
"Dratini,Dragon",
"Dragonair,Dragon",
"Dragonite,Dragon,Flying",
"Mewtwo,Psychic",
"Mew,Psychic",
"Chikorita,Grass",
"Bayleef,Grass",
"Meganium,Grass",
"Cyndaquil,Fire",
"Quilava,Fire",
"Typhlosion,Fire",
"Totodile,Water",
"Croconaw,Water",
"Feraligatr,Water",
"Sentret,Normal",
"Furret,Normal",
"Hoothoot,Normal,Flying",
"Noctowl,Normal,Flying",
"Ledyba,Bug,Flying",
"Ledian,Bug,Flying",
"Spinarak,Bug,Poison",
"Ariados,Bug,Poison",
"Crobat,Poison,Flying",
"Chinchou,Water,Electric",
"Lanturn,Water,Electric",
"Pichu,Electric",
"Cleffa,Fairy",
"Igglybuff,Normal,Fairy",
"Togepi,Fairy",
"Togetic,Fairy,Flying",
"Natu,Psychic,Flying",
"Xatu,Psychic,Flying",
"Mareep,Electric",
"Flaaffy,Electric",
"Ampharos,Electric",
"Bellossom,Grass",
"Marill,Water,Fairy",
"Azumarill,Water,Fairy",
"Sudowoodo,Rock",
"Politoed,Water",
"Hoppip,Grass,Flying",
"Skiploom,Grass,Flying",
"Jumpluff,Grass,Flying",
"Aipom,Normal",
"Sunkern,Grass",
"Sunflora,Grass",
"Yanma,Bug,Flying",
"Wooper,Water,Ground",
"Quagsire,Water,Ground",
"Espeon,Psychic",
"Umbreon,Dark",
"Murkrow,Dark,Flying",
"Slowking,Water,Psychic",
"Misdreavus,Ghost",
"Unown,Psychic",
"Wobbuffet,Psychic",
"Girafarig,Normal,Psychic",
"Pineco,Bug",
"Forretress,Bug,Steel",
"Dunsparce,Normal",
"Gligar,Ground,Flying",
"Steelix,Steel,Ground",
"Snubbull,Fairy",
"Granbull,Fairy",
"Qwilfish,Water,Poison",
"Scizor,Bug,Steel",
"Shuckle,Bug,Rock",
"Heracross,Bug,Fighting",
"Sneasel,Dark,Ice",
"Teddiursa,Normal",
"Ursaring,Normal",
"Slugma,Fire",
"Magcargo,Fire,Rock",
"Swinub,Ice,Ground",
"Piloswine,Ice,Ground",
"Corsola,Water,Rock",
"Remoraid,Water",
"Octillery,Water",
"Delibird,Ice,Flying",
"Mantine,Water,Flying",
"Skarmory,Steel,Flying",
"Houndour,Dark,Fire",
"Houndoom,Dark,Fire",
"Kingdra,Water,Dragon",
"Phanpy,Ground",
"Donphan,Ground",
"Porygon2,Normal",
"Stantler,Normal",
"Smeargle,Normal",
"Tyrogue,Fighting",
"Hitmontop,Fighting",
"Smoochum,Ice,Psychic",
"Elekid,Electric",
"Magby,Fire",
"Miltank,Normal",
"Blissey,Normal",
"Raikou,Electric",
"Entei,Fire",
"Suicune,Water",
"Larvitar,Rock,Ground",
"Pupitar,Rock,Ground",
"Tyranitar,Rock,Dark",
"Lugia,Psychic,Flying",
"Ho-oh,Fire,Flying",
"Celebi,Psychic,Grass",
"Treecko,Grass",
"Grovyle,Grass",
"Sceptile,Grass",
"Torchic,Fire",
"Combusken,Fire,Fighting",
"Blaziken,Fire,Fighting",
"Mudkip,Water",
"Marshtomp,Water,Ground",
"Swampert,Water,Ground",
"Poochyena,Dark",
"Mightyena,Dark",
"Zigzagoon,Normal",
"Linoone,Normal",
"Wurmple,Bug",
"Silcoon,Bug",
"Beautifly,Bug,Flying",
"Cascoon,Bug",
"Dustox,Bug,Poison",
"Lotad,Water,Grass",
"Lombre,Water,Grass",
"Ludicolo,Water,Grass",
"Seedot,Grass",
"Nuzleaf,Grass,Dark",
"Shiftry,Grass,Dark",
"Taillow,Normal,Flying",
"Swellow,Normal,Flying",
"Wingull,Water,Flying",
"Pelipper,Water,Flying",
"Ralts,Psychic,Fairy",
"Kirlia,Psychic,Fairy",
"Gardevoir,Psychic,Fairy",
"Surskit,Bug,Water",
"Masquerain,Bug,Flying",
"Shroomish,Grass",
"Breloom,Grass,Fighting",
"Slakoth,Normal",
"Vigoroth,Normal",
"Slaking,Normal",
"Nincada,Bug,Ground",
"Ninjask,Bug,Flying",
"Shedinja,Bug,Ghost",
"Whismur,Normal",
"Loudred,Normal",
"Exploud,Normal",
"Makuhita,Fighting",
"Hariyama,Fighting",
"Azurill,Normal,Fairy",
"Nosepass,Rock",
"Skitty,Normal",
"Delcatty,Normal",
"Sableye,Dark,Ghost",
"Mawile,Steel,Fairy",
"Aron,Steel,Rock",
"Lairon,Steel,Rock",
"Aggron,Steel,Rock",
"Meditite,Fighting,Psychic",
"Medicham,Fighting,Psychic",
"Electrike,Electric",
"Manectric,Electric",
"Plusle,Electric",
"Minun,Electric",
"Volbeat,Bug",
"Illumise,Bug",
"Roselia,Grass,Poison",
"Gulpin,Poison",
"Swalot,Poison",
"Carvanha,Water,Dark",
"Sharpedo,Water,Dark",
"Wailmer,Water",
"Wailord,Water",
"Numel,Fire,Ground",
"Camerupt,Fire,Ground",
"Torkoal,Fire",
"Spoink,Psychic",
"Grumpig,Psychic",
"Spinda,Normal",
"Trapinch,Ground",
"Vibrava,Ground,Dragon",
"Flygon,Ground,Dragon",
"Cacnea,Grass",
"Cacturne,Grass,Dark",
"Swablu,Normal,Flying",
"Altaria,Dragon,Flying",
"Zangoose,Normal",
"Seviper,Poison",
"Lunatone,Rock,Psychic",
"Solrock,Rock,Psychic",
"Barboach,Water,Ground",
"Whiscash,Water,Ground",
"Corphish,Water",
"Crawdaunt,Water,Dark",
"Baltoy,Ground,Psychic",
"Claydol,Ground,Psychic",
"Lileep,Rock,Grass",
"Cradily,Rock,Grass",
"Anorith,Rock,Bug",
"Armaldo,Rock,Bug",
"Feebas,Water",
"Milotic,Water",
"Castform,Normal",
"Kecleon,Normal",
"Shuppet,Ghost",
"Banette,Ghost",
"Duskull,Ghost",
"Dusclops,Ghost",
"Tropius,Grass,Flying",
"Chimecho,Psychic",
"Absol,Dark",
"Wynaut,Psychic",
"Snorunt,Ice",
"Glalie,Ice",
"Spheal,Ice,Water",
"Sealeo,Ice,Water",
"Walrein,Ice,Water",
"Clamperl,Water",
"Huntail,Water",
"Gorebyss,Water",
"Relicanth,Water,Rock",
"Luvdisc,Water",
"Bagon,Dragon",
"Shelgon,Dragon",
"Salamence,Dragon,Flying",
"Beldum,Steel,Psychic",
"Metang,Steel,Psychic",
"Metagross,Steel,Psychic",
"Regirock,Rock",
"Regice,Ice",
"Registeel,Steel",
"Latias,Dragon,Psychic",
"Latios,Dragon,Psychic",
"Kyogre,Water",
"Groudon,Ground",
"Rayquaza,Dragon,Flying",
"Jirachi,Steel,Psychic",
"Deoxys,Psychic",
"Turtwig,Grass",
"Grotle,Grass",
"Torterra,Grass,Ground",
"Chimchar,Fire",
"Monferno,Fire,Fighting",
"Infernape,Fire,Fighting",
"Piplup,Water",
"Prinplup,Water",
"Empoleon,Water,Steel",
"Starly,Normal,Flying",
"Staravia,Normal,Flying",
"Staraptor,Normal,Flying",
"Bidoof,Normal",
"Bibarel,Normal,Water",
"Kricketot,Bug",
"Kricketune,Bug",
"Shinx,Electric",
"Luxio,Electric",
"Luxray,Electric",
"Budew,Grass,Poison",
"Roserade,Grass,Poison",
"Cranidos,Rock",
"Rampardos,Rock",
"Shieldon,Rock,Steel",
"Bastiodon,Rock,Steel",
"Burmy,Bug",
"Wormadam,Bug,Grass",
"Mothim,Bug,Flying",
"Combee,Bug,Flying",
"Vespiquen,Bug,Flying",
"Pachirisu,Electric",
"Buizel,Water",
"Floatzel,Water",
"Cherubi,Grass",
"Cherrim,Grass",
"Shellos,Water",
"Gastrodon,Water,Ground",
"Ambipom,Normal",
"Drifloon,Ghost,Flying",
"Drifblim,Ghost,Flying",
"Buneary,Normal",
"Lopunny,Normal",
"Mismagius,Ghost",
"Honchkrow,Dark,Flying",
"Glameow,Normal",
"Purugly,Normal",
"Chingling,Psychic",
"Stunky,Poison,Dark",
"Skuntank,Poison,Dark",
"Bronzor,Steel,Psychic",
"Bronzong,Steel,Psychic",
"Bonsly,Rock",
"Mime Jr.,Psychic,Fairy",
"Happiny,Normal",
"Chatot,Normal,Flying",
"Spiritomb,Ghost,Dark",
"Gible,Dragon,Ground",
"Gabite,Dragon,Ground",
"Garchomp,Dragon,Ground",
"Munchlax,Normal",
"Riolu,Fighting",
"Lucario,Fighting,Steel",
"Hippopotas,Ground",
"Hippowdon,Ground",
"Skorupi,Poison,Bug",
"Drapion,Poison,Dark",
"Croagunk,Poison,Fighting",
"Toxicroak,Poison,Fighting",
"Carnivine,Grass",
"Finneon,Water",
"Lumineon,Water",
"Mantyke,Water,Flying",
"Snover,Grass,Ice",
"Abomasnow,Grass,Ice",
"Weavile,Dark,Ice",
"Magnezone,Electric,Steel",
"Lickilicky,Normal",
"Rhyperior,Ground,Rock",
"Tangrowth,Grass",
"Electivire,Electric",
"Magmortar,Fire",
"Togekiss,Fairy,Flying",
"Yanmega,Bug,Flying",
"Leafeon,Grass",
"Glaceon,Ice",
"Gliscor,Ground,Flying",
"Mamoswine,Ice,Ground",
"Porygon-Z,Normal",
"Gallade,Psychic,Fighting",
"Probopass,Rock,Steel",
"Dusknoir,Ghost",
"Froslass,Ice,Ghost",
"Rotom,Electric,Ghost",
"Uxie,Psychic",
"Mesprit,Psychic",
"Azelf,Psychic",
"Dialga,Steel,Dragon",
"Palkia,Water,Dragon",
"Heatran,Fire,Steel",
"Regigigas,Normal",
"Giratina,Ghost,Dragon",
"Cresselia,Psychic",
"Phione,Water",
"Manaphy,Water",
"Darkrai,Dark",
"Shaymin,Grass",
"Arceus,Normal",
"Victini,Psychic,Fire",
"Snivy,Grass",
"Servine,Grass",
"Serperior,Grass",
"Tepig,Fire",
"Pignite,Fire,Fighting",
"Emboar,Fire,Fighting",
"Oshawott,Water",
"Dewott,Water",
"Samurott,Water",
"Patrat,Normal",
"Watchog,Normal",
"Lillipup,Normal",
"Herdier,Normal",
"Stoutland,Normal",
"Purrloin,Dark",
"Liepard,Dark",
"Pansage,Grass",
"Simisage,Grass",
"Pansear,Fire",
"Simisear,Fire",
"Panpour,Water",
"Simipour,Water",
"Munna,Psychic",
"Musharna,Psychic",
"Pidove,Normal,Flying",
"Tranquill,Normal,Flying",
"Unfezant,Normal,Flying",
"Blitzle,Electric",
"Zebstrika,Electric",
"Roggenrola,Rock",
"Boldore,Rock",
"Gigalith,Rock",
"Woobat,Psychic,Flying",
"Swoobat,Psychic,Flying",
"Drilbur,Ground",
"Excadrill,Ground,Steel",
"Audino,Normal",
"Timburr,Fighting",
"Gurdurr,Fighting",
"Conkeldurr,Fighting",
"Tympole,Water",
"Palpitoad,Water,Ground",
"Seismitoad,Water,Ground",
"Throh,Fighting",
"Sawk,Fighting",
"Sewaddle,Bug,Grass",
"Swadloon,Bug,Grass",
"Leavanny,Bug,Grass",
"Venipede,Bug,Poison",
"Whirlipede,Bug,Poison",
"Scolipede,Bug,Poison",
"Cottonee,Grass,Fairy",
"Whimsicott,Grass,Fairy",
"Petilil,Grass",
"Lilligant,Grass",
"Basculin,Water",
"Sandile,Ground,Dark",
"Krokorok,Ground,Dark",
"Krookodile,Ground,Dark",
"Darumaka,Fire",
"Darmanitan,Fire",
"Maractus,Grass",
"Dwebble,Bug,Rock",
"Crustle,Bug,Rock",
"Scraggy,Dark,Fighting",
"Scrafty,Dark,Fighting",
"Sigilyph,Psychic,Flying",
"Yamask,Ghost",
"Cofagrigus,Ghost",
"Tirtouga,Water,Rock",
"Carracosta,Water,Rock",
"Archen,Rock,Flying",
"Archeops,Rock,Flying",
"Trubbish,Poison",
"Garbodor,Poison",
"Zorua,Dark",
"Zoroark,Dark",
"Minccino,Normal",
"Cinccino,Normal",
"Gothita,Psychic",
"Gothorita,Psychic",
"Gothitelle,Psychic",
"Solosis,Psychic",
"Duosion,Psychic",
"Reuniclus,Psychic",
"Ducklett,Water,Flying",
"Swanna,Water,Flying",
"Vanillite,Ice",
"Vanillish,Ice",
"Vanilluxe,Ice",
"Deerling,Normal,Grass",
"Sawsbuck,Normal,Grass",
"Emolga,Electric,Flying",
"Karrablast,Bug",
"Escavalier,Bug,Steel",
"Foongus,Grass,Poison",
"Amoonguss,Grass,Poison",
"Frillish,Water,Ghost",
"Jellicent,Water,Ghost",
"Alomomola,Water",
"Joltik,Bug,Electric",
"Galvantula,Bug,Electric",
"Ferroseed,Grass,Steel",
"Ferrothorn,Grass,Steel",
"Klink,Steel",
"Klang,Steel",
"Klinklang,Steel",
"Tynamo,Electric",
"Eelektrik,Electric",
"Eelektross,Electric",
"Elgyem,Psychic",
"Beheeyem,Psychic",
"Litwick,Ghost,Fire",
"Lampent,Ghost,Fire",
"Chandelure,Ghost,Fire",
"Axew,Dragon",
"Fraxure,Dragon",
"Haxorus,Dragon",
"Cubchoo,Ice",
"Beartic,Ice",
"Cryogonal,Ice",
"Shelmet,Bug",
"Accelgor,Bug",
"Stunfisk,Ground,Electric",
"Mienfoo,Fighting",
"Mienshao,Fighting",
"Druddigon,Dragon",
"Golett,Ground,Ghost",
"Golurk,Ground,Ghost",
"Pawniard,Dark,Steel",
"Bisharp,Dark,Steel",
"Bouffalant,Normal",
"Rufflet,Normal,Flying",
"Braviary,Normal,Flying",
"Vullaby,Dark,Flying",
"Mandibuzz,Dark,Flying",
"Heatmor,Fire",
"Durant,Bug,Steel",
"Deino,Dark,Dragon",
"Zweilous,Dark,Dragon",
"Hydreigon,Dark,Dragon",
"Larvesta,Bug,Fire",
"Volcarona,Bug,Fire",
"Cobalion,Steel,Fighting",
"Terrakion,Rock,Fighting",
"Virizion,Grass,Fighting",
"Tornadus,Flying",
"Thundurus,Electric,Flying",
"Reshiram,Dragon,Fire",
"Zekrom,Dragon,Electric",
"Landorus,Ground,Flying",
"Kyurem,Dragon,Ice",
"Keldeo,Water,Fighting",
"Meloetta,Normal,Psychic",
"Genesect,Bug,Steel",
"Chespin,Grass",
"Quilladin,Grass",
"Chesnaught,Grass,Fighting",
"Fennekin,Fire",
"Braixen,Fire",
"Delphox,Fire,Psychic",
"Froakie,Water",
"Frogadier,Water",
"Greninja,Water,Dark",
"Bunnelby,Normal",
"Diggersby,Normal,Ground",
"Fletchling,Normal,Flying",
"Fletchinder,Fire,Flying",
"Talonflame,Fire,Flying",
"Scatterbug,Bug",
"Spewpa,Bug",
"Vivillon,Bug,Flying",
"Litleo,Fire,Normal",
"Pyroar,Fire,Normal",
"Flabébé,Fairy",
"Floette,Fairy",
"Florges,Fairy",
"Skiddo,Grass",
"Gogoat,Grass",
"Pancham,Fighting",
"Pangoro,Fighting,Dark",
"Furfrou,Normal",
"Espurr,Psychic",
"Meowstic,Psychic",
"Honedge,Steel,Ghost",
"Doublade,Steel,Ghost",
"Aegislash,Steel,Ghost",
"Spritzee,Fairy",
"Aromatisse,Fairy",
"Swirlix,Fairy",
"Slurpuff,Fairy",
"Inkay,Dark,Psychic",
"Malamar,Dark,Psychic",
"Binacle,Rock,Water",
"Barbaracle,Rock,Water",
"Skrelp,Poison,Water",
"Dragalge,Poison,Dragon",
"Clauncher,Water",
"Clawitzer,Water",
"Helioptile,Electric,Normal",
"Heliolisk,Electric,Normal",
"Tyrunt,Rock,Dragon",
"Tyrantrum,Rock,Dragon",
"Amaura,Rock,Ice",
"Aurorus,Rock,Ice",
"Sylveon,Fairy",
"Hawlucha,Fighting,Flying",
"Dedenne,Electric,Fairy",
"Carbink,Rock,Fairy",
"Goomy,Dragon",
"Sliggoo,Dragon",
"Goodra,Dragon",
"Klefki,Steel,Fairy",
"Phantump,Ghost,Grass",
"Trevenant,Ghost,Grass",
"Pumpkaboo,Ghost,Grass",
"Gourgeist,Ghost,Grass",
"Bergmite,Ice",
"Avalugg,Ice",
"Noibat,Flying,Dragon",
"Noivern,Flying,Dragon",
"Xerneas,Fairy",
"Yveltal,Dark,Flying",
"Zygarde,Dragon,Ground",
"Diancie,Rock,Fairy",
"Hoopa,Psychic,Ghost",
"Volcanion,Fire,Water",
"Rowlet,Grass,Flying",
"Dartrix,Grass,Flying",
"Decidueye,Grass,Ghost",
"Litten,Fire",
"Torracat,Fire",
"Incineroar,Fire,Dark",
"Popplio,Water",
"Brionne,Water",
"Primarina,Water,Fairy",
"Pikipek,Normal,Flying",
"Trumbeak,Normal,Flying",
"Toucannon,Normal,Flying",
"Yungoos,Normal",
"Gumshoos,Normal",
"Grubbin,Bug",
"Charjabug,Bug,Electric",
"Vikavolt,Bug,Electric",
"Crabrawler,Fighting",
"Crabominable,Fighting,Ice",
"Oricorio,Fire,Flying",
"Cutiefly,Bug,Fairy",
"Ribombee,Bug,Fairy",
"Rockruff,Rock",
"Lycanroc,Rock",
"Wishiwashi,Water",
"Mareanie,Poison,Water",
"Toxapex,Poison,Water",
"Mudbray,Ground",
"Mudsdale,Ground",
"Dewpider,Water,Bug",
"Araquanid,Water,Bug",
"Fomantis,Grass",
"Lurantis,Grass",
"Morelull,Grass,Fairy",
"Shiinotic,Grass,Fairy",
"Salandit,Poison,Fire",
"Salazzle,Poison,Fire",
"Stufful,Normal,Fighting",
"Bewear,Normal,Fighting",
"Bounsweet,Grass",
"Steenee,Grass",
"Tsareena,Grass",
"Comfey,Fairy",
"Oranguru,Normal,Psychic",
"Passimian,Fighting",
"Wimpod,Bug,Water",
"Golisopod,Bug,Water",
"Sandygast,Ghost,Ground",
"Palossand,Ghost,Ground",
"Pyukumuku,Water",
"Type: Null,Normal",
"Silvally,Normal",
"Minior,Rock,Flying",
"Komala,Normal",
"Turtonator,Fire,Dragon",
"Togedemaru,Electric,Steel",
"Mimikyu,Ghost,Fairy",
"Bruxish,Water,Psychic",
"Drampa,Normal,Dragon",
"Dhelmise,Ghost,Grass",
"Jangmo-o,Dragon",
"Hakamo-o,Dragon,Fighting",
"Kommo-o,Dragon,Fighting",
"Tapu Koko,Electric,Fairy",
"Tapu Lele,Psychic,Fairy",
"Tapu Bulu,Grass,Fairy",
"Tapu Fini,Water,Fairy",
"Cosmog,Psychic",
"Cosmoem,Psychic",
"Solgaleo,Psychic,Steel",
"Lunala,Psychic,Ghost",
"Nihilego,Rock,Poison",
"Buzzwole,Bug,Fighting",
"Pheromosa,Bug,Fighting",
"Xurkitree,Electric",
"Celesteela,Steel,Flying",
"Kartana,Grass,Steel",
"Guzzlord,Dark,Dragon",
"Necrozma,Psychic",
"Magearna,Steel,Fairy",
"Marshadow,Fighting,Ghost",
"Poipole,Poison",
"Naganadel,Poison,Dragon",
"Stakataka,Rock,Steel",
"Blacephalon,Fire,Ghost",
"Zeraora,Electric",
"Meltan,Steel",
"Melmetal,Steel",
"Grookey,Grass",
"Thwackey,Grass",
"Rillaboom,Grass",
"Scorbunny,Fire",
"Raboot,Fire",
"Cinderace,Fire",
"Sobble,Water",
"Drizzile,Water",
"Inteleon,Water",
"Skwovet,Normal",
"Greedent,Normal",
"Rookidee,Flying",
"Corvisquire,Flying",
"Corviknight,Flying,Steel",
"Blipbug,Bug",
"Dottler,Bug,Psychic",
"Orbeetle,Bug,Psychic",
"Nickit,Dark",
"Thievul,Dark",
"Gossifleur,Grass",
"Eldegoss,Grass",
"Wooloo,Normal",
"Dubwool,Normal",
"Chewtle,Water",
"Drednaw,Water,Rock",
"Yamper,Electric",
"Boltund,Electric",
"Rolycoly,Rock",
"Carkol,Rock,Fire",
"Coalossal,Rock,Fire",
"Applin,Grass,Dragon",
"Flapple,Grass,Dragon",
"Appletun,Grass,Dragon",
"Silicobra,Ground",
"Sandaconda,Ground",
"Cramorant,Flying,Water",
"Arrokuda,Water",
"Barraskewda,Water",
"Toxel,Electric,Poison",
"Toxtricity,Electric,Poison",
"Sizzlipede,Fire,Bug",
"Centiskorch,Fire,Bug",
"Clobbopus,Fighting",
"Grapploct,Fighting",
"Sinistea,Ghost",
"Polteageist,Ghost",
"Hatenna,Psychic",
"Hattrem,Psychic",
"Hatterene,Psychic,Fairy",
"Impidimp,Dark,Fairy",
"Morgrem,Dark,Fairy",
"Grimmsnarl,Dark,Fairy",
"Obstagoon,Dark,Normal",
"Perrserker,Steel",
"Cursola,Ghost",
"Sirfetch'd,Fighting",
"Mr. Rime,Ice,Psychic",
"Runerigus,Ground,Ghost",
"Milcery,Fairy",
"Alcremie,Fairy",
"Falinks,Fighting",
"Pincurchin,Electric",
"Snom,Ice,Bug",
"Frosmoth,Ice,Bug",
"Stonjourner,Rock",
"Eiscue,Ice",
"Indeedee,Psychic,Normal",
"Morpeko,Electric,Dark",
"Cufant,Steel",
"Copperajah,Steel",
"Dracozolt,Electric,Dragon",
"Arctozolt,Electric,Ice",
"Dracovish,Water,Dragon",
"Arctovish,Water,Ice",
"Duraludon,Steel,Dragon",
"Dreepy,Dragon,Ghost",
"Drakloak,Dragon,Ghost",
"Dragapult,Dragon,Ghost",
"Zacian,Fairy,Steel",
"Zamazenta,Fighting,Steel",
"Eternatus,Poison,Dragon",
"Kubfu,Fighting",
"Urshifu,Fighting,Dark",
"Zarude,Dark,Grass",
"Regieleki,Electric",
"Regidrago,Dragon",
"Glastrier,Ice",
"Spectrier,Ghost",
"Calyrex,Psychic,Grass"
];

var typeArray = ['Normal',
'Fighting',
'Flying',
'Poison',
'Ground',
'Rock',
'Bug',
'Ghost',
'Steel',
'Fire',
'Water',
'Grass',
'Electric',
'Psychic',
'Ice',
'Dragon',
'Dark',
'Fairy'];

var stateMap = {
    Poison: "Poison",
    Steel: "Poison",
    Fire: "Burn",
    Electric: "Paralysis",
    Ice: "Freeze"
}

var typeCalcMap = {};
for (var i = 0; i < typeArray.length; i++) {
    typeCalcMap[typeArray[i]] = {}
}
typeCalcMap['Normal']['Normal'] = 1;
typeCalcMap['Normal']['Fighting'] = 1;
typeCalcMap['Normal']['Flying'] = 1;
typeCalcMap['Normal']['Poison'] = 1;
typeCalcMap['Normal']['Ground'] = 1;
typeCalcMap['Normal']['Rock'] = 0.5;
typeCalcMap['Normal']['Bug'] = 1;
typeCalcMap['Normal']['Ghost'] = 0;
typeCalcMap['Normal']['Steel'] = 0.5;
typeCalcMap['Normal']['Fire'] = 1;
typeCalcMap['Normal']['Water'] = 1;
typeCalcMap['Normal']['Grass'] = 1;
typeCalcMap['Normal']['Electric'] = 1;
typeCalcMap['Normal']['Psychic'] = 1;
typeCalcMap['Normal']['Ice'] = 1;
typeCalcMap['Normal']['Dragon'] = 1;
typeCalcMap['Normal']['Dark'] = 1;
typeCalcMap['Normal']['Fairy'] = 1;
typeCalcMap['Fighting']['Normal'] = 2;
typeCalcMap['Fighting']['Fighting'] = 1;
typeCalcMap['Fighting']['Flying'] = 0.5;
typeCalcMap['Fighting']['Poison'] = 0.5;
typeCalcMap['Fighting']['Ground'] = 1;
typeCalcMap['Fighting']['Rock'] = 2;
typeCalcMap['Fighting']['Bug'] = 0.5;
typeCalcMap['Fighting']['Ghost'] = 0;
typeCalcMap['Fighting']['Steel'] = 2;
typeCalcMap['Fighting']['Fire'] = 1;
typeCalcMap['Fighting']['Water'] = 1;
typeCalcMap['Fighting']['Grass'] = 1;
typeCalcMap['Fighting']['Electric'] = 1;
typeCalcMap['Fighting']['Psychic'] = 0.5;
typeCalcMap['Fighting']['Ice'] = 2;
typeCalcMap['Fighting']['Dragon'] = 1;
typeCalcMap['Fighting']['Dark'] = 2;
typeCalcMap['Fighting']['Fairy'] = 0.5;
typeCalcMap['Flying']['Normal'] = 1;
typeCalcMap['Flying']['Fighting'] = 2;
typeCalcMap['Flying']['Flying'] = 1;
typeCalcMap['Flying']['Poison'] = 1;
typeCalcMap['Flying']['Ground'] = 1;
typeCalcMap['Flying']['Rock'] = 0.5;
typeCalcMap['Flying']['Bug'] = 2;
typeCalcMap['Flying']['Ghost'] = 1;
typeCalcMap['Flying']['Steel'] = 0.5;
typeCalcMap['Flying']['Fire'] = 1;
typeCalcMap['Flying']['Water'] = 1;
typeCalcMap['Flying']['Grass'] = 2;
typeCalcMap['Flying']['Electric'] = 0.5;
typeCalcMap['Flying']['Psychic'] = 1;
typeCalcMap['Flying']['Ice'] = 1;
typeCalcMap['Flying']['Dragon'] = 1;
typeCalcMap['Flying']['Dark'] = 1;
typeCalcMap['Flying']['Fairy'] = 1;
typeCalcMap['Poison']['Normal'] = 1;
typeCalcMap['Poison']['Fighting'] = 1;
typeCalcMap['Poison']['Flying'] = 1;
typeCalcMap['Poison']['Poison'] = 0.5;
typeCalcMap['Poison']['Ground'] = 0.5;
typeCalcMap['Poison']['Rock'] = 0.5;
typeCalcMap['Poison']['Bug'] = 1;
typeCalcMap['Poison']['Ghost'] = 0.5;
typeCalcMap['Poison']['Steel'] = 0;
typeCalcMap['Poison']['Fire'] = 1;
typeCalcMap['Poison']['Water'] = 1;
typeCalcMap['Poison']['Grass'] = 2;
typeCalcMap['Poison']['Electric'] = 1;
typeCalcMap['Poison']['Psychic'] = 1;
typeCalcMap['Poison']['Ice'] = 1;
typeCalcMap['Poison']['Dragon'] = 1;
typeCalcMap['Poison']['Dark'] = 1;
typeCalcMap['Poison']['Fairy'] = 2;
typeCalcMap['Ground']['Normal'] = 1;
typeCalcMap['Ground']['Fighting'] = 1;
typeCalcMap['Ground']['Flying'] = 0;
typeCalcMap['Ground']['Poison'] = 2;
typeCalcMap['Ground']['Ground'] = 1;
typeCalcMap['Ground']['Rock'] = 2;
typeCalcMap['Ground']['Bug'] = 0.5;
typeCalcMap['Ground']['Ghost'] = 1;
typeCalcMap['Ground']['Steel'] = 2;
typeCalcMap['Ground']['Fire'] = 2;
typeCalcMap['Ground']['Water'] = 1;
typeCalcMap['Ground']['Grass'] = 0.5;
typeCalcMap['Ground']['Electric'] = 2;
typeCalcMap['Ground']['Psychic'] = 1;
typeCalcMap['Ground']['Ice'] = 1;
typeCalcMap['Ground']['Dragon'] = 1;
typeCalcMap['Ground']['Dark'] = 1;
typeCalcMap['Ground']['Fairy'] = 1;
typeCalcMap['Rock']['Normal'] = 1;
typeCalcMap['Rock']['Fighting'] = 0.5;
typeCalcMap['Rock']['Flying'] = 2;
typeCalcMap['Rock']['Poison'] = 1;
typeCalcMap['Rock']['Ground'] = 0.5;
typeCalcMap['Rock']['Rock'] = 1;
typeCalcMap['Rock']['Bug'] = 2;
typeCalcMap['Rock']['Ghost'] = 1;
typeCalcMap['Rock']['Steel'] = 0.5;
typeCalcMap['Rock']['Fire'] = 2;
typeCalcMap['Rock']['Water'] = 1;
typeCalcMap['Rock']['Grass'] = 1;
typeCalcMap['Rock']['Electric'] = 1;
typeCalcMap['Rock']['Psychic'] = 1;
typeCalcMap['Rock']['Ice'] = 2;
typeCalcMap['Rock']['Dragon'] = 1;
typeCalcMap['Rock']['Dark'] = 1;
typeCalcMap['Rock']['Fairy'] = 1;
typeCalcMap['Bug']['Normal'] = 1;
typeCalcMap['Bug']['Fighting'] = 0.5;
typeCalcMap['Bug']['Flying'] = 0.5;
typeCalcMap['Bug']['Poison'] = 0.5;
typeCalcMap['Bug']['Ground'] = 1;
typeCalcMap['Bug']['Rock'] = 1;
typeCalcMap['Bug']['Bug'] = 1;
typeCalcMap['Bug']['Ghost'] = 0.5;
typeCalcMap['Bug']['Steel'] = 0.5;
typeCalcMap['Bug']['Fire'] = 0.5;
typeCalcMap['Bug']['Water'] = 1;
typeCalcMap['Bug']['Grass'] = 2;
typeCalcMap['Bug']['Electric'] = 1;
typeCalcMap['Bug']['Psychic'] = 2;
typeCalcMap['Bug']['Ice'] = 1;
typeCalcMap['Bug']['Dragon'] = 1;
typeCalcMap['Bug']['Dark'] = 2;
typeCalcMap['Bug']['Fairy'] = 0.5;
typeCalcMap['Ghost']['Normal'] = 0;
typeCalcMap['Ghost']['Fighting'] = 1;
typeCalcMap['Ghost']['Flying'] = 1;
typeCalcMap['Ghost']['Poison'] = 1;
typeCalcMap['Ghost']['Ground'] = 1;
typeCalcMap['Ghost']['Rock'] = 1;
typeCalcMap['Ghost']['Bug'] = 1;
typeCalcMap['Ghost']['Ghost'] = 2;
typeCalcMap['Ghost']['Steel'] = 1;
typeCalcMap['Ghost']['Fire'] = 1;
typeCalcMap['Ghost']['Water'] = 1;
typeCalcMap['Ghost']['Grass'] = 1;
typeCalcMap['Ghost']['Electric'] = 1;
typeCalcMap['Ghost']['Psychic'] = 2;
typeCalcMap['Ghost']['Ice'] = 1;
typeCalcMap['Ghost']['Dragon'] = 1;
typeCalcMap['Ghost']['Dark'] = 0.5;
typeCalcMap['Ghost']['Fairy'] = 1;
typeCalcMap['Steel']['Normal'] = 1;
typeCalcMap['Steel']['Fighting'] = 1;
typeCalcMap['Steel']['Flying'] = 1;
typeCalcMap['Steel']['Poison'] = 1;
typeCalcMap['Steel']['Ground'] = 1;
typeCalcMap['Steel']['Rock'] = 2;
typeCalcMap['Steel']['Bug'] = 1;
typeCalcMap['Steel']['Ghost'] = 1;
typeCalcMap['Steel']['Steel'] = 0.5;
typeCalcMap['Steel']['Fire'] = 0.5;
typeCalcMap['Steel']['Water'] = 0.5;
typeCalcMap['Steel']['Grass'] = 1;
typeCalcMap['Steel']['Electric'] = 0.5;
typeCalcMap['Steel']['Psychic'] = 1;
typeCalcMap['Steel']['Ice'] = 2;
typeCalcMap['Steel']['Dragon'] = 1;
typeCalcMap['Steel']['Dark'] = 1;
typeCalcMap['Steel']['Fairy'] = 2;
typeCalcMap['Fire']['Normal'] = 1;
typeCalcMap['Fire']['Fighting'] = 1;
typeCalcMap['Fire']['Flying'] = 1;
typeCalcMap['Fire']['Poison'] = 1;
typeCalcMap['Fire']['Ground'] = 1;
typeCalcMap['Fire']['Rock'] = 0.5;
typeCalcMap['Fire']['Bug'] = 2;
typeCalcMap['Fire']['Ghost'] = 1;
typeCalcMap['Fire']['Steel'] = 2;
typeCalcMap['Fire']['Fire'] = 0.5;
typeCalcMap['Fire']['Water'] = 0.5;
typeCalcMap['Fire']['Grass'] = 2;
typeCalcMap['Fire']['Electric'] = 1;
typeCalcMap['Fire']['Psychic'] = 1;
typeCalcMap['Fire']['Ice'] = 2;
typeCalcMap['Fire']['Dragon'] = 0.5;
typeCalcMap['Fire']['Dark'] = 1;
typeCalcMap['Fire']['Fairy'] = 1;
typeCalcMap['Water']['Normal'] = 1;
typeCalcMap['Water']['Fighting'] = 1;
typeCalcMap['Water']['Flying'] = 1;
typeCalcMap['Water']['Poison'] = 1;
typeCalcMap['Water']['Ground'] = 2;
typeCalcMap['Water']['Rock'] = 2;
typeCalcMap['Water']['Bug'] = 1;
typeCalcMap['Water']['Ghost'] = 1;
typeCalcMap['Water']['Steel'] = 1;
typeCalcMap['Water']['Fire'] = 2;
typeCalcMap['Water']['Water'] = 0.5;
typeCalcMap['Water']['Grass'] = 0.5;
typeCalcMap['Water']['Electric'] = 1;
typeCalcMap['Water']['Psychic'] = 1;
typeCalcMap['Water']['Ice'] = 1;
typeCalcMap['Water']['Dragon'] = 0.5;
typeCalcMap['Water']['Dark'] = 1;
typeCalcMap['Water']['Fairy'] = 1;
typeCalcMap['Grass']['Normal'] = 1;
typeCalcMap['Grass']['Fighting'] = 1;
typeCalcMap['Grass']['Flying'] = 0.5;
typeCalcMap['Grass']['Poison'] = 0.5;
typeCalcMap['Grass']['Ground'] = 2;
typeCalcMap['Grass']['Rock'] = 2;
typeCalcMap['Grass']['Bug'] = 0.5;
typeCalcMap['Grass']['Ghost'] = 1;
typeCalcMap['Grass']['Steel'] = 0.5;
typeCalcMap['Grass']['Fire'] = 0.5;
typeCalcMap['Grass']['Water'] = 2;
typeCalcMap['Grass']['Grass'] = 0.5;
typeCalcMap['Grass']['Electric'] = 1;
typeCalcMap['Grass']['Psychic'] = 1;
typeCalcMap['Grass']['Ice'] = 1;
typeCalcMap['Grass']['Dragon'] = 0.5;
typeCalcMap['Grass']['Dark'] = 1;
typeCalcMap['Grass']['Fairy'] = 1;
typeCalcMap['Electric']['Normal'] = 1;
typeCalcMap['Electric']['Fighting'] = 1;
typeCalcMap['Electric']['Flying'] = 2;
typeCalcMap['Electric']['Poison'] = 1;
typeCalcMap['Electric']['Ground'] = 0;
typeCalcMap['Electric']['Rock'] = 1;
typeCalcMap['Electric']['Bug'] = 1;
typeCalcMap['Electric']['Ghost'] = 1;
typeCalcMap['Electric']['Steel'] = 1;
typeCalcMap['Electric']['Fire'] = 1;
typeCalcMap['Electric']['Water'] = 2;
typeCalcMap['Electric']['Grass'] = 0.5;
typeCalcMap['Electric']['Electric'] = 0.5;
typeCalcMap['Electric']['Psychic'] = 1;
typeCalcMap['Electric']['Ice'] = 1;
typeCalcMap['Electric']['Dragon'] = 0.5;
typeCalcMap['Electric']['Dark'] = 1;
typeCalcMap['Electric']['Fairy'] = 1;
typeCalcMap['Psychic']['Normal'] = 1;
typeCalcMap['Psychic']['Fighting'] = 2;
typeCalcMap['Psychic']['Flying'] = 1;
typeCalcMap['Psychic']['Poison'] = 2;
typeCalcMap['Psychic']['Ground'] = 1;
typeCalcMap['Psychic']['Rock'] = 1;
typeCalcMap['Psychic']['Bug'] = 1;
typeCalcMap['Psychic']['Ghost'] = 1;
typeCalcMap['Psychic']['Steel'] = 0.5;
typeCalcMap['Psychic']['Fire'] = 1;
typeCalcMap['Psychic']['Water'] = 1;
typeCalcMap['Psychic']['Grass'] = 1;
typeCalcMap['Psychic']['Electric'] = 1;
typeCalcMap['Psychic']['Psychic'] = 0.5;
typeCalcMap['Psychic']['Ice'] = 1;
typeCalcMap['Psychic']['Dragon'] = 1;
typeCalcMap['Psychic']['Dark'] = 0;
typeCalcMap['Psychic']['Fairy'] = 1;
typeCalcMap['Ice']['Normal'] = 1;
typeCalcMap['Ice']['Fighting'] = 1;
typeCalcMap['Ice']['Flying'] = 2;
typeCalcMap['Ice']['Poison'] = 1;
typeCalcMap['Ice']['Ground'] = 2;
typeCalcMap['Ice']['Rock'] = 1;
typeCalcMap['Ice']['Bug'] = 1;
typeCalcMap['Ice']['Ghost'] = 1;
typeCalcMap['Ice']['Steel'] = 0.5;
typeCalcMap['Ice']['Fire'] = 0.5;
typeCalcMap['Ice']['Water'] = 0.5;
typeCalcMap['Ice']['Grass'] = 2;
typeCalcMap['Ice']['Electric'] = 1;
typeCalcMap['Ice']['Psychic'] = 1;
typeCalcMap['Ice']['Ice'] = 0.5;
typeCalcMap['Ice']['Dragon'] = 2;
typeCalcMap['Ice']['Dark'] = 1;
typeCalcMap['Ice']['Fairy'] = 1;
typeCalcMap['Dragon']['Normal'] = 1;
typeCalcMap['Dragon']['Fighting'] = 1;
typeCalcMap['Dragon']['Flying'] = 1;
typeCalcMap['Dragon']['Poison'] = 1;
typeCalcMap['Dragon']['Ground'] = 1;
typeCalcMap['Dragon']['Rock'] = 1;
typeCalcMap['Dragon']['Bug'] = 1;
typeCalcMap['Dragon']['Ghost'] = 1;
typeCalcMap['Dragon']['Steel'] = 0.5;
typeCalcMap['Dragon']['Fire'] = 1;
typeCalcMap['Dragon']['Water'] = 1;
typeCalcMap['Dragon']['Grass'] = 1;
typeCalcMap['Dragon']['Electric'] = 1;
typeCalcMap['Dragon']['Psychic'] = 1;
typeCalcMap['Dragon']['Ice'] = 1;
typeCalcMap['Dragon']['Dragon'] = 2;
typeCalcMap['Dragon']['Dark'] = 1;
typeCalcMap['Dragon']['Fairy'] = 0;
typeCalcMap['Dark']['Normal'] = 1;
typeCalcMap['Dark']['Fighting'] = 0.5;
typeCalcMap['Dark']['Flying'] = 1;
typeCalcMap['Dark']['Poison'] = 1;
typeCalcMap['Dark']['Ground'] = 1;
typeCalcMap['Dark']['Rock'] = 1;
typeCalcMap['Dark']['Bug'] = 1;
typeCalcMap['Dark']['Ghost'] = 2;
typeCalcMap['Dark']['Steel'] = 1;
typeCalcMap['Dark']['Fire'] = 1;
typeCalcMap['Dark']['Water'] = 1;
typeCalcMap['Dark']['Grass'] = 1;
typeCalcMap['Dark']['Electric'] = 1;
typeCalcMap['Dark']['Psychic'] = 2;
typeCalcMap['Dark']['Ice'] = 1;
typeCalcMap['Dark']['Dragon'] = 1;
typeCalcMap['Dark']['Dark'] = 0.5;
typeCalcMap['Dark']['Fairy'] = 0.5;
typeCalcMap['Fairy']['Normal'] = 1;
typeCalcMap['Fairy']['Fighting'] = 2;
typeCalcMap['Fairy']['Flying'] = 1;
typeCalcMap['Fairy']['Poison'] = 0.5;
typeCalcMap['Fairy']['Ground'] = 1;
typeCalcMap['Fairy']['Rock'] = 1;
typeCalcMap['Fairy']['Bug'] = 1;
typeCalcMap['Fairy']['Ghost'] = 1;
typeCalcMap['Fairy']['Steel'] = 0.5;
typeCalcMap['Fairy']['Fire'] = 0.5;
typeCalcMap['Fairy']['Water'] = 1;
typeCalcMap['Fairy']['Grass'] = 1;
typeCalcMap['Fairy']['Electric'] = 1;
typeCalcMap['Fairy']['Psychic'] = 1;
typeCalcMap['Fairy']['Ice'] = 1;
typeCalcMap['Fairy']['Dragon'] = 2;
typeCalcMap['Fairy']['Dark'] = 2;
typeCalcMap['Fairy']['Fairy'] = 1;


class Pokemon {

    constructor(str) {
        var tempArray = str.split(',');
        this.name = tempArray[0];
        this.type1 = tempArray[1];
        if (tempArray.length === 3) {
            this.type2 = tempArray[2];
        }
    }

    getTypeArray() {
        if (this.type2) {
            return [this.type1, this.type2];
        } 

        return [this.type1];
    }

}

var pokemonArray = pokemonData.map(x => new Pokemon(x));
function searchPokemonByName(name) {
    var pokemonList = pokemonArray.filter(x => x.name === name);
    if (pokemonList.length === 1) {
        return pokemonList[0];
    }

    return undefined;
}

function calcWeaknesses(defenseType) {
    var calcMap = [];
    for (var i = 0; i < typeArray.length; i++) {
        var rate = 1;
        var mainType = defenseType[0];
        var attackType = typeArray[i];
        rate *= typeCalcMap[attackType][mainType];

        if (defenseType.length > 1) {
            var subType = defenseType[1];
            rate *= typeCalcMap[attackType][subType];
        }

        if (rate !== 1) {
            calcMap.push({type: attackType, rate: rate});
        }
    }
    return calcMap;
}

function calcState(defenseType) {
    var result = [];
    var mainType = defenseType[0];
    if (stateMap[mainType]) {
        result.push(stateMap[mainType]);
    }

    if (defenseType.length > 1) {
        var subType = defenseType[1];
        if (stateMap[subType]) {
            result.push(stateMap[subType]);
        }
    }
    
    return result;
}