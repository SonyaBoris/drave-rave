import Search from "@/features/Search";
import Link from 'next/link';

export default function Home() {
  return (
      <div className="container">
        <div className="content">
          <p className="desc">Ut enim ad minim veniam</p>
          <h1>Duis aute irure dolor in reprehenderit</h1>
          <Link className="link" href="/about">
            Узнать больше об условиях аренды
            <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.55415 6.85417L3.65936 5.75001L9.67915 11.7677C9.77619 11.8641 9.8532 11.9788 9.90575 12.1051C9.9583 12.2314 9.98535 12.3669 9.98535 12.5037C9.98535 12.6404 9.9583 12.7759 9.90575 12.9022C9.8532 13.0285 9.77619 13.1432 9.67915 13.2396L3.65936 19.2604L2.5552 18.1563L8.20519 12.5052L2.55415 6.85417Z" fill="white" />
            </svg>
          </Link>
        </div>
        <Search />
      </div>
  );
}
