function hoppyPeople( body, appendTo ) {

    var binder = new dataBinder();

    people = {
        // keep a track of how many people there are
        persons: {},
        count: 0,
        active: 0,
        minY: 150,
        maxY: 400,

        create: function() {
            // get next person id
            this.persons[ this.count ] = [];
            var attributes = [];
            // set some defaults properties for the person
            attributes.height = 5;
            attributes.currentX = Math.floor(Math.random() * 600) + 1;
            attributes.multiplier = (Math.floor(Math.random() * 300) / 1000 ) + 1;
            attributes.currentY = this.maxY; 
            attributes.direction = 'down';
            attributes.name = 'totoro';
            attributes.type = 'totoro';
            attributes.view = document.createElement( 'div' );
            attributes.view.innerHTML = "<div id='person" + this.count + "' class='person' style='position:absolute'>"
            + "<p>" + attributes.name + "</p>"
            + "<img src='resources/totoro.gif' />"
            + "</div>";
            this.persons[ this.count ] = attributes;
            this.active = this.count;
            // render
            document.getElementById( appendTo ).appendChild( attributes.view );
            setInterval( this.render.bind( this, this.count ), 1 );
            // up the count
            this.count++;
            // add new person to the select list for editing
            body.addOption( 'active_person', 'Person' + this.count, this.count );
        },

        render: function( tar ) {
            var target = document.getElementById( 'person' + tar );
            var values = this.persons[ tar ];
            // set x & y
            target.style.top = values.currentY + 'px';
            target.style.left = values.currentX + 'px';
            // since we're jumping increment y
            if ( values.currentY < this.maxY && values.direction === 'down' ) {
                values.currentY++;
            } else if ( values.currentY > this.minY && values.direction === 'up' ){
                values.currentY = values.currentY - values.multiplier;
            } else if ( values.currentY >= this.maxY && values.direction === 'down' ) {
                values.direction = 'up';
            } else if ( values.currentY <= this.maxY && values.direction === 'up' ) {
                values.direction = 'down';
            }
        },

        update: function(tar, property, value) {
            this.persons[ tar ][ property ] = value; 
        }

    };

    binder.on( 'people:change', function( evt, attr_name, new_val, initiator ) {
        if ( attr_name === 'active' ) {
            // strip person from value
            var personNum = new_val.replace( 'Person', '' );

            // set new active
            people.active = personNum;

            // update display
            body.updateElement(
                'multiplier',
                'value',
                ( people.persons[ ( people.active - 1 ) ].multiplier * 10 )
            );
            body.updateElement(
                'person_name',
                'value',
                ( people.persons[ ( people.active - 1 ) ].name )
            );
            // change the select menu
            var select = document.getElementById( 'person_type' );
            for(var i, j = 0; i = select.options[j]; j++) {
                console.log( i.value, people.persons[ ( people.active - 1 ) ].type );
                if( i.value == people.persons[ ( people.active - 1 ) ].type ) {
                    select.selectedIndex = j;
                    break;
                }
            } 
        } else if ( attr_name === 'multiplier' ) {
            // update the multiplier and we divid by 10 so people
            // don't have to deal with fractions
            people.persons[ ( people.active - 1 ) ].multiplier = new_val/10;
        } else if ( attr_name === 'type' ) {
            // changing type means we need to query for a new tempalte.
            // request the new html
            var html = body.getTemplate(
                'templates/' + new_val + ".html",
                {
                    'count':  ( people.active - 1 ),
                    'name': people.persons[ (people.active - 1) ].name
                }
            );
            // now append to the object that
            var target = document.getElementById( 'person' + ( people.active - 1 ) ).parentNode;
            target.innerHTML = html;
            people.persons[ ( people.active - 1 ) ].type = new_val;
        } else if ( attr_name === 'name' ) {
            // update name in the model
            people.persons[ ( people.active - 1 ) ].name = new_val;
            // get the person div
            var nameHolder = document.getElementById(
                'person' + ( people.active - 1 )
            );
            // now find the p child and update the html
            nameHolder.querySelector( 'p' ).innerHTML = new_val;

        }
    });

   return people; 
}
