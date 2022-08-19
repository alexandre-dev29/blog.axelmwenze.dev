import NavBar from '../nav-bar/nav-bar';
import Footer from '../footer/footer';
import SubscribeNewsletter from '../subscribe-newsletter/subscribe-newsletter';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={'pt-10'}>
      <NavBar />
      {children}
      <SubscribeNewsletter />
      <Footer />
    </div>
  );
}

export default Layout;
