/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className={'flex justify-center items-center p-8 bg-sky-800'}>
      <p className={'default-police text-white text-lg font-bold'}>
        <a href="#">&copy; Axel Mwenze 2022</a>
      </p>
    </footer>
  );
}

export default Footer;
