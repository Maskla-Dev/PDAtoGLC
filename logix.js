export const symbols = ["a", "b", "c", "Ɛ"]
export const states = ["q0", "q1", "q2", "f"]
export const transitions = [
    // { "from_state": "s", "to_state": "q0", "symbol": "Ɛ", "read_symbols": ["Ɛ"], "push_symbols": ["Z"] },
    { "from_state": "q0", "to_state": "q0", "symbol": "a", "read_symbols": ["Z"], "push_symbols": ["B", "A", "Z"] },
    { "from_state": "q0", "to_state": "q0", "symbol": "a", "read_symbols": ["B"], "push_symbols": ["B", "A", "B"] },
    { "from_state": "q0", "to_state": "q1", "symbol": "b", "read_symbols": ["B"], "push_symbols": ["Ɛ"] },
    { "from_state": "q0", "to_state": "q1", "symbol": "b", "read_symbols": ["A"], "push_symbols": ["Ɛ"] },
    { "from_state": "q1", "to_state": "q1", "symbol": "b", "read_symbols": ["A"], "push_symbols": ["Ɛ"] },
    { "from_state": "q1", "to_state": "q1", "symbol": "b", "read_symbols": ["B"], "push_symbols": ["Ɛ"] },
    { "from_state": "q1", "to_state": "q2", "symbol": "c", "read_symbols": ["B"], "push_symbols": ["Ɛ"] },
    { "from_state": "q1", "to_state": "q2", "symbol": "c", "read_symbols": ["A"], "push_symbols": ["Ɛ"] },
    { "from_state": "q2", "to_state": "q2", "symbol": "c", "read_symbols": ["A"], "push_symbols": ["Ɛ"] },
    { "from_state": "q2", "to_state": "q2", "symbol": "c", "read_symbols": ["B"], "push_symbols": ["Ɛ"] },
    { "from_state": "q2", "to_state": "f", "symbol": "Ɛ", "read_symbols": ["Z"], "push_symbols": ["Ɛ"] }
]
export let initial_state = 'q0'
export let final_state = 'f'
export const stack_symbols = ["A", "B", "Z", "Ɛ"]

export function addSymbol( e ) {
    const symbol = document.getElementById( 'symbol' ).value
    const symbol_element = document.createElement( 'div' )
    symbol_element.classList.add( 'symbol' )
    symbol_element.innerHTML = symbol
    symbols.push( symbol )
    addToSymbolsOptions( symbol )
    document.getElementById( 'simbols-container' ).appendChild( symbol_element )
    document.getElementById( 'symbol' ).value = ''
}

export function addState( e ) {
    const state = document.getElementById( 'state' ).value
    const state_element = document.createElement( 'div' )
    states.push( state )
    addToStatesOptions( state )
    state_element.classList.add( 'state' )
    state_element.innerHTML = state
    document.getElementById( 'states-container' ).appendChild( state_element )
    document.getElementById( 'state' ).value = ''
}

export function addStackSymbol( e ) {
    const symbol = document.getElementById( 'stack-symbol' ).value
    const symbol_element = document.createElement( 'div' )
    symbol_element.classList.add( 'symbol' )
    symbol_element.innerHTML = symbol
    stack_symbols.push( symbol )
    addToStackOptions( symbol )
    document.getElementById( 'stack-symbol' ).appendChild( symbol_element )
    document.getElementById( 'stack-symbol' ).value = ''
}

function addToStatesOptions( state ) {
    const option = document.createElement( 'option' )
    option.value = state
    option.innerHTML = state
    Array.from( document.getElementsByClassName( 'state-list' ) ).forEach( element => {
        element.appendChild( option.cloneNode( true ) )
    } )
}

function addToSymbolsOptions( symbol ) {
    const option = document.createElement( 'option' )
    option.value = symbol
    option.innerHTML = symbol
    Array.from( document.getElementsByClassName( 'transition-symbol' ) ).forEach( element => {
        element.appendChild( option.cloneNode( true ) )
    } )
}

function addToStackOptions( symbol ) {
    const option = document.createElement( 'option' )
    option.value = symbol
    option.innerHTML = symbol
    Array.from( document.getElementsByClassName( 'stack-symbol' ) ).forEach( element => {
        element.appendChild( option.cloneNode( true ) )
    } )
}

export function addReadInput( e ) {
    const read_input = document.createElement( 'select' )
    read_input.classList.add( 'transition-symbol' )
    stack_symbols.forEach( symbol => {
        const option = document.createElement( 'option' )
        option.value = symbol
        option.innerHTML = symbol
        read_input.appendChild( option )
    } )
    document.getElementById( 'from-stack-symbols' ).appendChild( read_input )
}

export function addPushInput( e ) {
    const push_input = document.createElement( 'select' )
    push_input.classList.add( 'transition-symbol' )
    stack_symbols.forEach( symbol => {
        const option = document.createElement( 'option' )
        option.value = symbol
        option.innerHTML = symbol
        push_input.appendChild( option )
    } )
    document.getElementById( 'to-stack-symbols' ).appendChild( push_input )
}

export function addTransition( e ) {
    const from_state = document.getElementById( 'from-state' ).value
    const to_state = document.getElementById( 'to-state' ).value
    const read_symbols = Array.from( document.getElementById( 'from-stack-symbols' ).children ).map( element => element.value )
    const push_symbols = Array.from( document.getElementById( 'to-stack-symbols' ).children ).map( element => element.value )
    const symbol = document.getElementById( 'symbol-read' ).value
    const transition = {
        from_state,
        to_state,
        symbol,
        read_symbols,
        push_symbols
    }
    transitions.push( transition )
    const transition_element = document.createElement( 'div' )
    transition_element.classList.add( 'transition' )
    transition_element.innerHTML = JSON.stringify( transition )
    document.getElementById( 'transition-table' ).appendChild( transition_element )
}

export function deleteReadInput( e ) {
    const read_inputs = Array.from( document.getElementById( 'from-stack-symbols' ).children )
    read_inputs[read_inputs.length - 1].remove()
}

export function deletePushInput( e ) {
    const push_inputs = Array.from( document.getElementById( 'to-stack-symbols' ).children )
    push_inputs[push_inputs.length - 1].remove()
}

export function addInitialState( e ) {
    initial_state = document.getElementById( 'initial-state' ).value
}

export function addFinalState( e ) {
    final_state = document.getElementById( 'final-state' ).value
}

export function resolve( e ) {
    document.getElementById( "first-rule-steps" ).innerHTML = `S -> ${initial_state}, Z, ${final_state}`
    states.forEach( state => {
        const node = document.createElement( 'div' )
        node.innerHTML = `(${state}, Ɛ, ${state}) -> Ɛ`
        document.getElementById( "second-rule-steps" ).appendChild( node )
    } )
    let epsilon_transition_filtering = transitions.filter( transition => transition.push_symbols.includes( 'Ɛ' ) )
    states.forEach( state => {
        epsilon_transition_filtering.forEach( transition => {
            const node = document.createElement( 'div' )
            node.innerHTML = `(${transition.from_state}, ${transition.read_symbols.join( "" )}, ${state}) -> ${transition.symbol}(${transition.to_state}, Ɛ, ${state})`
            document.getElementById( "third-rule-steps" ).appendChild( node )
        } )
    } )
    let push_filtering = transitions.filter( transition => {
        return transition.push_symbols[0] !== 'Ɛ';
    } )
    console.log( push_filtering )
    // // Get all states from push_filtering (from and to) and remove duplicates
    let states_from_push_filtering = push_filtering.map( transition => transition.from_state )
    let states_to_push_filtering = push_filtering.map( transition => transition.to_state )
    let union = [...new Set( states_from_push_filtering.concat( states_to_push_filtering ) )]
    push_filtering.forEach( transition => {
        // let node = document.createElement( 'div' )
        let union_permutations = getPermutationsWithReplacement( states, transition.push_symbols.length )
        for ( let i = 0; i < union_permutations.length; i++ ) {
            const node = document.createElement( 'div' )
            node.innerHTML = `(${transition.from_state}, ${transition.read_symbols.join( "" )}, ${union_permutations[i][union_permutations[i].length - 1]}) -> ${transition.symbol}(${transition.to_state}, ${transition.push_symbols[0]}, ${union_permutations[i][0]})`
            for ( let k = 1; k < union_permutations[i].length; ++k ) {
                node.innerHTML += `(${union_permutations[i][k - 1]}, ${transition.push_symbols[k]}, ${union_permutations[i][k]})`
            }
            document.getElementById( "fourth-rule-steps" ).appendChild( node )
        }
    } )
}

function getPermutationsWithReplacement( array, n ) {
    let result = [];

    function helper( tempArray, n ) {
        if ( n === 0 ) {
            result.push( tempArray );
            return;
        }
        for ( let i = 0; i < array.length; i++ ) {
            helper( tempArray.concat( array[i] ), n - 1 );
        }
    }

    helper( [], n );
    return result;
}