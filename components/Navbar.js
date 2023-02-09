import Image from 'next/image';
import Link from 'next/Link';

export default function Navbar() {
    return (
        <div style={{backgroundColor: '#2a2a2a'}}>
            <div style={{display: 'flex', alignItems: 'center', fontFamily: "'Open Sans', sans-serif", fontWeight: '400'}}>
                <Image src='/logo.png' alt='Store Logo' width={52} height={52} style={{marginLeft: '0.5em'}}/>
                <Link href='/' style={{margin: '0px 10.5px 0px 10.5px'}}>
                    <p style={{color: '#ccc', fontSize: '0.75em'}}>STORE</p>
                </Link>
                <div style={{width: '1px', height: '30px', margin: '12px', backgroundColor: '#e7e7e7', opacity: '.55'}}/>
                <Link href='/support' style={{margin: '0px 10.5px 0px 10.5px'}}>
                    <p style={{color: '#ccc', fontSize: '0.75em'}}>SUPPORT</p>
                </Link>
            </div>
        </div>
    )
}
