export const parseCookies = (str: any): object => {
    let rx = /([^;=\s]*)=([^;]*)/g;
    let obj: any = { };
    for ( let m ; m = rx.exec(str) ; )
      obj[ m[1] ] = decodeURIComponent( m[2] );
    return obj;
  }