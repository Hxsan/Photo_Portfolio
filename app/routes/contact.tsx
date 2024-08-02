import { MetaFunction } from '@remix-run/node'; // Import MetaFunction type
import Nav from '../components/Nav';

export const meta: MetaFunction = () => {
  return [{ title: 'Contact' }];
};

export default function Contact() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <Nav />
      <h1>Contact us</h1>
      <p>Contact form: ...</p>
    </div>
  );
}
