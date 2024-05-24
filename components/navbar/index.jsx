import Container from "../container";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav id="wrapper" className="w-full h-auto">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <div className="w-44 h-20 relative">
              <Image
                alt="app-logo"
                src="/images/icons/app-logo.png"
                fill
                className="object-contain"
                quality={100}
                fetchPriority="high"
              />
            </div>
          </div>
          <div>
            <div>top</div>
            <div>bottom</div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
