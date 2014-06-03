var exec = require( 'child_process' ).exec;

console.log( "\nprocess.cwd()\t\t: " + process.cwd() );

exec( 'set > envBefore.txt', doFirstCd );

function doFirstCd() {
	exec( 'cd', function( error, stdout ) {
		console.log( "`cd` stdout\t\t: " + stdout );
	
		exec( 'set > envAfter.txt', doSecondCd );
	} );
}

function doSecondCd() {
	exec( 'cd', { cwd: process.cwd() }, function( error, stdout ) {
		console.log( "`cd` stdout with cwd\t: " + stdout );
	} );
};