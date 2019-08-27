import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerializeService {

  serializeData(data): string {
    if ( typeof data !== 'object') {
      return( ( data == null ) ? '' : data.toString() );
    }
    const buffer = [];
    for ( const name in data ) {
      if ( ! data.hasOwnProperty( name ) ) {
        continue;
      }
      const value = data[ name ];
      buffer.push(
        encodeURIComponent( name ) + '=' + encodeURIComponent( ( value == null ) ? '' : value )
      );
    }
    const source = buffer.join( '&' ).replace( /%20/g, '+' );
    return( source );
  }
}
