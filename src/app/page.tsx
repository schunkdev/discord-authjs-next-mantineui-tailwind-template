import { auth } from '@lib/auth';
import { Button } from '@mantine/core';

export default function HomePage() {
  return (
    <div>
      <Button className="text-3xl underline">hello</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        variant="outline"
        color="blue"
        onClick={async () => {
          const s = await auth();
        }}
      ></Button>
    </div>
  );
}
