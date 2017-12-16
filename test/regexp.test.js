const regexp = require( '../src/regexp' );

describe( 'Test regular expression for remove ISBN prefix.', () => {
    const replace = ( str ) => str.replace( regexp.PREFIX, '' );
    
    it( 'Tests of correct prefixes which will be removed.', () => {
        expect( replace( 'ISBN 048665088X' ) ).toBe( '048665088X' );
        expect( replace( 'ISBN: 048665088X' ) ).toBe( '048665088X' );
        expect( replace( 'ISBN-10 048665088X' ) ).toBe( '048665088X' );
        expect( replace( 'ISBN-13 048665088X' ) ).toBe( '048665088X' );
        expect( replace( 'ISBN-10: 048665088X' ) ).toBe( '048665088X' );
        expect( replace( 'ISBN-13: 048665088X' ) ).toBe( '048665088X' );
    } );
} );
describe( 'Test regular expression for validate ISBN number.', () => {
    const correctISBN = [
        '048665088X',    //ISBN-10
        '0306406152',    //ISBN-10
        '9788371815102', //ISBN-13
    ];
    const incorrectISBN = [
        '048665088A',    //invalid letter 'A'
        '03064061521',   //too many digits (11)
        '030640615',     //not enought digits (9)
    ];
    
    it( 'Tests of correct ISBN numbers.', () => {
        correctISBN.forEach( isbn => {
            expect( regexp.ISBN.test( isbn ) ).toBeTruthy();
        } );
    } );
    it( 'Tests of incorrect ISBN numbers.', () => {
        incorrectISBN.forEach( isbn => {
            expect( regexp.ISBN.test( isbn ) ).toBeFalsy();
        } );
    } );
} );