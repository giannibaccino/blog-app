"use client";

import { Tabs } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";

export default function TabNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const getSelectedTab = () => {
    if (pathname.startsWith("/posts/new")) return "posts/new";
    if (pathname.startsWith("/posts")) return "posts";
    if (pathname.startsWith("/users")) return "users";
    return "posts";
  };

  const handleTabChange = (key: React.Key) => {
    router.push(`/${key}`);
  };

  return (
    <div className='bg-slate-100'>
      <div className='max-w-xl mx-auto px-4'>
        <Tabs
          selectedKey={getSelectedTab()}
          onSelectionChange={handleTabChange}
        >
          <Tabs.ListContainer>
            <Tabs.List aria-label='Navigation'>
              <Tabs.Tab id='posts'>
                Posts
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id='users'>
                Users
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id='posts/new'>
                Create Post
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </div>
    </div>
  );
}
