import './style.css'
import {
    addState,
    addSymbol,
    addPushInput,
    addReadInput,
    addTransition,
    deleteReadInput,
    deletePushInput,
    addStackSymbol,
    addInitialState,
    addFinalState,
    resolve
} from "./logix.js"

const symbol_input = document.getElementById( 'add-symbol' )
const state_input = document.getElementById( 'add-state' )
const stack_symbol_input = document.getElementById( 'add-stack-symbol' )
const transition_input = document.getElementById( 'add-transition' )
const read_input = document.getElementById( 'add-read' )
const push_input = document.getElementById( 'add-push' )
const delete_read = document.getElementById( 'delete-read' )
const delete_push = document.getElementById( 'delete-push' )
const initial_state = document.getElementById( 'initial-state' )
const final_state = document.getElementById( 'final-state' )
const get_input = document.getElementById( 'get' )

state_input.addEventListener( 'click', addState )
symbol_input.addEventListener( 'click', addSymbol )
read_input.addEventListener( 'click', addReadInput )
push_input.addEventListener( 'click', addPushInput )
transition_input.addEventListener( 'click', addTransition )
delete_read.addEventListener( 'click', deleteReadInput )
delete_push.addEventListener( 'click', deletePushInput )
stack_symbol_input.addEventListener( 'click', addStackSymbol )
initial_state.addEventListener( 'change', addInitialState )
final_state.addEventListener( 'change', addFinalState )
get_input.addEventListener( 'click', resolve )