//function domManipulator() {
    //var body = document.body;
    // console out so we can see it got the body
    // and with the id we set on it
    //console.log( body );
    // 5 build function for building dom elements
    //this.createElement = function( type, id, tar ) {
        // create element on the body using the traditional method
        //var newElement = document.createElement( type );
        // check to see if there is a target and if so append it
        //if ( tar ) {
            //document.getElementById( tar ).appendChild( newElement );
        //} else {
            //body.appendChild( newElement );
        //}
        // now change the id to desired value
        //newElement.setAttribute( 'id', id );
        // return true so conditionals will work
        //return true;
    //}
    // 7 write function for changing dom
    //this.updateElement = function( tar, properties, value) {
        // 9 expand method to take array of properties
        //if ( typeof properties === 'string') {
            //document.getElementById( tar )[properties] = value;
        //} else {
            // set target as base for changing property
            //var baseTarget = document.getElementById( tar );
            // loop through properties to build path to property to change
            //for ( var p = 0; p < properties.length; p++ ) {
                // check to see if we've reached the end, if so
                // that the full path and set value
                //if ( p === ( properties.length - 1 )) {
                    // set value
                    baseTarget[ properties [ p ] ] = value;
                //} else {
                    // if not keep building path
                    baseTarget = baseTarget[ properties[ p ] ];
                //}
            //}
        //}
    //}
    // 13 create function to move dom elements to inside another
    //this.moveElement = function( mover, moveTo ) {
        // get the mover
        //var moverObj = document.getElementById( mover );
        // remove mover
        //moverObj.parentNode.removeChild( moverObj );
        // 18 replace the above with the new call
        //this.deleteElement( mover ); 
        // append to moveTo target
        //document.getElementById( moveTo ).appendChild( moverObj );
    //}
    // 17 function to delete dom elements
    //this.deleteElement = function( target ) {
        // get element to delete
        //var deleteElement = document.getElementById( target );
        //if ( deleteElement ) {
            //deleteElement.parentNode.removeChild( deleteElement );
        //}
    //}
    // 22 Create method for setting attribute
    //this.setAttr = function( target, attribute, value) {
        //document.getElementById( target ).setAttribute( attribute, value );
    //}
    // 27 Create template loader and renderor
    //this.getTemplate = function( template, options ) {
        //var requestor = new ajax();
        // make request for template
        //var html = requestor.makeRequest( template );
        // replace all the options in the template with their values
        //for ( var pos in options ) {
            //var tempPatt = new RegExp( '{{' + pos + '}}', 'g' );
            //html = html.replace(tempPatt, options[ pos ] );
        //}
        //return html;
    //}
    //this.addOption = function( tar, value ) {
        //var select = document.getElementById( tar );
        //var option = document.createElement( "option" );
        //option.text = value;
        //select.add(option);
    //}
    // 28 Find any dom element and retrun one
    //this.findOne = function( tar ) {
        //var found = document.querySelector( tar );
        //if ( found ) {
            //return found;
        //}
    //}
    // 29. Find all of a type
    //this.findAll = function( tar ) {
        //var found = document.querySelectorAll( tar );
        //if ( found ) {
            //return found;
        //}
    //}
//}
