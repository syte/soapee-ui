import Reflux from 'reflux';

import recipeActions from 'actions/recipe';
import RecipeModel from 'models/recipe';

export default Reflux.createStore( {

    store: null,

    init() {
        this.store = new RecipeModel();
        this.store.on( 'calculated', doTrigger.bind( this ) );

        this.listenTo( recipeActions.getRecipeById.completed, gotRecipe.bind( this ) );
        this.listenTo( recipeActions.setSaveFormFields, setNotesAndDescription.bind( this ) );
    },

    getInitialState() {
        return this.store;
    }

    ///public methods

} );

//////////////////////////
//// Private

function gotRecipe( recipe ) {
    this.store.setRecipe( recipe );

    doTrigger.call( this );
}

function setNotesAndDescription( notes, description ) {
    this.store.setModelValue( 'notes', notes );
    this.store.setModelValue( 'description', description );

    doTrigger.call( this );
}

function doTrigger() {
    this.trigger( this.store );
}