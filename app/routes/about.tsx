import { MetaFunction } from '@remix-run/node';
import Nav from '../components/Nav';

export const meta: MetaFunction = () => {
  return [{ title: 'About page' }];
};

export default function About() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <Nav />
      <h1>About this site</h1>
      <p>It's a very cool site!</p>
    </div>
  );
}
