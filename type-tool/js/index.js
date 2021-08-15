window.onload = function() {
    var inputElement = document.getElementById('input');
    var outputElement = document.querySelector('.output');

    inputElement.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            var inputValue = inputElement.value.trim();
            if (inputValue.startsWith('!weakness')) {
                var pokemonName = inputValue.split(' ', 2)[1];
                if (pokemonName) {
                    var pokemon = searchPokemonByName(pokemonName);
                    if (pokemon) {
                        var textNode = document.createElement('p');
                        var defenseType = pokemon.getTypeArray();
                        var calcMap = calcWeaknesses(defenseType);
                        var weaknesses = calcMap.filter(x => x.rate > 1).map(x => x.type);
                        var resistance = calcMap.filter(x => x.rate < 1).map(x => x.type);
                        var immunities = calcState(defenseType);
                        outputElement.appendChild(createTypeOutput(pokemonName, weaknesses, resistance, immunities));
                    } else {
                        var textNode = document.createElement('p');
                        textNode.innerText = 'no pokemon found for name ' + pokemonName;
                        outputElement.appendChild(textNode);
                    }
                }
            } else if (inputValue) {
                var textNode = document.createElement('p');
                textNode.innerText = inputValue;
                outputElement.appendChild(textNode);
            }
            outputElement.scrollTop = outputElement.scrollHeight;
            inputElement.value = '';
        }
    });

    function createTypeOutput(pokemonName, weaknesses, resistance, immunities) {
        var typeOutput = document.createElement('div');
        typeOutput.className = 'type-output';

        var title = document.createElement('div');
        title.className = 'title';
        var p = document.createElement('p');
        p.innerText = `${pokemonName}(ignoring abilities):`;
        title.appendChild(p);

        var weeknesseElement = document.createElement('div');
        weeknesseElement.className = 'weaknesses';
        var eSpan = document.createElement('span');
        eSpan.innerText = 'Weaknesses: ';
        weeknesseElement.appendChild(eSpan);
        for (var i = 0; i < weaknesses.length; i++) {
            var span = document.createElement('span');
            span.innerText = weaknesses[i] + (i === weaknesses.length - 1 ? '' : ',');
            weeknesseElement.appendChild(span);
        }

        var resistanceElement = document.createElement('div');
        resistanceElement.className = 'resistance';
        var rSpan = document.createElement('span');
        rSpan.innerText = 'Resistance: ';
        resistanceElement.appendChild(rSpan);
        for (var i = 0; i < resistance.length; i++) {
            var span = document.createElement('span');
            span.innerText = resistance[i] + (i === resistance.length - 1 ? '' : ',');
            resistanceElement.appendChild(span);
        }

        var immunitiesElement = document.createElement('div');
        immunitiesElement.className = 'immunities';
        var iSpan = document.createElement('span');
        iSpan.innerText = 'Immunities: ';
        immunitiesElement.appendChild(iSpan);
        for (var i = 0; i < immunities.length; i++) {
            var span = document.createElement('span');
            span.innerText = immunities[i] + (i === immunities.length - 1 ? '' : ',');
            immunitiesElement.appendChild(span);
        }

        typeOutput.appendChild(title);
        typeOutput.appendChild(weeknesseElement)
        typeOutput.appendChild(resistanceElement);

        if (immunities) {
            typeOutput.appendChild(immunitiesElement);
        }

        return typeOutput;
    }
}

