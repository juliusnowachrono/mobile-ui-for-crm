import '@styles/globals.css';
import BottomNav from '@components/BottomNav.jsx';

export const metadata = {
  title: 'Mob-Ui',
  description: 'Mobile Ui for CRMs'
};

const RootLayout = ({ children }) => {
  return (
   <html lang="en">
    <body>
      <div class="main">
        <div class="bg-color" /> 
      </div>
      
      <main class="app">
        {children}
        <BottomNav />
      </main>:
    </body>
   </html>
  );
};

export default RootLayout;
