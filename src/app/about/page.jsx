import Link from 'next/link';

const About = () => {
  
  return (
      <div className="container">
        <div className="content">
          <Link className="link" href="/">
            <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.94585 18.1458L8.84064 19.25L2.82085 13.2323C2.72381 13.1359 2.6468 13.0212 2.59425 12.8949C2.5417 12.7686 2.51465 12.6331 2.51465 12.4963C2.51465 12.3596 2.5417 12.2241 2.59425 12.0978C2.6468 11.9715 2.72381 11.8568 2.82085 11.7604L8.84064 5.73958L9.9448 6.84374L4.29481 12.4948L9.94585 18.1458Z" fill="white" />
            </svg>
            Вернуться на главную
          </Link>
          <h1>Аренда жилья и автомобилей</h1>
          <p className="desc">Большой выбор на любой вкус и цвет</p>
        </div>
      </div>
  );
}

export default About;