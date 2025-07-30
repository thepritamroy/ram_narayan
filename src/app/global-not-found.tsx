import Image from "next/image";
import Link from "next/link";


export default function GlobalNotFound() {
  return (
    <html>
      <body>
        <main>
          <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',height:'100vh',overflow:'hidden'}}>
            <Image src="/alec_pendi.jpg" alt="Alec_pendi" width ={500} height={500} style={{objectFit:'cover'}} />
            <h1 style={{textTransform:'uppercase',fontFamily:'sans-serif',color:'red',fontSize:'20px',textAlign:'center'}}>This page is under construction</h1>
            <h3 style={{fontFamily:'sans-serif',fontSize:'10px',textAlign:'center',color:'gray'}}>(Padai karle mad*rchod😁)</h3>
            <Link href="/" style={{textDecoration:'none',padding:'10px',border:'none',fontFamily:'sans-serif',color:'white', background:'blue',cursor:'pointer'}}>Ghar Wapsi</Link>
          </div>
        </main>
      </body>
    </html>
  )
}