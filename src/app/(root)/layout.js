import Navbar from "@/components/layouts/navbar/Navbar";




export default function Layout({ children }) {
  return (
    <html>
      <body>
   <Navbar/>
        {children}
    
      </body>
    </html>
  );
}

//here we'll keep the components that we wanna keep common
// jeshob page e navbar rakhte chai na oigulor folder (root) er bahire create krbo

