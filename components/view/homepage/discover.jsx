import Container from "@/components/container";
import { HeadingOne } from "@/components/typing/heading";
import Paragraph from "@/components/typing/paragprah";

export default function Discover() {
  return (
    <Container>
      <div className="py-12 flex flex-col lg:flex-row justify-between items-start space-y-2.5 lg:space-y-0 lg:items-center">
        <HeadingOne className="font-semibold max-w-xl">{`Discover the Beauty of the Artist's Works of Art`}</HeadingOne>
        <div>
          <Paragraph>
            Free entry - <b>Book tiket online</b>
          </Paragraph>
          <Paragraph>Open today 10.00 - 20.30</Paragraph>
          <Paragraph>Last entry 20.15</Paragraph>
        </div>
      </div>
    </Container>
  );
}
