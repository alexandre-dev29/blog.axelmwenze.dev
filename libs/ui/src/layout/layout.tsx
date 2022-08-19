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
      <div
        className={
          'pt-10 pb-8 px-10 sm:px-24 md:px-28 lg:px-36 xl:px-48 2xl:px-56  pt-4 md:pt-16'
        }
      >
        {children}
      </div>
      <SubscribeNewsletter />
      <Footer />
    </div>
  );
}

export default Layout;
