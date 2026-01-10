"use client";

import { Tabs } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleTabChange = (key: React.Key) => {
    router.push(`/${key}`);
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16'>
      <Tabs className='w-full max-w-md' onSelectionChange={handleTabChange}>
        <Tabs.ListContainer>
          <Tabs.List aria-label='Options'>
            <Tabs.Tab id='posts'>
              Posts
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id='users'>
              Users
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    </div>
  );
}
